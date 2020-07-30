import React from 'react';
import PageDefault from '../../components/PageDefault'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';


//the main color is #415ED1

function Home() {
  return (
    <PageDefault>
      <BannerMain videoTitle={dadosIniciais.categorias[5].videos[0].titulo}
        url={dadosIniciais.categorias[5].videos[1].url}
        videoDescription={'Aprenda com o mestre Akita do canal "Akitando" como realmente aprender ao invés de sempre se programar e nunca executar.'}
      />

      {
        dadosIniciais.categorias.map((categoria, id) => {
          return (
            <Carousel
              key={id}
              ignoreFirstVideo
              category={categoria}
            />
          )
        })
      }
      </PageDefault>
  );
}

export default Home;
