import { css } from '@emotion/react';

import { MaxWidth, Wrap } from 'components/Base';
import { News } from 'components/Item';
import { MainTit } from 'components/Tit';

import { setPageLink } from 'feature';

interface Props {}

const MainNews = ({}: Props) => {
  const newsItems = [
    {
      date: '2023/06/12',
      tit: '闇落ちイチゴの販売を開始します。'
    },
    {
      date: '2023/05/14',
      tit: 'NHK「うまいッ！（全国放送）」 に蓼科ごとう農園が登場。'
    },
    {
      date: '2023/04/14',
      tit: '白樺湖直売所で、新鮮な春野菜と果物を販売しています'
    }
  ];

  setPageLink('news');

  return (
    <>
      <span id="news" />
      <div css={component}>
        <MainTit tit="お知らせ" />
        <MaxWidth>
          <Wrap width="70">
            <ul css={ulCss}>
              {newsItems.map((i, n) => {
                return <News date={i.date} key={n} tit={i.tit} />;
              })}
            </ul>
          </Wrap>
        </MaxWidth>
        <img src="/img/grape_img.png" alt="" />
      </div>
    </>
  );
};

const component = css`
  padding: 5.6rem 0;
  position: relative;

  & > img {
    display: block;
    height: auto;
    position: absolute;
    right: 0.5rem;
    top: 100%;
    transform: translateY(-50%);
    width: 15rem;
    z-index: 1;
  }
`;

const ulCss = css`
  list-style: none;
  margin-top: 5.4rem;
`;

export default MainNews;
