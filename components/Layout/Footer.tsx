import { css } from '@emotion/react';

import { Logo } from 'components/Elem';
import { FooterNav } from 'components/Item';

interface Props {}

const Footer = ({}: Props) => {
  const footerItems = [
    {
      href: '#about',
      menu: 'この農園について'
    },
    {
      href: '#product',
      menu: '製品一覧'
    },
    {
      href: '#news',
      menu: 'お知らせ'
    },
    {
      href: '#faq',
      menu: 'FAQ'
    },
    {
      href: '#access',
      menu: 'アクセス'
    },
    {
      href: '#contact',
      menu: 'お問い合わせ'
    }
  ];

  return (
    <footer css={component}>
      <div css={section}>
        <Logo layout="footer" />
        <ul>
          {footerItems.map((i, n) => {
            return <FooterNav href={i.href} key={n} menu={i.menu} />;
          })}
        </ul>
        <img src="/img/strawberry_img.png" alt="" />
        <img src="/img/cattle_img.png" alt="" />
      </div>
      <p>©︎ 2019 GOTONOUEN.</p>
    </footer>
  );
};

const component = css`
  padding-top: 1.5rem;
  position: relative;

  & > p {
    background-color: var(--color-9);
    color: var(--color-1);
    font-family: var(--noto-sans-jp);
    font-size: 0.8rem;
    font-weight: 400;
    padding: 1.2rem 0;
    text-align: center;
    width: 100%;
  }
`;

const section = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;

  & > img {
    bottom: 0;
    display: block;
    height: auto;
    position: absolute;
    z-index: 1;

    &:nth-of-type(1) {
      left: 1.5rem;
      width: 11rem;
    }

    &:nth-of-type(2) {
      right: 0;
      width: 12.5rem;
    }
  }

  & > ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 3rem 0 5.5rem;
  }
`;

export default Footer;
