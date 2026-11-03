#!/usr/bin/env python3
"""Deterministic Gazette facts. Inputs are already transcribed and verified separately."""
import json, sys
from decimal import Decimal, ROUND_HALF_UP

def d(x):
    if x is None or isinstance(x, bool):
        raise ValueError('Missing or invalid decimal')
    value=Decimal(str(x))
    if not value.is_finite(): raise ValueError('Nonfinite number')
    return value

def fmt(x): return format(x, 'f')

def calculate(p):
    games=p['games']
    if len(games)!=6: raise ValueError('Exactly six games required')
    scores={}; opponent={}; results=[]
    for g in games:
        a,b=g['a'],g['b']
        if not isinstance(a,str) or not isinstance(b,str) or not a or not b or a==b or a in scores or b in scores:
            raise ValueError('Twelve unique nonempty team IDs required')
        sa,sb=d(g['score_a']),d(g['score_b'])
        scores[a]=sa; scores[b]=sb; opponent[a]=b; opponent[b]=a
        results.append({'a':a,'b':b,'score_a':fmt(sa),'score_b':fmt(sb),'margin':fmt(abs(sa-sb)), 'winner': a if sa>sb else b if sb>sa else None})
    out={'games':results,'league_total':fmt(sum(scores.values())),
         'highest_teams':[t for t in scores if scores[t]==max(scores.values())],
         'lowest_teams':[t for t in scores if scores[t]==min(scores.values())],
         'closest_games':[g for g in results if d(g['margin'])==min(d(x['margin']) for x in results)],
         'largest_margins':[g for g in results if d(g['margin'])==max(d(x['margin']) for x in results)]}
    out['expected_wins']={t:fmt((sum(Decimal(1) if v>u else Decimal('0.5') if v==u else Decimal(0) for q,u in scores.items() if q!=t)/Decimal(11)).quantize(Decimal('0.0001'),rounding=ROUND_HALF_UP)) for t,v in scores.items()}
    if 'projections' in p:
        if not set(p['projections']).issubset(scores): raise ValueError('Unknown projection team')
        out['projection_variance']={t:fmt(scores[t]-d(v)) for t,v in p['projections'].items()}
    if 'starter_totals' in p:
        if not set(p['starter_totals']).issubset(scores): raise ValueError('Unknown starter-total team')
        out['starter_total_discrepancies']={t:fmt(d(v)-scores[t]) for t,v in p['starter_totals'].items() if d(v)!=scores[t]}
    if 'current_board' in p or 'previous_board' in p:
        current,previous=p['current_board'],p['previous_board']
        if len(current)!=12 or len(previous)!=12 or set(current)!=set(scores) or set(previous)!=set(scores):
            raise ValueError('Boards must contain exactly the same twelve teams')
        if not p.get('board_type') or p['board_type']!=p.get('previous_board_type'):
            raise ValueError('Do not compare different board types')
        if not p.get('baseline_week'): raise ValueError('Published baseline week required')
        out['rank_movement']={t:previous.index(t)-current.index(t) for t in current}
        out['baseline_week']=p['baseline_week']
    if 'chaos_components' in p:
        names=['outcome_impact','positional_volatility','scoring_concentration','unpredictability']
        c=p['chaos_components']
        if set(c)!=set(names): raise ValueError('Four Chaos components required')
        values=[d(c[n]) for n in names]
        if any(v<0 or v>10 for v in values): raise ValueError('Chaos grades outside 0-10')
        raw=sum(v*w for v,w in zip(values,map(Decimal,['0.4','0.2','0.2','0.2'])))
        rounded=raw.quantize(Decimal('0.1'),rounding=ROUND_HALF_UP)
        band='Calm' if rounded<2 else 'Stirring' if rounded<4 else 'Active' if rounded<6 else 'Severe' if rounded<8 else 'Full Chaos'
        out['chaos']={'raw':fmt(raw),'display':fmt(rounded),'level':band,'method':'editorial-v1','components':{n:fmt(d(c[n])) for n in names}}
    out['bench_swaps']=[]
    for s in p.get('bench_swaps',[]):
        if s.get('eligibility_verified') is not True or not s.get('source'): raise ValueError('Bench swap requires verified eligibility and source')
        t=s['team']; delta=d(s['bench_points'])-d(s['starter_points']); alternate=scores[t]+delta
        other=scores[opponent[t]]
        out['bench_swaps'].append({'team':t,'delta':fmt(delta),'alternate':fmt(alternate),'opponent_score':fmt(other),'result':'win' if alternate>other else 'tie' if alternate==other else 'loss'})
    return out

if __name__=='__main__':
    try:
        with open(sys.argv[1]) as f: packet=json.load(f)
        print(json.dumps(calculate(packet),indent=2))
    except (ValueError,KeyError,IndexError,TypeError) as e:
        sys.exit('Invalid Gazette packet: '+str(e))
