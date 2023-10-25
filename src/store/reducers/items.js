import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import assistenteVirtual from '../../assets/items/assistente-virtual.png';
import airpod from '../../assets/items/airpod.png';
import assistenteVirtualTela from '../../assets/items/assistente-virtual-tela.png';
import leitorLivros from '../../assets/items/leitor-livros.png';
import almofadaAssento from '../../assets/items/assento.png';
import capaVolanteCouro from '../../assets/items/capa-volante-couro.png';
import organizadorLateral from '../../assets/items/organizador-lateral.png';
import capaVolanteCristais from '../../assets/items/capa-volante-cristais.png';
import suporteVeicular from '../../assets/items/suporte-veicular.png';
import console1 from '../../assets/items/console-1.png';
import jogo1 from '../../assets/items/jogo-1.png';
import console2 from '../../assets/items/console-2.png';
import manete from '../../assets/items/manete.png';
import jogo2 from '../../assets/items/jogo-2.png';
import guardaTreco from '../../assets/items/guarda-treco.png';
import caderno from '../../assets/items/caderno.png';
import cadeira from '../../assets/items/cadeira.png';
import organizadorPastas from '../../assets/items/organizador-pastas.png';
import papel from '../../assets/items/papel.png';
import tv50 from '../../assets/items/tv-50.png';
import tv60 from '../../assets/items/tv-60.png';
import caixaSom from '../../assets/items/caixa-som.png';
import caixaSomBluetooth from '../../assets/items/caixa-som-bluetooth.png';
import miniSystem from '../../assets/items/mini-system.png';
import tablet from '../../assets/items/tablet.png';

