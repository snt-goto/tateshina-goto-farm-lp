import { css } from '@emotion/react';

import { Required } from 'components/Form';

interface Props {
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required: boolean;
  value: string;
}

const Textarea = ({ label, name, onChange, required, value }: Props) => {
  return (
    <div css={component}>
      <div css={flex}>
        <label htmlFor={name}>{label}</label>
        {required ? <Required /> : ''}
      </div>
      <textarea id={name} onChange={onChange} required={true} value={value} />
    </div>
  );
};

const component = css`
  align-items: flex-start;
  display: flex;
  position: relative;

  & > textarea {
    background-color: var(--color-8);
    border-radius: 5px;
    color: var(--color-1);
    font-family: var(--noto-sans-jp);
    font-size: 1rem;
    font-weight: 700;
    height: 10.5rem;
    padding: var(--form-padding);
    width: calc(100% - var(--form-label-width));
  }
`;

const flex = css`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  padding-top: var(--form-padding);
  width: var(--form-label-width);

  & > label {
    color: var(--color-1);
    font-family: var(--noto-sans-jp);
    font-size: 1rem;
    font-weight: 700;
  }
`;

export default Textarea;
