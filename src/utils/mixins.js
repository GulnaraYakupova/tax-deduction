import {css} from 'styled-components';
import {color} from '../utils/vars';

export const font = {
  labGrotesque: css`
    font-family: 'LabGrotesque', 'Arial', sans-serif;
  `
}

export const transition = {
  timing: '0.3s',
  easing: 'cubic-bezier(0.85, 0, 0.15, 1)'
}

export const baseTransition = ([...properties]) => {
  return `
		transition-property: ${properties};
		transition-duration: ${transition.timing};
		transition-timing-function: ${transition.easing};
	`
}

export const gradient = css`
  background: linear-gradient(255.35deg, ${color.lightRed} 0.83%, ${color.opacityRed} 108.93%), ${color.red};
`;

export const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
`