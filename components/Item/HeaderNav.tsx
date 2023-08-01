import { css } from '@emotion/react';

interface Props {
  href: string;
  menu: string;
}

const HeaderNav = ({ href, menu }: Props) => {
  return (
    <li css={component}>
      <a href={href}>{menu}</a>
    </li>
  );
};

const component = css`
  position: relative;

  &:nth-child(n + 2) {
    margin-left: 2.5rem;
  }

  & > a {
    color: var(--color-1);
    display: inline-block;
    font-family: var(--noto-sans-jp);
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }
`;

export default HeaderNav;
