import { css } from '@emotion/react';

import { MaxWidth, Wrap } from 'components/Base';
import { Faq } from 'components/Item';
import { MainTit } from 'components/Tit';

import { setPageLink } from 'feature';

import { mq } from 'styles/media';

interface Props {}

const MainFaq = ({}: Props) => {
  const faqItems = [
    {
      answer: '冷蔵便に対応しています。その場合別途150円かかります。',
      question: '冷蔵便で配送できますか？'
    },
    {
      answer:
        '商品代引きとクレジットカード決済があります。代引き手数料は、10,800円未満で税込330円・10,800円以上32,400円未満で税込440円・32,400円以上102,400円未満で税込660円です。手数料はお客様のご負担となりますのでご了承ください。クレジットカード決済は、JCB・VISA・master・ダイナース・アメリカンエキスプレスのマークが入っているカードすべてご利用になれます。',
      question: 'どのような支払い方法がありますか？'
    },
    {
      answer:
        'プレゼント用にラッピング→可能です。ラッピングが必要な場合は、購入時にフォームの「ラッピングを希望」にチェックを入れてください。',
      question: 'プレゼント用にラッピングすることはできますか？'
    },
    {
      answer:
        'いちご狩りの予約→繁忙期（1～3月、GW期間中）の土日祝日は予約はご遠慮いただいておりますが、平日または繁忙期以外の土日祝日はご予約可能です。',
      question: 'いちご狩りの予約は必要ですか'
    },
    {
      answer: '海外発送→現在のところ対応できておりません。海外からのご注文で日本国内への発送は承っております。',
      question: '海外発送できますか？'
    }
  ];

  setPageLink('faq');

  return (
    <>
      <span id="faq" />
      <div css={component}>
        <MainTit tit="FAQ" />
        <MaxWidth>
          <Wrap width="60">
            <ul css={ulCss}>
              {faqItems.map((i, n) => {
                return <Faq answer={i.answer} key={n} question={i.question} />;
              })}
            </ul>
          </Wrap>
        </MaxWidth>
        <img src="/img/breakfast_img.png" alt="" />
      </div>
    </>
  );
};

const component = css`
  background-color: var(--color-2);
  padding: 5.6rem 0;
  position: relative;

  & > img {
    display: block;
    height: auto;
    position: absolute;
    left: 2.5rem;
    top: 105%;
    transform: translateY(-50%);
    width: 17.5rem;
    z-index: 1;
  }

  ${mq.m} {
    padding: 5.1rem 0;

    & > img {
      left: 2rem;
      width: 15.8rem;
    }
  }

  ${mq.xs} {
    padding: 4.6rem 0;

    & > img {
      left: 1.5rem;
      width: 14.1rem;
    }
  }
`;

const ulCss = css`
  list-style: none;
  margin-top: 4.5rem;

  ${mq.m} {
    margin-top: 4.1rem;
  }

  ${mq.xs} {
    margin-top: 3.7rem;
  }
`;

export default MainFaq;
