import { css } from '@emotion/react';

import { Logo } from 'components/Elem';
import { HeaderNav } from 'components/Item';

interface Props {}

const Header = ({}: Props) => {
  const leftHeaderItems = [
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
    }
  ];

  const rightHeaderItems = [
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
    <header css={component} id="header">
      <div css={flex}>
        <ul>
          {leftHeaderItems.map((i, n) => {
            return <HeaderNav href={i.href} key={n} menu={i.menu} />;
          })}
        </ul>
        <div css={logo}>
          <Logo layout="header" />
        </div>
        <ul>
          {rightHeaderItems.map((i, n) => {
            return <HeaderNav href={i.href} key={n} menu={i.menu} />;
          })}
        </ul>
      </div>
    </header>
  );
};

const component = css`
  background-color: var(--color-2);
  position: relative;
`;

const flex = css`
  align-items: flex-end;
  display: flex;
  justify-content: center;

  & > ul {
    display: flex;
    list-style: none;
    margin-bottom: 4.2rem;
  }
`;

const logo = css`
  margin: 0 3rem;
`;

export default Header;
