import { css } from '@emotion/react';

import { MaxWidth, Wrap } from 'components/Base';
import { FixedRadioImg } from 'components/Img';

import { setPageLink } from 'feature';

import { mq } from 'styles/media';

interface Props {}

const MainAbout = ({}: Props) => {
  setPageLink('about');

  return (
    <>
      <span id="about" />
      <div css={component}>
        <MaxWidth>
          <div css={txt}>
            <Wrap width="70">
              <h2>
                蓼科の生きた豊かな恵みを、
                <br />
                そのままに
              </h2>
              <p>
                「蓼科ごとう農園」は、
                <br className="mq-m" />
                蓼科の新鮮な農産物を提供するだけでなく、
                <br />
                蓼科の自然環境を大切に守り、
                <br className="mq-m" />
                後世に残すことを使命としています。
                <br />
                私たちは、農業に従事する者として、
                <br />
                土地や水、空気といった
                <br className="mq-m" />
                自然環境がもたらす恩恵に感謝し、
                <br />
                その恩恵を受け継ぐ未来の世代にも、
                <br />
                同じような恩恵を受け継ぐことができるよう、
                <br />
                最善を尽くしています。
                <br />
                そのため、私たちは有機農法を導入し、
                <br />
                化学肥料や農薬を極力使用しない
                <br className="mq-m" />
                栽培方法を取り入れています。
                <br />
                また、自然災害に備え、
                <br className="mq-m" />
                耕作放棄地の再生や山の植林活動など、
                <br />
                地域の環境保全活動にも積極的に参加しています。
                <br />
                私たちは、「蓼科ごとう農園」を通じて、
                <br />
                蓼科の美しい自然を末永く守り、
                <br />
                地域の豊かな暮らしを支えることを目指しています。
              </p>
            </Wrap>
          </div>
          <div css={img}>
            <Wrap width="90">
              <div className="box">
                <FixedRadioImg src="/img/home_about_1.jpg" />
              </div>
              <div className="box">
                <FixedRadioImg src="/img/home_about_2.jpg" />
              </div>
            </Wrap>
          </div>
        </MaxWidth>
      </div>
    </>
  );
};

const component = css`
  background-color: var(--color-2);
  padding-top: 3.5rem;
  position: relative;

  ${mq.m} {
    padding-top: 7rem;
  }

  ${mq.s} {
    padding-top: 3.2rem;
  }

  ${mq.xs} {
    padding-top: 2.9rem;
  }
`;

const img = css`
  & div.box {
    margin-left: auto;
    overflow: hidden;
    position: relative;

    &:nth-child(1) {
      border-radius: 150px;
      height: 32.5rem;
      margin-bottom: 2.2rem;
      width: 68%;
    }

    &:nth-child(2) {
      border-radius: 50px;
      height: 15.5rem;
      width: 34%;
    }
  }

  ${mq.m} {
    & div.box {
      &:nth-child(1) {
        border-radius: 125px;
        height: 29.3rem;
        margin-bottom: 2rem;
      }

      &:nth-child(2) {
        border-radius: 45px;
        height: 14rem;
      }
    }
  }

  ${mq.s} {
    & div.box {
      &:nth-child(1) {
        border-radius: 100px;
        width: 100%;
      }

      &:nth-child(2) {
        width: 100%;
      }
    }
  }

  ${mq.xs} {
    & div.box {
      &:nth-child(1) {
        border-radius: 75px;
        height: 26.1rem;
        margin-bottom: 1.8rem;
      }

      &:nth-child(2) {
        border-radius: 40px;
        height: 12.5rem;
      }
    }
  }
`;

const txt = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  & h2 {
    background-color: var(--white-transparent-90);
    color: var(--color-3);
    display: inline-block;
    font-family: var(--noto-sans-jp);
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.7rem;
    padding: 0.4rem 0.6rem 0.7rem;

    & > br {
      display: none;
    }
  }

  & p {
    background-color: var(--white-transparent-90);
    color: var(--color-4);
    display: inline-block;
    font-family: var(--noto-sans-jp);
    font-size: 1rem;
    font-weight: 700;
    line-height: 2.5;
    padding: 0.9rem;

    & > br[class*='mq'] {
      display: none;
    }
  }

  ${mq.l} {
    & h2 {
      font-size: 2.4rem;
    }
  }

  ${mq.m} {
    & h2 {
      font-size: 2.2rem;
      margin-bottom: 1.6rem;

      & > br {
        display: block;
      }
    }

    & p {
      & > br.mq-m {
        display: block;
      }
    }
  }

  ${mq.s} {
    left: auto;
    margin-bottom: 2.7rem;
    top: auto;
    position: relative;
    transform: none;

    & h2 {
      font-size: 2rem;
      width: 100%;
    }

    & p {
      width: 100%;
    }
  }

  ${mq.xs} {
    margin-bottom: 2.4rem;

    & h2 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }
  }
`;

export default MainAbout;
