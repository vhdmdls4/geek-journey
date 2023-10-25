import shirtGeek from '../../assets/shirts-image.png';
import actionFigure from '../../assets/onepiece-action-figures.jpg';
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    name: 'Livros',
    thumbnail:
      'https://www.hypeness.com.br/1/2022/05/cd28aa45-festival-geek-gamer-da-amazon-tem-livros-e-e-books-com-descontos-imperd%C3%ADveis-saiba-mais.jpg',
    header:
      'https://www.hypeness.com.br/1/2022/05/cd28aa45-festival-geek-gamer-da-amazon-tem-livros-e-e-books-com-descontos-imperd%C3%ADveis-saiba-mais.jpg',
    id: 'livros',
    description:
      'Uma coleção de livros geek para os amantes da literatura fantástica e ficção científica.',
    src: 'https://www.hypeness.com.br/1/2022/05/cd28aa45-festival-geek-gamer-da-amazon-tem-livros-e-e-books-com-descontos-imperd%C3%ADveis-saiba-mais.jpg',
  },
  {
    name: 'Figuras de Ação',
    thumbnail:
      'https://necaonline.com/wp-content/uploads/2023/08/54309_UNP_2-scaled.jpg',
    header:
      'https://necaonline.com/wp-content/uploads/2023/08/54309_UNP_2-scaled.jpg',
    id: 'figuras_acao',
    description:
      'Personagens icônicos para decorar sua prateleira ou mesa de trabalho.',
    src: actionFigure,
  },
  {
    name: 'Jogos de Tabuleiro',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/8/8c/Amsterdam_-_Risk_players_-_1136_%28cropped%29.jpg',
    header:
      'https://upload.wikimedia.org/wikipedia/commons/8/8c/Amsterdam_-_Risk_players_-_1136_%28cropped%29.jpg',
    id: 'jogos_tabuleiro',
    description: 'Diversão garantida com os melhores jogos de tabuleiro.',
    src: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Amsterdam_-_Risk_players_-_1136_%28cropped%29.jpg',
  },
  {
    name: 'Camisetas Geek',
    thumbnail:
      'https://chicorei.imgix.net/10297/0e098150-bedb-11e9-8804-7d0ce0669bbe.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top',
    header:
      'https://chicorei.imgix.net/10297/0e098150-bedb-11e9-8804-7d0ce0669bbe.jpg?auto=compress,format&q=65&w=550&h=824&fit=crop&crop=top',
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
