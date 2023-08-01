import { css } from '@emotion/react';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  img: string;
}

const BgImg = ({ children, img }: Props) => {
  return <div css={component(img)}>{children}</div>;
};

const component = (img: string) => css`
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  position: relative;
  width: 100%;
`;

export default BgImg;
