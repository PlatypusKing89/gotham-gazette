// Curated, timestamped election snapshots. Newest edition first.
// The "verified" values are the Gazette's checked ledger, not a comprehensive AP feed.
// Only append facts backed by named sources; never turn unknown into zero.
export const editions = [
  {
    "slug": "2026-11-03-2026",
    "date": "2026-11-03",
    "displayDate": "Tuesday, November 3, 2026",
    "displayTime": "8:26 p.m. Eastern",
    "iso": "2026-11-03T20:26:00-05:00",
    "kind": "8:26 PM Midterm Desk Update",
    "headline": "FLORIDA HAS A HOUSE CALL. GEORGE HAS LOST HIS EDITORIAL PRIVILEGES.",
    "deck": "A newly verified Democratic House hold joins the Georgia and Virginia Senate results. National control is still undecided; Henny has been asked to manage his expectations.",
    "lede": "The new name on our verified board is Debbie Wasserman Schultz: the AP called her victory in Florida's redrawn 20th District at 7:09 p.m. Eastern, a result the previous Gazette edition had not recorded. The Senate still has our previously reported Democratic holds in Georgia and Virginia, and no verified new Senate flip. The country is counting ballots while this newsroom is also conducting a completely separate, deeply personal investigation into George's attitude.",
    "method": "Curated research cutoff 8:26 p.m. ET. Compared directly with the previously published 8:12 p.m. edition. AP's Florida-20 call is newly VERIFIED BY THIS DESK, not necessarily newly made: AP called it at 7:09 p.m. The Senate board includes 65 nonvoting holdover seats and two reported Democratic holds. House and governor panels show only calls individually cross-checked here, NOT national totals; unknown cells are not lost elections or predictions. No chamber-control projection is claimed.",
    "seatCounts": {
      "senate": {
        "label": "U.S. Senate",
        "total": 100,
        "contested": 35,
        "needed": 51,
        "dem": 36,
        "rep": 31,
        "unverified": 33,
        "note": "34 Democratic-caucusing holdovers plus AP-called Mark Warner (VA) and AP/Reuters-reported Jon Ossoff (GA): 36 D-caucus; 31 Republican holdovers. The remaining 33 contests are not individually verified in this selective edition. No newly verified Senate call versus 8:12 p.m.",
        "source": "https://apnews.com/article/f126e12e05b579a327b98481c0ae2226"
      },
      "house": {
        "label": "U.S. House",
        "total": 435,
        "contested": 435,
        "needed": 218,
        "dem": 1,
        "rep": 0,
        "unverified": 434,
        "note": "One race individually verified for this update: AP called Debbie Wasserman Schultz (D) in Florida's 20th District at 7:09 p.m. This is a SELECTIVE VERIFIED SAMPLE, not a nationwide House seat tally. No claim that Republicans have won zero.",
        "source": "https://apnews.com/article/59c12371b87191ffdbf9102ab23290c2"
      },
      "governors": {
        "label": "Governors",
        "total": 36,
        "contested": 36,
        "needed": null,
        "dem": null,
        "rep": null,
        "unverified": 36,
        "note": "No gubernatorial winner individually verified for the 8:26 p.m. cutoff. This is NOT a claim that no governor race was called nationwide; 36 states are electing governors.",
        "source": "https://www.nbcboston.com/elections/ma-nh-maine-midterm-results-2026/4034229/"
      }
    },
    "newCalls": [
      {
        "office": "House, Florida 20",
        "place": "Florida's 20th District",
        "name": "Debbie Wasserman Schultz",
        "party": "D",
        "desk": "Associated Press",
        "calledAt": "7:09 p.m. ET (new to our desk since 8:12 p.m.)",
        "source": "https://apnews.com/article/59c12371b87191ffdbf9102ab23290c2"
      }
    ],
    "watch": [
      {
        "place": "Maine",
        "office": "Senate / House 2 / Governor",
        "status": "Not called by this desk",
        "why": "Collins versus Jackson matters for the Senate. The open second House district and governor's race also deserve separate monitoring.",
        "source": "https://www.nbcboston.com/elections/ma-nh-maine-midterm-results-2026/4034229/"
      },
      {
        "place": "New Hampshire",
        "office": "Senate / Governor",
        "status": "Not called by this desk",
        "why": "Pappas versus Sununu, plus Ayotte versus Warmington, tests the state's distinctive split-ticket politics.",
        "source": "https://www.nbcboston.com/elections/ma-nh-maine-midterm-results-2026/4034229/"
      },
      {
        "place": "Massachusetts",
        "office": "Governor / Senate / questions",
        "status": "Not called by this desk",
        "why": "Healey versus Minogue, Markey versus Deaton and nine statewide questions. NBC's result embed lacked verified totals in this check.",
        "source": "https://www.nbcboston.com/elections/ma-nh-maine-midterm-results-2026/4034229/"
      },
      {
        "place": "North Carolina",
        "office": "Senate",
        "status": "Results delayed",
        "why": "Voting was extended at selected precincts; distinguish a delayed first statewide posting from a winner call.",
        "source": "https://abcnews.com/Politics/live-updates/midterm-elections-live-updates/?entryId=137823856&id=137782085"
      },
      {
        "place": "Pennsylvania",
        "office": "U.S. House",
        "status": "Watching districts",
        "why": "Competitive seats contribute to the 218-seat majority; no national House winner total is inferred from a single Florida call.",
        "source": "https://apnews.com/article/f126e12e05b579a327b98481c0ae2226"
      },
      {
        "place": "Ohio / Michigan",
        "office": "Senate",
        "status": "Not called by this desk",
        "why": "Brown versus Husted and El-Sayed versus Rogers are major contests in the still unresolved path to Senate control.",
        "source": "https://apnews.com/article/ef6199e25927a9ac9f4c18eae0e497cd"
      }
    ],
    "articles": [
      {
        "tag": "Newly verified House call",
        "headline": "Florida Drew a New Map. Debbie Brought Her Own Address Labels.",
        "body": [
          "The Associated Press called Democratic Rep. Debbie Wasserman Schultz the winner in Florida's 20th Congressional District at 7:09 p.m. ET. She defeated Republican Brent Andersen after moving districts in response to the state's redraw. This is a Democratic hold and a new entry in our verified ledger since 8:12, not a seat flipped from Republican control.",
          "Redistricting is supposed to rearrange political geography. Florida produced something closer to moving day: new boundaries, new neighbors and an incumbent who had to figure out which district she now represents. Wasserman Schultz won this one. That alone does not tell us whether a statewide redistricting strategy worked, much less whether Democrats have reached 218 nationally.",
          "The desk would love to produce a giant red-or-blue House counter right now. Unfortunately, one confirmed seat is one confirmed seat. George, who has repeatedly mistaken confidence for arithmetic in unrelated fantasy-football proceedings, is no longer allowed near the calculator."
        ],
        "sources": [
          {
            "label": "AP Florida District 20 call, 7:09 p.m.",
            "url": "https://apnews.com/article/59c12371b87191ffdbf9102ab23290c2"
          },
          {
            "label": "AP national congressional context",
            "url": "https://apnews.com/article/f126e12e05b579a327b98481c0ae2226"
          }
        ]
      },
      {
        "tag": "Senate balance",
        "headline": "Georgia and Virginia Hold. The Senate Refuses to Be a Two-Episode Miniseries.",
        "body": [
          "Georgia Sen. Jon Ossoff defeated Republican Mike Collins, according to AP and Reuters; Virginia Sen. Mark Warner won reelection in the earlier AP call. Both results were already present in our 8:12 edition. Neither is a Democratic pickup, and neither is a newly called Senate race in this update.",
          "The Senate arithmetic is less cinematic than cable-news graphics. There are 35 elections, 65 seats that are not up this year, and a 100-seat chamber in which the vice president breaks a 50-50 tie. Our carefully limited ledger reads 36 Democratic-caucusing seats and 31 Republicans, with 33 election contests still unverified here. It is not the final national scoreboard.",
          "Henny has been given the job of reminding the newsroom that a candidate appearing on television is not an official projection. After the fourth reminder, he asked whether the Senate could simply call everyone and sort it out tomorrow. Henny needs to get it together."
        ],
        "sources": [
          {
            "label": "AP Georgia and Virginia context",
            "url": "https://apnews.com/article/f126e12e05b579a327b98481c0ae2226"
          },
          {
            "label": "Reuters Georgia projection",
            "url": "https://www.reuters.com/world/us/trump-faces-midterm-verdict-with-control-congress-stake-2026-11-03/"
          }
        ]
      },
      {
        "tag": "Economy and voter concerns",
        "headline": "Americans Agree on One Thing: Everything Costs Too Much.",
        "body": [
          "The AP Voter Poll finds around three-quarters of voters unhappy with the country's direction and roughly eight in ten saying inflation has caused at least moderate hardship. The economy and government accountability loom large, even while voters differ sharply on which party would improve either.",
          "This is a more useful finding than pretending every ballot is a referendum on the cable anchor with the loudest graphics. Groceries, health care and energy costs are concrete household pressures. Voters can share frustration without sharing an answer about what Washington should do next.",
          "Our editorial office has tried to solve inflation by comparing grocery receipts from 2019. The only result was an increasingly hostile relationship with a box of cereal. George claims his fantasy roster demonstrates sound economic management. This is the same George we are currently not speaking to."
        ],
        "sources": [
          {
            "label": "AP Voter Poll and election context",
            "url": "https://apnews.com/article/f126e12e05b579a327b98481c0ae2226"
          },
          {
            "label": "AP live voter-poll reporting",
            "url": "https://apnews.com/article/ef6199e25927a9ac9f4c18eae0e497cd"
          }
        ]
      },
      {
        "tag": "Massachusetts and New England",
        "headline": "Massachusetts Has Nine Questions and One Very Familiar Habit of Assuming Everyone Agrees.",
        "body": [
          "Massachusetts voters are deciding the Healey-Minogue governor's race, the Markey-Deaton Senate contest and nine statewide ballot questions. NBC Boston's regional results page is tracking those contests, but its accessible totals were not sufficient for us to log a decision-desk call at this cutoff. We are leaving those fields unallocated.",
          "Across the borders, Maine's Collins-Jackson Senate contest and New Hampshire's Pappas-Sununu race can shape the Senate much more directly than a Massachusetts victory party. New Hampshire also has a closely watched gubernatorial rematch. A common New England accent does not imply a common political arrangement.",
          "Massachusetts has perfected the art of feeling geographically small and politically representative. We drive north to buy things without sales tax and return genuinely surprised that the people selling them have their own opinions. This evening's election coverage is our annual corrective."
        ],
        "sources": [
          {
            "label": "NBC Boston regional election results",
            "url": "https://www.nbcboston.com/elections/ma-nh-maine-midterm-results-2026/4034229/"
          },
          {
            "label": "AP Senate battleground overview",
            "url": "https://apnews.com/article/f126e12e05b579a327b98481c0ae2226"
          }
        ]
      },
      {
        "tag": "Voting and counting",
        "headline": "A Late Result Is Not a Crime Scene. Someone Tell the Television Desk.",
        "body": [
          "North Carolina officials extended voting in several precincts after disruptions, postponing the initial statewide release. AP also reported that Westchester County, New York, used emergency ballot bags when machines struggled to accept paper ballots; officials said the ballots would be secured for later counting. These are distinct local events, not proof of a nationwide conspiracy.",
          "The distinction matters: an extended poll closing can protect voters' opportunity to cast a ballot, and a provisional or secured ballot process is not a declaration that votes have vanished. The right question is what procedure officials used, how they preserved the ballots and when reporting can resume.",
          "We have all watched an office printer refuse to print a one-page agenda ten minutes before a meeting. Imagine that machine being interviewed by six national correspondents and asked what it means for the republic. Henny would probably appoint it undersecretary of toner."
        ],
        "sources": [
          {
            "label": "ABC North Carolina voting extensions",
            "url": "https://abcnews.com/Politics/live-updates/midterm-elections-live-updates/?entryId=137823856&id=137782085"
          },
          {
            "label": "AP election-day procedures",
            "url": "https://apnews.com/article/f126e12e05b579a327b98481c0ae2226"
          }
        ]
      },
      {
        "tag": "Election oversight and the stakes",
        "headline": "The Courts Have Entered the Group Chat. They Brought Actual Documents.",
        "body": [
          "Reuters reports that judges have blocked parts of the Trump administration's efforts to press states to act on lists of suspected noncitizen voters. The legal disputes turn on federal and state authority, the accuracy of the lists and the risk of rejecting lawful ballots. The administration says its measures protect elections; courts have raised serious concerns about specific methods.",
          "Congressional control determines who runs committees, what receives a hearing and how aggressively the executive branch can be investigated. That is why House districts matter even when there is no satisfying national winner by bedtime. Elections are not merely a personality contest with constitutional set dressing.",
          "Meanwhile, George has requested a hearing into the Gazette's allegedly unfair treatment of George. The editorial board has declined because George is now an enemy of the paper, and unlike Congress, our committee assignments require no lengthy negotiation. We will reconsider if he produces evidence, an apology and a decent waiver-wire pickup."
        ],
        "sources": [
          {
            "label": "Reuters court rulings on voter lists",
            "url": "https://www.reuters.com/legal/government/with-us-midterms-underway-courts-rebuff-trumps-pressure-state-election-officials-2026-11-03/"
          },
          {
            "label": "AP congressional stakes",
            "url": "https://apnews.com/article/f126e12e05b579a327b98481c0ae2226"
          }
        ]
      }
    ]
  },
  {
    "slug": "2026-11-03-2012",
    "date": "2026-11-03",
    "displayDate": "Tuesday, November 3, 2026",
    "displayTime": "8:12 p.m. Eastern",
    "iso": "2026-11-03T20:12:00-05:00",
    "kind": "8:12 PM Election-Night Bulletin",
    "headline": "GEORGIA HAS ANSWERED. THE REST OF THE MAP IS STILL TYPING.",
    "deck": "Reuters reports Jon Ossoff's Senate win, Virginia keeps its Warner call, and Massachusetts has nine ballot questions demanding our attention.",
    "lede": "It's barely past eight, and at least two Senate incumbents have a result to take home. Virginia's Mark Warner was called at seven, and Reuters reports a projected Georgia win for Jon Ossoff by the eight o'clock snapshot. Neither result settles Senate control. Anyone calling the whole election now is basically announcing the winner of Survivor during the opening credits.",
    "method": "This is a frozen, selective research snapshot as of 8:12 p.m. ET, not a comprehensive national AP feed. Georgia is attributed to Reuters' report of a media projection, not an official canvass. Senate verified-seat counts include 65 holdovers and only these two verified election calls. Unverified does not mean nobody else has won.",
    "seatCounts": {
      "senate": {
        "label": "U.S. Senate",
        "total": 100,
        "contested": 35,
        "needed": 51,
        "dem": 36,
        "rep": 31,
        "unverified": 33,
        "note": "34 Democratic-caucusing holdovers + Warner (AP) + Ossoff (media projection reported by Reuters); 31 Republican holdovers. The other 33 Senate contests have not been reconciled in this Gazette snapshot.",
        "source": "https://www.reuters.com/world/us/trump-faces-midterm-verdict-with-control-congress-stake-2026-11-03/"
      },
      "house": {
        "label": "U.S. House",
        "total": 435,
        "contested": 435,
        "needed": 218,
        "dem": null,
        "rep": null,
        "unverified": 435,
        "note": "National House calls have not been reconciled for this selective bulletin. This does not mean no House race has been called.",
        "source": "https://apnews.com/article/9dae62cdd7d776a20a26eab6fbd9b12c"
      },
      "governors": {
        "label": "Governors",
        "total": 36,
        "contested": 36,
        "needed": null,
        "dem": null,
        "rep": null,
        "unverified": 36,
        "note": "National governor calls have not been reconciled into this snapshot; Massachusetts governor reporting is being watched separately.",
        "source": "https://www.nbcboston.com/elections/2026-midterm-voting-live-updates-mass-nh-maine/4038516/"
      }
    },
    "newCalls": [
      {
        "office": "Senate",
        "place": "Georgia",
        "name": "Jon Ossoff",
        "party": "D",
        "desk": "Media projection reported by Reuters",
        "calledAt": "by 8:00 p.m. ET (exact call time unverified)",
        "source": "https://www.reuters.com/world/us/trump-faces-midterm-verdict-with-control-congress-stake-2026-11-03/"
      }
    ],
    "watch": [
      {
        "place": "Virginia",
        "office": "Senate",
        "status": "AP called Warner",
        "why": "Mark Warner won reelection; called at 7 p.m. ET. Already included in the 8:10 Gazette baseline.",
        "source": "https://apnews.com/article/07cd2d398f0086aee5e017a5db92eb2c"
      },
      {
        "place": "Maine",
        "office": "Senate",
        "status": "Unverified in this snapshot",
        "why": "Susan Collins versus Troy Jackson; ranked-choice counting could matter.",
        "source": "https://www.nbcboston.com/elections/2026-midterm-voting-live-updates-mass-nh-maine/4038516/"
      },
      {
        "place": "New Hampshire",
        "office": "Senate",
        "status": "Unverified in this snapshot",
        "why": "Chris Pappas and John Sununu face off in an open-seat contest.",
        "source": "https://www.nbcboston.com/elections/2026-midterm-voting-live-updates-mass-nh-maine/4038516/"
      },
      {
        "place": "North Carolina",
        "office": "Senate",
        "status": "Awaiting full returns",
        "why": "Voting was extended in several precincts, delaying statewide reporting.",
        "source": "https://abcnews.com/Politics/live-updates/midterm-elections-live-updates/?entryId=137823856&id=137782085"
      },
      {
        "place": "Massachusetts",
        "office": "Governor / ballot questions",
        "status": "Results developing",
        "why": "Maura Healey versus Mike Minogue, plus nine statewide ballot questions.",
        "source": "https://www.nbcboston.com/elections/2026-midterm-voting-live-updates-mass-nh-maine/4038516/"
      },
      {
        "place": "Pennsylvania",
        "office": "House",
        "status": "Watching",
        "why": "Key congressional districts could help decide the 218-seat House majority.",
        "source": "https://apnews.com/article/9dae62cdd7d776a20a26eab6fbd9b12c"
      }
    ],
    "articles": [
      {
        "tag": "New call",
        "headline": "Georgia Has Finally Replied to the Group Chat.",
        "body": [
          "Reuters reports that Democratic Sen. Jon Ossoff won reelection over Republican Rep. Mike Collins. Its eight o'clock election-night account describes a media projection, so that is exactly how we label this result. Georgia stays with the Democrats in this race, rather than becoming a pickup.",
          "It feels like getting the one text you've been waiting for while the other 34 people in the thread continue debating where to eat. This is a meaningful hold, not an answer to who will control the Senate."
        ],
        "sources": [
          {
            "label": "Reuters election-night reporting",
            "url": "https://www.reuters.com/world/us/trump-faces-midterm-verdict-with-control-congress-stake-2026-11-03/"
          }
        ]
      },
      {
        "tag": "Previously called",
        "headline": "Virginia Was Ready for Bed at Seven.",
        "body": [
          "The Associated Press called Virginia's Senate race for Democratic incumbent Mark Warner over Bert Mizusawa at 7 p.m. Eastern. Warner won a fourth term. This call appeared in our earlier opening edition and is not being relabeled as new.",
          "Two verified Democratic holds on our desk should not be confused with a national majority. The board remembers which wins are old, even if everyone's television is now one giant blinking map."
        ],
        "sources": [
          {
            "label": "AP Virginia call",
            "url": "https://apnews.com/article/07cd2d398f0086aee5e017a5db92eb2c"
          }
        ]
      },
      {
        "tag": "House watch",
        "headline": "Four Hundred Thirty-Five Group-Project Members. One Deadline Nobody Agreed To.",
        "body": [
          "All 435 House seats are being chosen. A majority requires 218, and Republicans entered the election holding the chamber by a narrow margin. AP warns that control may take days to establish, particularly where close results and mail ballots take time.",
          "Someone on cable will point decisively at a touchscreen. This is not the same thing as 218 independently verified victories. We will keep the House bar unallocated until we have reconciled actual calls."
        ],
        "sources": [
          {
            "label": "AP on control and counting",
            "url": "https://apnews.com/article/9dae62cdd7d776a20a26eab6fbd9b12c"
          }
        ]
      },
      {
        "tag": "Massachusetts",
        "headline": "Nine Ballot Questions. This State Really Assigned Homework.",
        "body": [
          "Massachusetts polls closed at eight. Voters considered governor, U.S. Senate, legislative contests and nine statewide ballot questions. The immediate local stakes cannot be measured just by a red-blue national map.",
          "Our state has created the civic equivalent of taking a multiple-choice final after a full workday. The questions deserve a closer reading than the enthusiastic person in the group chat who says they already understood all nine."
        ],
        "sources": [
          {
            "label": "NBC Boston regional coverage",
            "url": "https://www.nbcboston.com/elections/2026-midterm-voting-live-updates-mass-nh-maine/4038516/"
          },
          {
            "label": "WBUR Massachusetts results",
            "url": "https://www.wbur.org/news/2026/11/03/massachusetts-2026-election-results-state-house-senate"
          }
        ]
      },
      {
        "tag": "New England",
        "headline": "New Hampshire and Maine Are Not Massachusetts in Disguise.",
        "body": [
          "Maine's Susan Collins and Troy Jackson, and New Hampshire's Chris Pappas and John Sununu, are among the Senate races worth watching. At this cutoff, we are not assigning a winner to either.",
          "New England shares a regional identity, not one uniform political setting. If your entire mental map is a Cape Cod tote bag, these contests are a reminder that geography has settings."
        ],
        "sources": [
          {
            "label": "NBC Boston race guide",
            "url": "https://www.nbcboston.com/elections/2026-midterm-voting-live-updates-mass-nh-maine/4038516/"
          },
          {
            "label": "AP on lengthy counts",
            "url": "https://apnews.com/article/9dae62cdd7d776a20a26eab6fbd9b12c"
          }
        ]
      },
      {
        "tag": "Election administration",
        "headline": "North Carolina Is Counting, Not Ghosting You.",
        "body": [
          "North Carolina extended voting at five precincts in four counties after disruptions, according to its elections board as reported by ABC News. The state said initial statewide results would not be posted until around 8:15 p.m. Eastern.",
          "A late count is not automatically suspicious. Sometimes the responsible move in a democracy is to give people their legally required chance to vote, even if it ruins an anchor's carefully color-coded rundown."
        ],
        "sources": [
          {
            "label": "ABC News reporting election board statement",
            "url": "https://abcnews.com/Politics/live-updates/midterm-elections-live-updates/?entryId=137823856&id=137782085"
          }
        ]
      },
      {
        "tag": "What next",
        "headline": "The Nation's Bedtime Is Still Several Time Zones Away.",
        "body": [
          "A new set of states, including Arizona, Wisconsin and New York, closes polls at nine Eastern. Much of the West Coast will not finish until eleven. It is too early to treat an East Coast sample as the national result.",
          "The east-to-west schedule is a test of patience for a generation raised on instantly refreshed AIM away messages. We will take fresh calls as the responsible desks make them, not as our attention spans request them."
        ],
        "sources": [
          {
            "label": "Poll-closing schedule",
            "url": "https://www.theguardian.com/us-news/2026/nov/03/midterm-elections-polls-close-what-time"
          }
        ]
      }
    ]
  },
  {
    "slug": "2026-11-03-2010",
    "date": "2026-11-03",
    "displayDate": "Tuesday, November 3, 2026",
    "displayTime": "8:10 p.m. Eastern",
    "iso": "2026-11-03T20:10:00-05:00",
    "kind": "Opening Election-Night Edition",
    "headline": "OUR MASSACHUSETTS BUBBLE HAS DISCOVERED 49 OTHER STATES.",
    "deck": "Polls are closing, the first verified Senate call is in, and the country is currently refusing to provide the group chat with a tidy ending.",
    "lede": "A 7 p.m. Virginia call is the first firm bookmark in a night that could stretch well beyond Tuesday. The Massachusetts instinct is to refresh every 14 seconds and ask why everyone else hasn't finished counting. Unfortunately, ballots are not a DoorDash order.",
    "method": "This is a curated Gazette snapshot, not a licensed nationwide live results feed. Only calls independently verified against the cited decision desk appear as confirmed here. Unverified races remain unallocated, not necessarily uncalled nationwide. Counts can change after this edition's cutoff.",
    "seatCounts": {
      "senate": {
        "label": "U.S. Senate",
        "total": 100,
        "contested": 35,
        "needed": 51,
        "dem": 35,
        "rep": 31,
        "unverified": 34,
        "note": "35 Democratic-caucus seats in this verified ledger: 34 not up, plus Warner's AP-called Virginia win. 31 Republican seats not up; 34 contests not verified in this snapshot.",
        "source": "https://apnews.com/article/07cd2d398f0086aee5e017a5db92eb2c"
      },
      "house": {
        "label": "U.S. House",
        "total": 435,
        "contested": 435,
        "needed": 218,
        "dem": null,
        "rep": null,
        "unverified": 435,
        "note": "No comprehensive set of House calls was verified for this opening snapshot. This does NOT mean zero House races have been called elsewhere.",
        "source": "https://apnews.com/article/9dae62cdd7d776a20a26eab6fbd9b12c"
      },
      "governors": {
        "label": "Governors",
        "total": 36,
        "contested": 36,
        "needed": null,
        "dem": null,
        "rep": null,
        "unverified": 36,
        "note": "36 governorships on the ballot. A national governor call ledger has not yet been reconciled for this snapshot.",
        "source": "https://apnews.com/article/0e2078f16af285b22675445d78360e6d"
      }
    },
    "newCalls": [
      {
        "office": "Senate",
        "place": "Virginia",
        "name": "Mark Warner",
        "party": "D",
        "desk": "Associated Press",
        "calledAt": "7:00 p.m. ET",
        "source": "https://apnews.com/article/07cd2d398f0086aee5e017a5db92eb2c"
      }
    ],
    "watch": [
      {
        "place": "Georgia",
        "office": "Senate",
        "status": "Watch",
        "why": "Early battleground and bellwether for the path to Senate control",
        "source": "https://apnews.com/article/0e2078f16af285b22675445d78360e6d"
      },
      {
        "place": "North Carolina",
        "office": "Senate",
        "status": "Watch",
        "why": "Competitive race with polls closing at 7:30 p.m. ET",
        "source": "https://apnews.com/article/0e2078f16af285b22675445d78360e6d"
      },
      {
        "place": "Maine",
        "office": "Senate",
        "status": "Watch",
        "why": "A key New England Senate race; ranked-choice rules could matter",
        "source": "https://apnews.com/article/9dae62cdd7d776a20a26eab6fbd9b12c"
      },
      {
        "place": "New Hampshire",
        "office": "Senate",
        "status": "Watch",
        "why": "Chris Pappas and John E. Sununu competing for an open Senate seat",
        "source": "https://apnews.com/article/2b2235cf4d8ca6e0eebd2817bf8767f6"
      },
      {
        "place": "Texas",
        "office": "Senate",
        "status": "Watch",
        "why": "An expensive, nationally watched Senate battleground",
        "source": "https://apnews.com/article/0e2078f16af285b22675445d78360e6d"
      },
      {
        "place": "Michigan",
        "office": "Senate / Governor",
        "status": "Watch",
        "why": "Competitive upper Midwest results may take more time to count",
        "source": "https://apnews.com/article/0e2078f16af285b22675445d78360e6d"
      }
    ],
    "articles": [
      {
        "tag": "The First Call",
        "headline": "Virginia Has Submitted Its Assignment. The Rest of the Class Is Still Typing.",
        "body": [
          "The Associated Press called Virginia's Senate race for Democratic incumbent Mark Warner at 7 p.m. Eastern. Warner defeated Republican Bert Mizusawa and will serve a fourth term. That's a result, not a forecast or a candidate's confidence about their yard signs.",
          "One race has crossed our verification desk. Nobody gets to declare the future of the Senate based on one statewide call, but Massachusetts readers can appreciate a state that turned in its homework at a reasonable hour."
        ],
        "sources": [
          {
            "label": "Associated Press race call",
            "url": "https://apnews.com/article/07cd2d398f0086aee5e017a5db92eb2c"
          }
        ]
      },
      {
        "tag": "Balance of Power",
        "headline": "The House Has 435 Seats and Absolutely No Respect for Your Bedtime.",
        "body": [
          "Every House seat is on the ballot, and a majority requires 218. Democrats are trying to take the chamber from Republicans; the Senate is also in play. But the chamber-wide verdict depends on a patchwork of districts, some of which may remain too close to call well past tonight.",
          "The group chat would prefer a definitive answer before the first commercial break. The U.S. Constitution did not include a provision for our preferred viewing schedule. We are looking into it."
        ],
        "sources": [
          {
            "label": "AP on congressional control",
            "url": "https://apnews.com/article/9dae62cdd7d776a20a26eab6fbd9b12c"
          }
        ]
      },
      {
        "tag": "Battleground Watch",
        "headline": "Georgia, North Carolina, Ohio: The 7 P.M. Hour Has Entered the Chat.",
        "body": [
          "The Southeast and Midwest deliver some of the first consequential clues. Georgia, North Carolina and Ohio feature closely watched Senate races; the broader map also includes Maine, Texas, Iowa and Michigan. As the reporting moves west, the question is not merely who is ahead but how much of the remaining vote has yet to appear.",
          "Do not treat a 2% lead with a fraction of precincts reporting as a victory parade. That is just a PowerPoint with ambition."
        ],
        "sources": [
          {
            "label": "AP election-night closing guide",
            "url": "https://apnews.com/article/0e2078f16af285b22675445d78360e6d"
          }
        ]
      },
      {
        "tag": "New England Desk",
        "headline": "New Hampshire Has Once Again Declined to Be Massachusetts.",
        "body": [
          "New Hampshire's open Senate seat features Democrat Chris Pappas and Republican John E. Sununu. Across the region, Maine's Senate contest also deserves a prominent tab. New England is close enough for a road trip and politically complicated enough to justify an entire group chat.",
          "Massachusetts residents sometimes talk about neighboring states like we're visiting a foreign country with better liquor laws. Tonight the borders are very much real, and those Senate seats matter."
        ],
        "sources": [
          {
            "label": "AP New Hampshire Senate profile",
            "url": "https://apnews.com/article/2b2235cf4d8ca6e0eebd2817bf8767f6"
          },
          {
            "label": "AP election-night guide",
            "url": "https://apnews.com/article/0e2078f16af285b22675445d78360e6d"
          }
        ]
      },
      {
        "tag": "From Massachusetts",
        "headline": "Healey, Markey, and Nine Ballot Questions: A Very Massachusetts To-Do List.",
        "body": [
          "Massachusetts voters are choosing a governor, a U.S. senator, congressional representatives and positions on nine statewide ballot measures. Democratic Gov. Maura Healey and Sen. Ed Markey are seeking reelection. Polls close at 8 p.m. Eastern, but town-by-town reporting means a result is not magically certified at 8:01.",
          "The ballot questions are the state's way of turning election night into a graduate seminar. Read the actual measure text before celebrating or panicking about a number on the screen."
        ],
        "sources": [
          {
            "label": "AP Massachusetts decision notes",
            "url": "https://apnews.com/article/5f015fc6a3ce9aa611c2cdbb450514e7"
          }
        ]
      },
      {
        "tag": "Rights and Ballot Measures",
        "headline": "Some of the Biggest Choices Aren't Attached to a Candidate's Face.",
        "body": [
          "Voters in several states are deciding measures touching abortion access, redistricting, election administration and voting rules, including major abortion-related questions in Missouri, Idaho, Nevada and Virginia. Those results can affect people's lives directly, even when they never earn the top slot in a national TV graphic.",
          "We can be snarky about cable-news touchscreens. We should be deadly serious about what the actual policy language does, who it covers and when it would take effect."
        ],
        "sources": [
          {
            "label": "AP ballot measure reporting",
            "url": "https://apnews.com/article/fe17112e9538f5e4ed5907f6d1f5b470"
          }
        ]
      },
      {
        "tag": "The Process Desk",
        "headline": "Voting Machines Are Not Supposed to Have a Plot Twist.",
        "body": [
          "Election Day brought some machine issues and weather-related disruptions. Officials in affected locations reported workarounds, secured ballots or extended voting in specific places, while the AP described the broader day as relatively free of major disruptions. A local technical problem is not proof of a nationwide scheme.",
          "Anyone with a printer knows that technology waits for the worst possible moment to express itself. The responsible response is to ask how the ballots are being handled, not to nominate the printer as secretary of state."
        ],
        "sources": [
          {
            "label": "AP on election-day disruptions",
            "url": "https://apnews.com/article/ba3037eed7bd816cc084bb1c4a2e6ccf"
          }
        ]
      }
    ]
  }
];
export const latestEdition = editions[0];
export const getEditionBySlug = (slug) => editions.find((edition) => edition.slug === slug);
