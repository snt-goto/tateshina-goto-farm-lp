import { css } from '@emotion/react';

import { mq } from 'styles/media';

interface Props {
  answer: string;
  question: string;
}

const Faq = ({ answer, question }: Props) => {
  const openAnswer = (event: any) => {
    const elem = event.target;

    const answerElem = elem.getElementsByClassName('answer')[0],
      questionElem = elem.getElementsByClassName('question')[0];

    answerElem.classList.toggle('open');
    questionElem.classList.toggle('open');
  };

  return (
    <li
      css={component}
      onClick={(event) => {
        openAnswer(event);
      }}
    >
      <div css={questionArea} className="question">
        <p>Q</p>
        <p>{question}</p>
        <img src="/img/down_arrow.svg" alt="" />
      </div>
      <div css={answerArea} className="answer">
        <p>{answer}</p>
      </div>
    </li>
  );
};

const answerArea = css`
  max-height: 0;
  pointer-events: none;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;

  &.open {
    max-height: 100vh;
  }

  & > p {
    color: var(--color-1);
    font-family: var(--noto-sans-jp);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5em;
    padding-top: 1.5rem;
  }

  ${mq.m} {
    & > p {
      padding-top: 1.4rem;
    }
  }

  ${mq.xs} {
    & > p {
      padding-top: 1.3rem;
    }
  }
`;

const component = css`
  overflow: hidden;
  position: relative;

  &:nth-child(n + 2) {
    margin-top: 2rem;
  }

  &:hover {
    cursor: pointer;
  }

  ${mq.m} {
    &:nth-child(n + 2) {
      margin-top: 1.8rem;
    }
  }

  ${mq.xs} {
    &:nth-child(n + 2) {
      margin-top: 1.6rem;
    }
  }
`;

const questionArea = css`
  align-items: center;
  background-color: var(--white);
  display: flex;
  padding: 0.6rem 0.8rem;
  pointer-events: none;

  &.open {
    & > img {
      transform: rotateX(180deg);
    }
  }

  & > img {
    display: block;
    flex-shrink: 0;
    height: auto;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    width: 1rem;
  }

  & > p {
    color: var(--color-1);
    font-weight: 700;

    &:nth-of-type(1) {
      flex-shrink: 0;
      font-family: var(--roboto);
      font-size: 1.5rem;
    }

    &:nth-of-type(2) {
      font-family: var(--noto-sans-jp);
      font-size: 1.1rem;
      margin-right: auto;
      padding: 0 0.5rem;
    }
  }

  ${mq.m} {
    & > img {
      width: 0.9rem;
    }

    & > p {
      &:nth-of-type(1) {
        font-size: 1.4rem;
      }
    }
  }

  ${mq.xs} {
    & > img {
      width: 0.8rem;
    }

    & > p {
      &:nth-of-type(1) {
        font-size: 1.3rem;
      }
    }
  }
`;

export default Faq;
