import { css } from '@emotion/react';

import { Required } from 'components/Form';

import { mq } from 'styles/media';

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

  ${mq.m} {
    & > textarea {
      height: 11.5rem;
      width: calc(100% - var(--form-label-width_mq-m));
    }
  }

  ${mq.s} {
    align-items: flex-start;
    flex-direction: column;

    & > textarea {
      width: 100%;
    }
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

  ${mq.m} {
    width: var(--form-label-width_mq-m);
  }

  ${mq.s} {
    margin-bottom: var(--form-mb);
    width: 100%;
  }
`;

export default Textarea;
