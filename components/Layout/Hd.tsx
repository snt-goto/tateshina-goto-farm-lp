import Head from 'next/head';

interface Props {}

const Hd = ({}: Props) => {
  return (
    <>
      <Head>
        <title>長野県茅野市の農園 | 蓼科ごとう農園</title>
        <meta
          name="description"
          content="「蓼科ごとう農園」は、蓼科の新鮮な農産物を提供するだけでなく、蓼科の自然環境を大切に守り、後世に残すことを使命としています。"
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
    </>
  );
};

export default Hd;
