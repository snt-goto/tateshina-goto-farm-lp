import { css } from '@emotion/react';

interface Props {}

const Submit = ({}: Props) => {
  return <button css={component}>送信する</button>;
};

const component = css`
  background-color: var(--color-7);
  border-radius: 10px;
  color: var(--color-1);
  display: block;
  font-family: var(--noto-sans-jp);
  font-size: 0.9rem;
  font-weight: 700;
  margin: 3rem auto 0;
  padding: 0.7rem 0;
  width: 15rem;
`;

export default Submit;
