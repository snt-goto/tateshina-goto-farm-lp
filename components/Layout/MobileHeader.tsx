import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import { Wrap } from 'components/Base';
import { Logo } from 'components/Elem';
import { MobileNav } from 'components/Item';

import { mq } from 'styles/media';

interface Props {}

const MobileHeader = ({}: Props) => {
  const mobileNavItems = [
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

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openBtnElem: any = document.getElementById('open-btn');
    const navElem: any = document.getElementById('nav');

    if (open) {
      openBtnElem.classList.add('open');
      navElem.classList.add('open');
    } else {
      openBtnElem.classList.remove('open');
      navElem.classList.remove('open');
    }

    window.onresize = () => {
      let windowWidth = document.documentElement.scrollWidth;
      if (windowWidth > 1349) {
        setOpen(false);
      }
    };
  });

  return (
    <div css={component}>
      <Wrap width="90">
        <div
          css={openBtn}
          id="open-btn"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span />
          <span />
          <span />
        </div>
      </Wrap>
      <div
        css={nav}
        id="nav"
        onClick={() => {
          setOpen(false);
        }}
      >
        <Logo layout="mobile" />
        <ul>
          {mobileNavItems.map((i, n) => {
            return <MobileNav href={i.href} key={n} menu={i.menu} />;
          })}
        </ul>
      </div>
    </div>
  );
};

const component = css`
  display: none;
  padding-top: 1.2rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  ${mq.m} {
    display: block;
  }
`;

const nav = css`
  align-items: center;
  background-color: var(--white-transparent-90);
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  margin-left: auto;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  z-index: 998;

  &.open {
    opacity: 1;
    pointer-events: auto;
  }

  & > ul {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    margin-top: 3.3rem;
  }

  ${mq.xs} {
    & > ul {
      margin-top: 3rem;
    }
  }
`;

const openBtn = css`
  background-color: var(--color-7);
  border-radius: 50%;
  box-shadow: 0px 3px 6px var(--black-transparent-20);
  cursor: pointer;
  height: 3.3rem;
  margin-left: auto;
  position: relative;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  width: 3.3rem;
  z-index: 999;

  &.open {
    & > span {
      &:nth-child(1) {
        top: 50%;
        transform: rotate(45deg) translateY(-50%);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        bottom: 50%;
        transform: rotate(-45deg) translateY(50%);
      }
    }
  }

  & > span {
    background-color: var(--color-1);
    display: block;
    height: 2px;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    width: 40%;

    &:nth-child(1) {
      top: 35%;
    }

    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
    }

    &:nth-child(3) {
      bottom: 35%;
    }
  }

  ${mq.xs} {
    height: 3rem;
    width: 3rem;
  }
`;

export default MobileHeader;
