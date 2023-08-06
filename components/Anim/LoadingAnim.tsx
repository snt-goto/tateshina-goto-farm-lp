import { css } from '@emotion/react';
import { useEffect } from 'react';

import { Logo } from 'components/Elem';

interface Props {}

const LoadingAnim = ({}: Props) => {
  useEffect(() => {
    window.onload = () => {
      const loadingAnimElem = document.getElementById('loading-anim');

      loadingAnimElem?.classList.add('load');
    };
  }, []);

  return (
    <div css={component} id="loading-anim">
      <Logo layout="loading-anim" />
    </div>
  );
};

const component = css`
  align-items: center;
  background: var(--color-2);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;

  &.load {
    animation-delay: 1s;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-name: fadeOut;
    pointer-events: none;
  }

  & > div {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-name: fadeUp;
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(100px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default LoadingAnim;
