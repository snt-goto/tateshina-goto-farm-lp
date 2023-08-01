import { NextPage } from 'next';

import { LoadingAnim } from 'components/Anim';
import { MainAccess, MainAbout, MainContact, MainFaq, MainNews, MainProduct, MainVisual } from 'components/Block';
import { Footer, Hd, Header } from 'components/Layout';

interface Props {}

const Home: NextPage<Props> = () => {
  return (
    <>
      <Hd />
      <LoadingAnim />
      <MainVisual />
      <Header />
      <MainAbout />
      <MainProduct />
      <MainNews />
      <MainFaq />
      <MainAccess />
      <MainContact />
      <Footer />
    </>
  );
};

export default Home;
