import { css } from '@emotion/react';

import { Required } from 'components/Form';

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
`;

const radioArea = css``;

export default Radio;

// import { css } from "@emotion/react";

// import { Required } from "components/Form";

// interface Props {
//   label: string;
//   name: string;
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   radioItems: string[];
//   required: boolean;
// }

// const Radio = ({ label, name, onChange, radioItems, required }: Props) => {
//   return (
//     <div css={component}>
//       <div css={flex}>
//         <p>{label}</p>
//         {required ? <Required /> : ""}
//       </div>
//       <div css={radioArea}>
//         {radioItems.map((i, n) => {
//           return (
//             <div css={radio} className={`radio-${name}`} key={n}>
//               <input name={name} type="radio" value={i} onChange={onChange} />
//               <label>{i}</label>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// const component = css`
//   align-items: flex-start;
//   display: flex;
//   padding-top: var(--form-padding);
//   position: relative;
// `;

// const flex = css`
//   align-items: center;
//   display: flex;
//   flex-shrink: 0;
//   width: var(--form-label-width);

//   & > p:nth-child(1) {
//     color: var(--color-1);
//     font-family: var(--noto-sans-jp);
//     font-size: 1rem;
//     font-weight: 700;
//   }
// `;

// const radio = css`
//   &:nth-child(n + 2) {
//     margin-top: 0.6rem;
//   }

//   & > input {
//     display: none;
//   }

//   & > label {
//     align-items: center;
//     color: var(--color-1);
//     display: flex;
//     font-family: var(--noto-sans-jp);
//     font-size: 1rem;
//     font-weight: 400;
//     position: relative;

//     &::before {
//       border: 2px solid var(--color-1);
//       border-radius: 50%;
//       content: "";
//       display: block;
//       flex-shrink: 0;
//       height: 1rem;
//       margin-right: 0.4rem;
//       width: 1rem;
//     }
//   }
// `;

// const radioArea = css``;

// export default Radio;
