import { css } from '@emotion/react';

import { Required } from 'components/Form';

import { mq } from 'styles/media';

interface Props {
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  postalCode?: boolean;
  required: boolean;
  type: string;
  value: string;
}

const Input = ({ label, name, onChange, postalCode, required, type, value }: Props) => {
  return (
    <div css={component}>
      <div css={flex}>
        <label htmlFor={name}>{label}</label>
        {required ? <Required /> : ''}
      </div>
      <input
        className={postalCode ? 'postal-code' : ''}
        id={name}
        onChange={onChange}
        required={required}
        type={type}
        value={value}
      />
    </div>
  );
};

const component = css`
  align-items: center;
  display: flex;
  position: relative;

  & > input {
    background-color: var(--color-8);
    border-radius: 5px;
    color: var(--color-1);
    font-family: var(--noto-sans-jp);
    font-size: 1rem;
    font-weight: 700;
    padding: var(--form-padding);
    width: calc(100% - var(--form-label-width));

    &.postal-code {
      width: calc((100% - var(--form-label-width)) / 2);
    }
  }

  ${mq.m} {
    & > input {
      width: calc(100% - var(--form-label-width_mq-m));

      &.postal-code {
        width: calc((100% - var(--form-label-width_mq-m)) / 2);
      }
    }
  }

  ${mq.s} {
    align-items: flex-start;
    flex-direction: column;

    & > input {
      width: 100%;

      &.postal-code {
        width: 100%;
      }
    }
  }
`;

const flex = css`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  width: var(--form-label-width);

  & > label {
    color: var(--color-1);
    font-family: var(--noto-sans-jp);
    font-size: 1rem;
    font-weight: 700;
  }

  ${mq.m} {
    width: var(--form-label-width_mq-m);
  }

  ${mq.s} {
    margin-bottom: var(--form-mb);
    width: 100%;
  }
`;

export default Input;
