import React from 'react';
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

//the main color is #415ED1

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain videoTitle={dadosIniciais.categorias[5].videos[0].titulo}
        url={dadosIniciais.categorias[5].videos[0].url}
        videoDescription={'Aprenda com o mestre Akita do canal "Akitando" como realmente aprender ao invés de sempre se programar e nunca executar.'}
      />

      <Carousel ignoreFirstVideo
        category={dadosIniciais.categorias[0]} />

      <Carousel ignoreFirstVideo
        category={dadosIniciais.categorias[1]} />

      <Carousel ignoreFirstVideo
        category={dadosIniciais.categorias[2]} />

      <Carousel ignoreFirstVideo
        category={dadosIniciais.categorias[3]} />

      <Carousel ignoreFirstVideo
        category={dadosIniciais.categorias[4]} />

      <Carousel ignoreFirstVideo
        category={dadosIniciais.categorias[5]} />

      <Footer />
    </div>
  );
}

export default Home;