const initialState = [
  {
    titulo: 'Assistente virtual',
    descricao:
      'Conheça nosso smart speaker de maior sucesso ainda melhor. O novo design de áudio com direcionamento frontal (1 speaker de 1,6") garante mais graves e um som completo.',
    foto: assistenteVirtual,
    favorito: false,
    preco: 285,
    id: uuid(),
    categoria: 'livros',
  },
  {
    titulo: 'AirPods com Estojo de Recarga',
    descricao:
      'Os AirPods ligam automaticamente e estão sempre conectados e sabem quando estão nos seus ouvidos e pausam quando são tirados. Para ajustar o volume, trocar de música, fazer uma ligação.',
    foto: airpod,
    favorito: false,
    preco: 900,
    id: uuid(),
    categoria: 'livros',
  },
  {
    titulo: 'Tablet Wi-Fi',
    descricao:
      'Com o chip A12Z Bionic, o novo Tablet Pro garante maior fluidez em tarefas diárias, trabalhos e muito mais edite vídeos em 4K, crie objetos 3D e utilize realidade aumentada de forma natural e instantânea.',
    foto: tablet,
    favorito: false,
    preco: 637,
    id: uuid(),
    categoria: 'livros',
  },
  {
    titulo: 'Assistente virtual com tela',
    descricao:
      'Desenvolvido para se mover com você: com um display HD de 10,1" que se move automaticamente, as chamadas de vídeo, as receitas e os filmes e séries estarão sempre à vista. Os alto-falantes oferecem som direcional premium e de alta qualidade.',
    foto: assistenteVirtualTela,
    favorito: false,
    preco: 1600,
    id: uuid(),
    categoria: 'livros',
  },
  {
    titulo: 'Leitor de livros digitais',
    descricao:
      'O Leitor de livros digitais com a maior e melhor resolução - tela Paperwhite de 7" e 300 ppi. Leia como se fosse em papel, sem reflexo, mesmo sob a luz do sol.',
    foto: leitorLivros,
    favorito: false,
    preco: 447,
    id: uuid(),
    categoria: 'livros',
  },
  {
    titulo: 'Almofada de assento',
    descricao:
      'Feito de material de couro, confortável e suave. Couro ambiental natural dá uma sensação delicada. Adequado para uso durante todo o ano. Com as funções de aquecimento e ventilação do assento de carro podem ser usadas normalmente.',
    foto: almofadaAssento,
    favorito: false,
    preco: 45.9,
    id: uuid(),
    categoria: 'figuras_acao',
  },
  {
    titulo: 'Capa de volante de couro',
    descricao:
      'Esta capa de volante feita de couro sintético, antiderrapante, respirável. 100% SEM ODOR: elástico saudável e ecológico, não tóxico, durável. Melhor aderência no volante proporciona uma ótima e confortável experiência de direção.',
    foto: capaVolanteCouro,
    favorito: false,
    preco: 150,
    id: uuid(),
    categoria: 'figuras_acao',
  },
  {
    titulo: 'Organizador lateral',
    descricao:
      'Aumente mais espaço e garanta a segurança – todos os motoristas sabem que é muito perigoso que nosso telefone caia na lacuna entre o assento frontal e o lado do console durante a condução, este enchimento de lacuna de assento de carro cria armazenamento extra para você para evitar que coisas perigosas aconteçam, pode armazenar coisas como smartphone, carteira,que garante a condução segura.',
    foto: organizadorLateral,
    favorito: false,
    preco: 149.9,
    id: uuid(),
    categoria: 'figuras_acao',
  },
  {
    titulo: 'Capa de volante de cristais',
    descricao:
      'Material da capa do volante de cristal: Couro de alta qualidade e artesanato em diamante: mais estável em comparação com outros mesmos produtos, e não machuca suas mãos. Esta capa de volante brilhante para mulheres meninas é universal para volante com diâmetro de 37-38 cm/14,5-15 pol. ',
    foto: capaVolanteCristais,
    favorito: false,
    preco: 290,
    id: uuid(),
    categoria: 'figuras_acao',
  },
  {
    titulo: 'Suporte Veicular',
    descricao:
      'Com o Suporte Veicular Magnetico 3 em 1 i2GO PRO você posiciona seu Smartphone de qualquer tamanho e outros dispositivos onde quiser de maneira fácil e segura. Ideal para o utilização de aplicativos de GPS e controlar músicas no carro, assistir a filmes e séries em casa, além de atender chamadas de vídeo e conferir documentos e mensagens no escritório.',
    foto: suporteVeicular,
    favorito: false,
    preco: 59.9,
    id: uuid(),
    categoria: 'figuras_acao',
  },
  {
    titulo: 'Console',
    descricao:
      'O console que está em pré-venda oferece novas possibilidades de jogabilidade que você nunca imaginou. Além disso, você também pode baixar jogos_tabuleiro digitais, Experimente o carregamento extremamente rápido do SSD de 825GB com ultra-velocidade, uma imersão mais profunda com suporte à resposta tátil, gatilhos adaptáveis e áudio 3D.',
    foto: console1,
    favorito: false,
    preco: 4300,
    id: uuid(),
    categoria: 'jogos_tabuleiro',
  },
  {
    titulo: 'Jogo para console',
    descricao:
      'Embarque em uma jornada épica e comovente e lute contra queles que desafiam o destino que anseia por conhecimento para ajudá-lo a entender a profecia e o papel que ele desempenhará. Você deve decidir se será acorrentado pelo medo de repetir seus erros ou se libertar de seu passado para ser o pai que precisa.',
    foto: jogo1,
    favorito: false,
    preco: 299.9,
    id: uuid(),
    categoria: 'jogos_tabuleiro',
  },
  {
    titulo: 'Console',
    descricao:
      'Menor e mais elegante de todos os tempos. Com taxas de quadros mais altas, tempos de carregamento mais rápidos e mundos mais ricos e dinâmicos, oferece desempenho e velocidade de última geração em um formato compacto e totalmente digital e também possui os melhores serviços para jogadores de todos os tipos.',
    foto: console2,
    favorito: false,
    preco: 4349,
    id: uuid(),
    categoria: 'jogos_tabuleiro',
  },
  {
    titulo: 'Controle joystick sem fio',
    descricao:
      'Este controle combina funções revolucionárias, preservando precisão, conforto e exatidão em cada movimento. Graças à sua ergonomia especialmente projetada para a posição da sua mão, você pode passar horas jogando com total conforto.',
    foto: manete,
    favorito: false,
    preco: 279,
    id: uuid(),
    categoria: 'jogos_tabuleiro',
  },
  {
    titulo: 'Jogo para console',
    descricao:
      'Em sua mais nova aventura um adolescente está se ajustando a sua nova casa mas quando uma luta feroz pelo poder ameaça destruir sua nova casa, o aspirante a herói percebe que com grandes poderes, também deve vir uma grande responsabilidade para salvar toda a Nova Iorque deve assumir o manto de herói.',
    foto: jogo2,
    favorito: false,
    preco: 349.9,
    id: uuid(),
    categoria: 'jogos_tabuleiro',
  },
  {
    titulo: 'Organizador de Mesa',
    descricao:
      'Moderno, funcional e versátil com acabamento em plástico de alta qualidade e construção robusta que se adapta a qualquer ambiente. (5 compartimentos e 1 divisão na parte traseira). Em sua área de trabalho, mantenha tudo limpo e organizado, como caneta, lápis, tesoura, clipes, notas adesivas, acessórios e muito mais para economizar espaço com estilo.',
    foto: guardaTreco,
    favorito: false,
    preco: 19.9,
    id: uuid(),
    categoria: 'camisetas_geek',
  },
  {
    titulo: 'Caderno Inteligente',
    descricao:
      'Caderno inteligente com calendário, elástico para caneta e divisórias Formato: 215 x 280 mm (lxa) Com 60 folhas pautadas e 20 folhas lisas brancas de 90 gramas que você tira e coloca quando quiser Fabricado com muito cuidado e atenção aos detalhes',
    foto: caderno,
    favorito: false,
    preco: 285,
    id: uuid(),
    categoria: 'camisetas_geek',
  },
  {
    titulo: 'Cadeira de Escritório',
    descricao:
      'Base giratória em 360º de polipropileno com 5 rodízios;Ajuste de altura a gás;Encosto com estrutura de madeira com estofamento revestido em couro PU;Assento com madeira multi laminada com estofamento revestido em couro PU;Braços em polipropileno com estofamento revestido em couro PU; Espuma com densidade controlada.',
    foto: cadeira,
    favorito: false,
    preco: 629,
    id: uuid(),
    categoria: 'camisetas_geek',
  },
  {
    titulo: 'Papel Sulfite A4 75g 500 folhas',
    descricao:
      'Desenvolvido para ser utilizado em atividades escolares e profissionais corte perfeito e equilibrada absorção, permite melhor deslizamento do papel na impressora. Produzido com eucalipto 100% renovável e as fibras são tratadas para obter o mais elevado grau de brancura. Chamex garante excelente performance em equipamentos e impressoras de alta velocidade, com 99% de não atolamento das folhas em sua impressora.',
    foto: papel,
    favorito: false,
    preco: 27.6,
    id: uuid(),
    categoria: 'camisetas_geek',
  },
  {
    titulo: 'Arquivo Estreito com Furação',
    descricao:
      'Ideal para a organização de pastas e papéis. Organize seus documentos e pastas suspensas em um só lugar, poupando espaço em gavetas. Possui encaixe para acomodas as pastas sem amassar. Contém furos para ventilação do organizador e design diferenciado. Organiza e deixa seu ambiente mais bonito.',
    foto: organizadorPastas,
    favorito: false,
    preco: 44.9,
    id: uuid(),
    categoria: 'camisetas_geek',
  },
];

const itemsSlice = createSlice({
  name: 'items',
  initialState,
});

export default itemsSlice.reducer;
