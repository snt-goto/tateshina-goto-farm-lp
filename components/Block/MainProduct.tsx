import { css } from '@emotion/react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FixedRadioImg } from 'components/Img';
import { MainTit } from 'components/Tit';

import { setPageLink } from 'feature';

import 'swiper/css';

interface Props {}

const MainProduct = ({}: Props) => {
  const productItems = [
    {
      price: 4800,
      src: '/img/home_product_1.jpg',
      tit: '「あいまりん」「サマープリンセス」「サマーリリカル」「よつぼし」など詰め合わせ10パック'
    },
    {
      price: 7700,
      src: '/img/home_product_2.jpg',
      tit: '蓼科ごとう農園オリジナル品種の「シャインマスカット」と「ナガノパープル」500g'
    },
    {
      price: 4200,
      src: '/img/home_product_3.jpg',
      tit: '標高1,000mオーバーの蓼科高原だからこその、あまあま芽キャベツ!! 1kg'
    },
    {
      price: 4800,
      src: '/img/home_product_4.jpg',
      tit: '「あいまりん」「サマープリンセス」「サマーリリカル」「よつぼし」など詰め合わせ10パック'
    },
    {
      price: 7700,
      src: '/img/home_product_5.jpg',
      tit: '蓼科ごとう農園オリジナル品種の「シャインマスカット」と「ナガノパープル」500g'
    },
    {
      price: 4800,
      src: '/img/home_product_1.jpg',
      tit: '「あいまりん」「サマープリンセス」「サマーリリカル」「よつぼし」など詰め合わせ10パック'
    },
    {
      price: 7700,
      src: '/img/home_product_2.jpg',
      tit: '蓼科ごとう農園オリジナル品種の「シャインマスカット」と「ナガノパープル」500g'
    },
    {
      price: 4200,
      src: '/img/home_product_3.jpg',
      tit: '標高1,000mオーバーの蓼科高原だからこその、あまあま芽キャベツ!! 1kg'
    },
    {
      price: 4800,
      src: '/img/home_product_4.jpg',
      tit: '「あいまりん」「サマープリンセス」「サマーリリカル」「よつぼし」など詰め合わせ10パック'
    },
    {
      price: 7700,
      src: '/img/home_product_5.jpg',
      tit: '蓼科ごとう農園オリジナル品種の「シャインマスカット」と「ナガノパープル」500g'
    }
  ];

  setPageLink('product');

  return (
    <>
      <span id="product" />
      <div css={component}>
        <MainTit tit="製品一覧" />
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1.2
            },
            750: {
              slidesPerView: 3.5
            }
          }}
          css={swiper}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          spaceBetween={24}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          speed={800}
          modules={[Autoplay]}
        >
          {productItems.map((i, n) => {
            return (
              <SwiperSlide key={n}>
                <div css={img}>
                  <FixedRadioImg src={i.src} />
                </div>
                <div css={txt}>
                  <p>{i.tit}</p>
                  <p>￥{i.price.toLocaleString()}（税込）</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

const component = css`
  background-color: var(--color-2);
  padding: 7.5rem 0 5.8rem;
  position: relative;
`;

const img = css`
  height: 10.3rem;
  position: relative;
  width: 100%;
`;

const swiper = css`
  margin-top: 5rem;
  overflow: visible;

  & .swiper-slide {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

const txt = css`
  background-color: var(--white);
  box-shadow: 0px 3px 6px var(--black-transparent-20);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  padding: 1rem;

  & > p {
    color: var(--color-1);
    font-family: var(--noto-sans-jp);
    font-size: 1rem;

    &:nth-of-type(1) {
      font-weight: 700;
      margin-bottom: 2.2rem;
    }

    &:nth-of-type(2) {
      font-weight: 400;
    }
  }
`;

export default MainProduct;
