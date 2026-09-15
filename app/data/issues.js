export const issues = [
  {
    slug: "week-1",
    season: 2026,
    volume: "Volume III",
    issueLabel: "Issue 1",
    type: "Week 1",
    title: "Bobby's Juicemen Nearly Hit 300. Dolly's Dolls Got the Bill.",
    description:
      "Week 1 of the Chaos era: Bobby nearly reaches 300, the first Chaos Index lands at 6.6, both former champions lose, and the Gazette has its first receipts.",
    date: "2026-09-15",
    displayDate: "September 15, 2026",
    href: "/issues/2026/week-1",
    status: "published",
  },
  {
    slug: "issue-0",
    season: 2026,
    volume: "Volume III",
    issueLabel: "Issue 0",
    type: "Draft Special",
    title: "The Draft Got Weird. Good.",
    description:
      "The first issue of the Chaos era: draft-night reactions, preseason power rankings, the Chaos Threat Scale, league history, and the first predictions of Year 3.",
    date: "2026-09-09",
    displayDate: "September 9, 2026",
    href: "/issues/2026/issue-0",
    status: "published",
  },
];

export const issuesBySeason = issues.reduce((acc, issue) => {
  if (!acc[issue.season]) acc[issue.season] = [];
  acc[issue.season].push(issue);
  return acc;
}, {});
