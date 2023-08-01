import { css } from '@emotion/react';

import { MaxWidth, Wrap } from 'components/Base';
import { Map } from 'components/Iframe';
import { MainTit } from 'components/Tit';
import { Access } from 'components/Item';

import { setPageLink } from 'feature';

interface Props {}

const MainAccess = ({}: Props) => {
  const accessItems = [
    {
      cont: '蓼科ごとう農園',
      tit: '会社名'
    },
    {
      cont: '後藤 優香',
      tit: '代表者名'
    },
    {
      cont: '長野県茅野市北山×××××',
      tit: '所在地'
    },
    {
      cont: 'tateshina-goto@gmail.com',
      tit: 'E-mail'
    }
  ];

  setPageLink('access');

  return (
    <>
      <span id="access" />
      <div css={component}>
        <MainTit tit="アクセス" />
        <MaxWidth>
          <Wrap width="70">
            <div css={flex}>
              <ul>
                {accessItems.map((i, n) => {
                  return <Access cont={i.cont} key={n} tit={i.tit} />;
                })}
              </ul>
              <div>
                <Map />
              </div>
            </div>
          </Wrap>
        </MaxWidth>
        <img src="/img/brusselsSprouts_img.png" alt="" />
      </div>
    </>
  );
};

const component = css`
  padding: 5.6rem 0 4.8rem;
  position: relative;

  & > img {
    display: block;
    height: auto;
    position: absolute;
    right: 1.5rem;
    top: 100%;
    transform: translateY(-40%);
    width: 15rem;
    z-index: 1;
  }
`;

const flex = css`
  display: flex;
  margin-top: 5.4rem;

  & > div {
    height: 20.8rem;
    position: relative;
    width: 100%;
  }

  & > ul {
    flex-shrink: 0;
    list-style: none;
    margin-right: 2rem;
    width: 50%;
  }
`;

export default MainAccess;
