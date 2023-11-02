import shirtGeek from '../../assets/shirts-image.png';
import actionFigure from '../../assets/onepiece-action-figures.jpg';
import { createSlice } from '@reduxjs/toolkit';
import livrosImg from '../../assets/livrosimage.jpg';
import actionFigure2 from '../../assets/actionfigura.jpg';
import gamesController from '../../assets/gamescontroller.webp';

const initialState = [
  {
    name: 'Livros',
    thumbnail: livrosImg,
    header: livrosImg,
    id: 'livros',
    description:
      'Uma coleção de livros geek para os amantes da literatura fantástica e ficção científica.',
    src: livrosImg,
  },
  {
    name: 'Figuras de Ação',
    thumbnail: actionFigure2,
    header: actionFigure2,
    id: 'figuras_acao',
    description:
      'Personagens icônicos para decorar sua prateleira ou mesa de trabalho.',
    src: actionFigure,
  },
  {
    name: 'Games',
    thumbnail: gamesController,
    header: gamesController,
    id: 'games',
    description:
      'Diversão garantida com os melhores jogos, console e acessórios para vídeo-games.',
    src: gamesController,
  },
  {
    name: 'Camisetas Geek',
    thumbnail: shirtGeek,
    header: shirtGeek,
    id: 'camisetas_geek',
    description:
      'Mostre o seu lado geek com camisetas estilizadas de seus personagens favoritos.',
    src: shirtGeek,
  },
];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
});

export default categoriesSlice.reducer;
