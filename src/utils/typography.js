import {css} from 'styled-components';
import {media} from '../utils/vars';

export const buttonText = css`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;

  ${media.mobile} {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const h1Text = css`
  font-weight: 500;
  font-size: 28px;
  line-height: 40px;

  ${media.mobile} {
    font-size: 18px;
    line-height: 24px;
  }
`

export const introText = css`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  ${media.mobile} {
    font-size: 12px;
    line-height: 16px;
  }
`

export const legendText = css`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  `

export const inputText = css`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`

export const errorText = css`
  font-size: 12px;
`