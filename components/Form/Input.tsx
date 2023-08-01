import { css } from '@emotion/react';

import { Required } from 'components/Form';

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
`;

export default Input;
