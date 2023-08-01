import { css } from '@emotion/react';

interface Props {
  alt?: string;
  src: string;
}

const FixedRadioImg = ({ alt, src }: Props) => {
  return <img css={component} src={src} alt={alt} />;
};

const component = css`
  display: block;
  height: 100%;
  object-fit: cover;
  position: absolute;
  width: 100%;
`;

export default FixedRadioImg;
