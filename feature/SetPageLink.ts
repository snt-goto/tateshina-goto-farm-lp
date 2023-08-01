import { useEffect } from 'react';

const SetPageLink = (id: string) => {
  useEffect(() => {
    const headerElem: any = document.getElementById('header'),
      elem: any = document.getElementById(id);

    const setHeight = () => {
      const headerHeight = Math.round(headerElem.getBoundingClientRect().height * 100) / 100;

      const baseStyle = `
        margin-top: calc(0px - ${headerHeight}px);
        padding-top: ${headerHeight}px;
      `;

      elem.style.cssText = baseStyle;
    };

    setHeight();

    window.addEventListener('resize', () => {
      setHeight();
    });
  }, [id]);
};

export default SetPageLink;
