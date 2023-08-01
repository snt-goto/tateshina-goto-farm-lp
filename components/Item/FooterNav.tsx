import { css } from '@emotion/react';

interface Props {
  href: string;
  menu: string;
}

const FooterNav = ({ href, menu }: Props) => {
  return (
    <li css={component}>
      <a href={href}>{menu}</a>
    </li>
  );
};

const component = css`
  &:nth-child(n + 2) {
    margin-left: 1.5rem;
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

export default FooterNav;
