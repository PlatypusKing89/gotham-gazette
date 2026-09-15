import css1 from './week1-css-part1';
import css2 from './week1-css-part2';
import body1 from './week1-body-part1';
import body2 from './week1-body-part2';
import body3 from './week1-body-part3';
import body4 from './week1-body-part4';
import body5 from './week1-body-part5';

export const week1Css = css1 + css2;

export const week1Html = (body1 + body2 + body3 + body4 + body5)
  .replace('__WEEK1_HERO__', '/a_cinematic_stylized_comic_book_illustration_lik.png')
  .replace('__WEEK1_CARTOON__', '/a_wide_detailed_comic_illustration_style_split_s.png');
