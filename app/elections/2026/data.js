// Curated, timestamped election snapshots. Newest edition first.
// The "verified" values are the Gazette's checked ledger, not a comprehensive AP feed.
// Only append facts backed by named sources; never turn unknown into zero.
export const editions = [
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
