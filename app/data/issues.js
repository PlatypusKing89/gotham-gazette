export const issues = [
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
