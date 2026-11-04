// Gotham Midterm Desk ONLY. Prepend new published editions; do not mutate prior snapshots.
export const editions = [
  {
    "id": "nov-03-2026-2000-et",
    "date": "November 3, 2026",
    "time": "8:00 PM ET",
    "title": "Virginia's Senate race is called. The rest of us are refreshing.",
    "dek": "A first verified call, an absurdly large national spreadsheet, and a Massachusetts group chat discovering electoral geography.",
    "notice": "Opening editorial snapshot. These are calls independently verified for this bulletin, NOT a complete national tally or automatically updating election feed. For live national totals, consult the linked AP-based source. The next edition will recheck all results.",
    "calls": [
      {
        "id": "US-SEN-VA-2026",
        "who": "Mark Warner",
        "party": "D",
        "place": "Virginia",
        "office": "Senate",
        "by": "Associated Press",
        "at": "7:00 PM ET",
        "source": "https://apnews.com/article/virginia-senate-07cd2d398f0086aee5e017a5db92eb2c"
      }
    ],
    "changes": [
      "Opening baseline: AP called Mark Warner's Virginia Senate race at 7:00 PM ET.",
      "No earlier Midterm Desk edition exists for comparison."
    ],
    "board": [
      {
        "office": "Senate",
        "sub": "35 elections • 100-seat chamber",
        "control": "51 Democrats or 50 Republicans, including VP tie-break",
        "summary": "1 desk-verified call",
        "watch": [
          {
            "place": "Virginia",
            "detail": "Mark Warner (D) elected",
            "status": "AP CALLED",
            "tone": "blue",
            "url": "https://apnews.com/article/virginia-senate-07cd2d398f0086aee5e017a5db92eb2c"
          },
          {
            "place": "Maine",
            "detail": "Collins vs. Jackson",
            "status": "WATCH",
            "url": "https://www.nbcboston.com/elections/ma-nh-maine-midterm-results-2026/4034229/"
          },
          {
            "place": "New Hampshire",
            "detail": "Pappas vs. Sununu",
            "status": "WATCH",
            "url": "https://apnews.com/article/new-hampshire-senate-sununu-pappas-2b2235cf4d8ca6e0eebd2817bf8767f6"
          },
          {
            "place": "Alaska",
            "detail": "Sullivan vs. Peltola",
            "status": "WATCH",
            "url": "https://apnews.com/article/alaska-senate-sullivan-peltola-trump-midterm-election-52a67249937e63d46069dd7478a5ff59"
          }
        ]
      },
      {
        "office": "House",
        "sub": "435 congressional districts",
        "control": "218 seats to win the chamber",
        "summary": "National calls not compiled",
        "watch": [
          {
            "place": "Pennsylvania",
            "detail": "Competitive House districts",
            "status": "WATCH",
            "url": "https://whyy.org/articles/election-2026-results-midterms-house-senate-congress/"
          },
          {
            "place": "California",
            "detail": "Watch counting of mail ballots",
            "status": "WATCH",
            "url": "https://apnews.com/article/when-ap-calls-congress-control-9dae62cdd7d776a20a26eab6fbd9b12c"
          },
          {
            "place": "Nationwide",
            "detail": "Full AP-based live tracker",
            "status": "SOURCE",
            "url": "https://www.theguardian.com/us-news/ng-interactive/2026/nov/03/midterm-elections-full-results-senate-house-governor-races"
          }
        ]
      },
      {
        "office": "Governors",
        "sub": "36 state elections",
        "control": "State-by-state executive races",
        "summary": "National calls not compiled",
        "watch": [
          {
            "place": "Massachusetts",
            "detail": "Healey vs. Minogue",
            "status": "WATCH",
            "url": "https://www.wcvb.com/article/massachusetts-election-results-2026-nov-3-live-updates/74194757"
          },
          {
            "place": "Nationwide",
            "detail": "See all state races",
            "status": "SOURCE",
            "url": "https://www.theguardian.com/us-news/ng-interactive/2026/nov/03/midterm-elections-full-results-senate-house-governor-races"
          },
          {
            "place": "New England",
            "detail": "Regional election returns",
            "status": "WATCH",
            "url": "https://www.nbcboston.com/elections/ma-nh-maine-midterm-results-2026/4034229/"
          }
        ]
      }
    ],
    "stories": [
      {
        "tag": "FIRST CALL",
        "headline": "Virginia Has Called Its Senate Race. We Are Not Done Here.",
        "p": [
          "At 7:00 p.m. Eastern, the Associated Press called Virginia's U.S. Senate election for Democrat Mark Warner over Republican Bert Mizusawa. Warner earns a fourth term. This is an actual verified result, which is why it gets an actual blue label on our board.",
          "That alone does not settle control of the Senate. Virginia has answered the group chat promptly; everyone watching the close races is still staring at the typing bubbles."
        ],
        "src": [
          [
            "AP race call",
            "https://apnews.com/article/virginia-senate-07cd2d398f0086aee5e017a5db92eb2c"
          ]
        ]
      },
      {
        "tag": "CONTROL ROOM",
        "headline": "The House Needs 218. The Group Project Has 435 Members.",
        "p": [
          "All 435 U.S. House seats are being decided, and a party needs 218 to control the chamber. Republicans entered Election Day with a narrow advantage. A candidate who is ahead in partial returns is not the same as a winner called by a decision desk.",
          "This is the group project in which somebody announces they've finished before the last 40 slides are even uploaded. AP notes that in 2022 it took eight days to declare House control. The deadline, apparently, was more of a suggestion."
        ],
        "src": [
          [
            "AP on congressional control",
            "https://apnews.com/article/when-ap-calls-congress-control-9dae62cdd7d776a20a26eab6fbd9b12c"
          ]
        ]
      },
      {
        "tag": "NEW ENGLAND DESK",
        "headline": "New Hampshire Reminds Massachusetts That It Votes Differently.",
        "p": [
          "Democrat Chris Pappas and Republican John E. Sununu are competing for New Hampshire's open Senate seat. The state often backs Democrats in federal contests while electing Republicans to state government. It's competitive, and that means we cannot simply color New England like one matching LL Bean catalog.",
          "Both candidates have Washington experience and both sell themselves as agents of change. Like two former Office managers running for the role of disruptive new hire, except the outcome could affect the U.S. Senate."
        ],
        "src": [
          [
            "AP: New Hampshire race",
            "https://apnews.com/article/new-hampshire-senate-sununu-pappas-2b2235cf4d8ca6e0eebd2817bf8767f6"
          ]
        ]
      },
      {
        "tag": "THE SLOW COUNT",
        "headline": "Maine and Alaska Did Read the Instructions. They Are Longer.",
        "p": [
          "AP warns that Maine and Alaska's ranked-choice voting systems could mean more time before closely contested Senate results are resolved. These are genuine process questions, not an excuse to declare the candidate you prefer the winner at 8:04.",
          "An early lead is the election equivalent of seeing an AIM typing bubble and assuming you know the whole message. We will wait for a real attributed call before changing these states on the board."
        ],
        "src": [
          [
            "AP: how calls work",
            "https://apnews.com/article/when-ap-calls-congress-control-9dae62cdd7d776a20a26eab6fbd9b12c"
          ],
          [
            "AP: Alaska contest",
            "https://apnews.com/article/alaska-senate-sullivan-peltola-trump-midterm-election-52a67249937e63d46069dd7478a5ff59"
          ]
        ]
      },
      {
        "tag": "MASSACHUSETTS",
        "headline": "Nine Ballot Questions. Apparently One Democracy Was Not Enough Homework.",
        "p": [
          "Massachusetts voters have nine statewide ballot questions, plus races including Gov. Maura Healey versus Republican Mike Minogue and Sen. Ed Markey versus Republican John Deaton. Polls close at 8 p.m. Eastern. Initial returns are not certified results.",
          "The ballot starts with the promise of civic participation and finishes with the emotional weight of a take-home exam. Even in a state with a strong Democratic tradition, none of those nine questions should have its result assumed in advance."
        ],
        "src": [
          [
            "WCVB election tracker",
            "https://www.wcvb.com/article/massachusetts-election-results-2026-nov-3-live-updates/74194757"
          ],
          [
            "Massachusetts elections office",
            "https://www.sec.state.ma.us/divisions/elections/voting-information/announcing-certifying.htm"
          ]
        ]
      },
      {
        "tag": "STATE POWER",
        "headline": "Thirty-Six Governors' Races Would Also Like Some Screen Time.",
        "p": [
          "Thirty-six states are choosing governors. These offices matter for state budgets, legislation, appointments and administration, even when congressional control takes up every square inch of television graphics.",
          "We appreciate the Senate's dramatic entrance, but governors are not background extras. They still have the keys to a lot of the house after election night ends. Their results get their own board here."
        ],
        "src": [
          [
            "National governor tracker",
            "https://www.theguardian.com/us-news/ng-interactive/2026/nov/03/midterm-elections-full-results-senate-house-governor-races"
          ]
        ]
      },
      {
        "tag": "VOTER MOOD",
        "headline": "The Economy Is the Plot. Cable News Brought a Very Large Touchscreen.",
        "p": [
          "An AP Voter Poll finds voters broadly dissatisfied with national conditions, with the economy and democracy high on their list of concerns. Roughly seven in ten respondents said they want Congress to provide more checks and balances on the presidency. These are survey findings, not vote totals.",
          "Voters have been discussing prices and government power while the studios have worked very hard to animate county borders. We are grateful for the graphics. We would also appreciate affordable groceries."
        ],
        "src": [
          [
            "AP Voter Poll",
            "https://apnews.com/article/election-takeaways-midterms-trump-democrats-takeover-republicans-1cb09c8674598632ec3e4307eda5fbb8"
          ]
        ]
      }
    ]
  }
];
export const findEdition = id => editions.find(e=>e.id===id);
