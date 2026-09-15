export default function finalizeIssue(html) {
  let out = html;

  out = out.replace(
    'Henny has Year 1. Dave B has Year 2. Alex and Mike have both made the final. Dave C is brand new. The Chaos era starts with a clean slate and a very short history already worth arguing about.',
    'The Gazette preseason pick is Zaddy Dan, by a nose. Dan does not have the highest projected starting score, but the roster is deep, balanced and built for Chaos. Loose Endz, Dolly\'s Dolls and Love the Puca hate the game are close enough that this prediction may need the Corrections desk by October.'
  );

  out = out.replace(
    'Two champions. Two runners-up. One brand-new Dave C. Twelve teams now start over under Chaos rules. The Gazette has projections. History has been less cooperative.',
    'Henny owns Year 1. Dave B owns Year 2. For Year 3, the Gazette gives Zaddy Dan the smallest preseason edge because of depth and Chaos fit. Loose Endz, Dolly\'s Dolls and Love the Puca hate the game are right behind. Please remember that preseason predictions are free.'
  );

  // Permanent navigation so every issue can reach the latest edition and the archive.
  out = out.replace(
    '<nav>',
    '<nav aria-label="Issue navigation"><a href="/">Latest</a><a href="/archive">Archive</a>'
  );

  // A second archive link in the footer makes older issues easy to escape on mobile.
  out = out.replace(
    'Independent, noncommercial league publication<br>Managers identified by first name or league nickname only',
    'Independent, noncommercial league publication<br>Managers identified by first name or league nickname only<br><a href="/archive" style="color:#f4efe4">Browse the archive</a>'
  );

  return out;
}
