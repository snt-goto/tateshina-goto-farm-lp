import { css } from '@emotion/react';

interface Props {}

const Map = ({}: Props) => {
  return (
    <iframe
      css={component}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51601.42883657518!2d138.23042723775632!3d36.06692585092656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601c4e5d08f6a63d%3A0xf7d929f1922a7056!2z44CSMzkxLTAzMDEg6ZW36YeO55yM6IyF6YeO5biC5YyX5bGx!5e0!3m2!1sja!2sjp!4v1688197461489!5m2!1sja!2sjp"
    />
  );
};

const component = css`
  border: none;
  height: 100%;
  position: absolute;
  width: 100%;
`;

export default Map;
