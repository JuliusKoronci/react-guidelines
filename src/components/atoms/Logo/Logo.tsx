import * as React from 'react';
import logo from './logo.svg';
import { Img } from './styled';

export interface IProps {
  alt?: string;
  src?: any;
}

/**
 * A logo image
 *
 * @param {any} alt alternative text in case img is not rendered
 * @param {any} src source of image e.g. an svg or jpg or url...
 * @returns {any}
 */
const Logo = ({ alt = 'logo', src = logo }: IProps) => (
  <Img src={src} alt={alt} />
);

/** @component */
export default Logo;
