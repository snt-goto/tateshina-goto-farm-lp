import { css } from '@emotion/react';

interface Props {
  date: string;
  tit: string;
}

const News = ({ date, tit }: Props) => {
  return (
    <li css={component}>
      <p>{date}</p>
      <p>{tit}</p>
    </li>
  );
};

const component = css`
  align-items: center;
  border-top: 1px solid var(--color-5);
  display: flex;
  padding: 1.3rem 0;
  position: relative;

  &:last-child {
    border-bottom: 1px solid var(--color-5);
  }

  & > p {
    font-family: var(--noto-sans-jp);
    font-weight: 400;

    :nth-child(1) {
      color: var(--color-6);
      flex-shrink: 0;
      font-size: 0.8rem;
      width: 12rem;
    }

    :nth-child(2) {
      color: var(--color-1);
      font-size: 1rem;
    }
  }
`;

export default News;
