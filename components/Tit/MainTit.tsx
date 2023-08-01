import { css } from '@emotion/react';

interface Props {
  tit: string;
}

const MainTit = ({ tit }: Props) => {
  return <h2 css={component}>{tit}</h2>;
};

const component = css`
  color: var(--color-1);
  font-family: var(--noto-sans-jp);
  font-size: 2rem;
  font-weight: 700;
  position: relative;
  text-align: center;
`;

export default MainTit;
