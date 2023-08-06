import { css } from '@emotion/react';

import { Required } from 'components/Form';

import { mq } from 'styles/media';

interface Props {
  label: string;
  name: string;
  radioItems: string[];
  required: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Radio = ({ label, name, onChange, radioItems, required, value }: Props) => {
  return (
    <div css={component}>
      <div css={flex}>
        <p>{label}</p>
        {required ? <Required /> : ''}
      </div>
      <div css={radioArea}>
        {radioItems.map((i, n) => {
          return (
            <div css={radio} className={i === value ? 'active' : ''} key={n}>
              <input
                id={`${name}-${n + 1}`}
                name={name}
                onChange={onChange}
                required={required}
                type="radio"
                value={i}
              />
              <label htmlFor={`${name}-${n + 1}`}>{i}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const component = css`
  align-items: flex-start;
  display: flex;
  padding-top: var(--form-padding);
  position: relative;

  ${mq.s} {
    flex-direction: column;
  }
`;

const flex = css`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  width: var(--form-label-width);

  & > p:nth-child(1) {
    color: var(--color-1);
    font-family: var(--noto-sans-jp);
    font-size: 1rem;
    font-weight: 700;
  }

  ${mq.m} {
    width: var(--form-label-width_mq-m);
  }

  ${mq.s} {
    margin-bottom: calc(var(--form-mb) * 2);
    width: 100%;
  }
`;

const radio = css`
  position: relative;

  &::after {
    border: 2px solid var(--color-1);
    border-radius: 50%;
    content: '';
    display: block;
    height: 1rem;
    left: 0;
    top: 50%;
    pointer-events: none;
    position: absolute;
    transform: translateY(-50%);
    width: 1rem;
  }

  &.active {
    &::after {
      border: 6px solid var(--color-1);
    }
  }

  &:nth-child(n + 2) {
    margin-top: 0.6rem;
  }

  & > input {
    margin-right: 0.6rem;
    opacity: 0;
  }

  & > label {
    color: var(--color-1);
    font-family: var(--noto-sans-jp);
    font-size: 1rem;
    font-weight: 400;
  }

  ${mq.m} {
    &.active {
      &::after {
        border: 5.5px solid var(--color-1);
      }
    }
  }

  ${mq.xs} {
    &.active {
      &::after {
        border: 5px solid var(--color-1);
      }
    }
  }
`;

const radioArea = css``;

export default Radio;
