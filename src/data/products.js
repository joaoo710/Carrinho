import img1 from '../img/product/01.jpg';
import img2 from '../img/product/02.jpg';
import img3 from '../img/product/03.jpg';
import img4 from '../img/product/04.jpg';
import img5 from '../img/product/05.jpg';
import img6 from '../img/product/06.jpg';
import img7 from '../img/product/07.jpg';
import img8 from '../img/product/08.jpg';
import img9 from '../img/product/09.jpg';
import img10 from '../img/product/10.jpg';
import img11 from '../img/product/11.jpg';
import img12 from '../img/product/12.jpg';
import img13 from '../img/product/13.jpg';
import img14 from '../img/product/14.jpg';
import img15 from '../img/product/15.jpg';
import img16 from '../img/product/16.jpg';
import img17 from '../img/product/17.jpg';
import img18 from '../img/product/18.jpg';
import img19 from '../img/product/19.jpg';
import img20 from '../img/product/20.jpg';
import img21 from '../img/product/21.jpg';
import img22 from '../img/product/22.jpg';
import img23 from '../img/product/23.jpg';
import img24 from '../img/product/24.jpg';
import img25 from '../img/product/25.jpg';
import img26 from '../img/product/26.jpg';
import img27 from '../img/product/27.jpg';
import img28 from '../img/product/28.jpg';
import img29 from '../img/product/29.jpg';
import img30 from '../img/product/30.jpg';
import img31 from '../img/product/31.jpg';
import img32 from '../img/product/32.jpg';

const products = [
  {
    id: 1,
    img: img1,
    name: 'Alface Crespa',
    price: 3.89,
    description:
      'Praesent placerat leo odio. Duis id ornare lacus, quis bibendum diam. Maecenas placerat velit nec sodales consectetur. Phasellus finibus volutpat leo, nec pharetra elit facilisis cursus. Proin ut massa suscipit, vestibulum eros semper, porttitor nisi. Duis mattis ac ante ac fermentum. Integer quis mi et orci finibus sollicitudin in id quam.',
    variations: [],
    category: 'Suits',
  },
  {
    id: 2,
    img: img2,
    name: 'Cenoura Tradicional 500g',
    price: 11.99,
    description:
      'Nulla felis nisl, commodo sed facilisis ut, euismod sed nunc. Proin et libero gravida, ullamcorper erat nec, posuere ex. Nunc lobortis sit amet magna eu malesuada. Nam in egestas ex. Vivamus auctor nisi eu maximus fermentum.',
    variations: [],
    category: 'Glasses',
  },
  {
    id: 3,
    img: img3,
    name: 'Leite Integral Piracanjuba 1 Litro',
    price: 6.99,
    description:
      'Cras mattis lacinia auctor. Duis ut erat ac odio volutpat posuere. Morbi mattis lectus sed erat laoreet lacinia. Donec semper tellus eget massa efficitur, non molestie elit vestibulum. In tempor suscipit dictum. Duis quis justo tellus. Maecenas urna lorem, hendrerit at aliquet non, feugiat eu nibh.',
    variations: [
      {
        name: 'Jacket length',
        options: ['Short', 'Regular', 'Long'],
      },
    ],
    category: 'Suits',
  },
  {
    id: 4,
    img: img4,
    name: 'Achocolatado em Pó Toddy Original 370g',
    price: 11.79,
    description:
      'Quisque laoreet placerat consectetur. Etiam eget egestas augue, sit amet rutrum tellus. Curabitur scelerisque fermentum eleifend. Suspendisse iaculis tempus diam, sit amet tempus tellus tempor sed. Nunc vulputate libero sit amet nulla tempus, nec faucibus elit elementum.',
    variations: [
      {
        name: 'Jacket length',
        options: ['Short', 'Regular', 'Long'],
      },
    ],
    category: 'Suits',
  },
  {
    id: 5,
    img: img5,
    name: 'Leite Condensado Moça Lata 395g ',
    price: 8.99,
    description:
      'Maecenas eleifend, eros et ornare auctor, dolor ante mattis tortor, in cursus enim magna in lectus. Mauris id facilisis nunc. Etiam nisl nisi, posuere at bibendum id, facilisis id urna. Nullam tristique tempus tempus. Praesent blandit nisi in turpis fringilla, nec aliquam urna mollis. Integer et dignissim eros.',
    variations: [],
    category: 'Watches',
  },
  {
    id: 6,
    img: img6,
    name: 'Carne Moída 1Kg',
    price: 35.99,
    description:
      'Vestibulum at erat feugiat ipsum facilisis mollis. In dictum non orci ut luctus. Curabitur auctor tellus vel est placerat, id semper diam tempus. Ut fermentum ligula vel pellentesque iaculis. Aliquam eget faucibus metus. Phasellus consectetur nisi at tellus auctor vulputate. ',
    variations: [],
    category: 'Full look',
  },
  {
    id: 7,
    img: img7,
    name: 'Linguiça Toscana 1Kg',
    price: 26.99,
    description:
      'Nam rutrum dictum lectus a iaculis. Ut facilisis odio vehicula, varius libero ac, rhoncus lacus. Maecenas enim ante, semper ac est et, lacinia ultricies nulla. In nunc sapien, mattis sit amet gravida in, volutpat sed ex.',
    variations: [
      {
        name: 'Jacket length',
        options: ['Short', 'Regular', 'Long'],
      },
    ],
    category: 'Suits',
  },
  {
    id: 8,
    img: img8,
    name: 'Sabonete Nivea',
    price: 3.29,
    description:
      'Proin pulvinar porttitor lorem sed venenatis. Etiam sed tincidunt quam. Quisque ullamcorper odio erat. Aenean elementum tempus lectus eu pulvinar. Morbi ac gravida odio. Cras auctor, enim vitae venenatis finibus, libero lectus consectetur nulla, et finibus diam lectus in ante.',
    variations: [],
    category: 'Perfumes',
  },
  {
    id: 9,
    img: img9,
    name: 'Shampoo Pantene',
    price: 22.99,
    description:
      'Aenean ut fermentum est. Morbi sit amet mi viverra, placerat eros id, tincidunt magna. Sed feugiat enim nisi, a maximus quam rutrum eget. Vivamus hendrerit sem eros, pretium pretium tellus vestibulum ac. In mattis vitae libero vel tempor. ',
    variations: [
      {
        name: 'Size',
        options: ['7.5', '8', '9', '9.5', '10', '11', '11.5', '12', '13'],
      },
    ],
    category: 'Shoes',
  },
  {
    id: 10,
    img: img10,
    name: 'Creme Dental',
    price: 12.35,
    description:
      'In maximus dignissim facilisis. Donec sagittis tortor in iaculis egestas. Proin vehicula elementum lacus, eget fringilla nulla vestibulum vel. Sed pulvinar pharetra erat, ac fringilla urna tincidunt et. Donec quis massa nec neque accumsan viverra a mattis tellus. Donec tempor rutrum sem vel laoreet.',
    variations: [
      {
        name: 'Jacket length',
        options: ['Short', 'Regular', 'Long'],
      },
    ],
    category: 'Suits',
  },
  {
    id: 11,
    img: img11,
    name: 'Água Mineral',
    price: 3.49,
    description:
      'Cras dignissim egestas nisi id iaculis. Integer id mauris dictum ex vehicula viverra et ut justo. In tincidunt augue tortor, eu imperdiet elit tristique sed. Ut vestibulum lacus eu mauris porta ultrices. Proin eu fringilla lacus. Vestibulum dignissim risus est, convallis tristique ante euismod vel.',
    variations: [
      {
        name: 'Jacket length',
        options: ['Short', 'Regular', 'Long'],
      },
    ],
    category: 'Suits',
  },
  {
    id: 12,
    img: img12,
    name: 'Coca-Cola 2L',
    price: 6.49,
    description:
      'Maecenas tincidunt velit suscipit faucibus gravida. Nullam congue, ipsum vel condimentum ultricies, nisl metus dignissim urna, vel ultricies ipsum dolor non enim. Cras a vulputate nibh, eu fermentum mi. Aliquam ac tellus feugiat, laoreet ex vel, tempor urna. Sed eros quam, dapibus sed ultrices eu, varius sollicitudin neque.',
    variations: [],
    category: 'Glasses',
  },
  {
    id: 13,
    img: img13,
    name: 'Suco Natural 1L',
    price: 12.39,
    description:
      'Maecenas tincidunt velit suscipit faucibus gravida. Nullam congue, ipsum vel condimentum ultricies, nisl metus dignissim urna, vel ultricies ipsum dolor non enim. Cras a vulputate nibh, eu fermentum mi. Aliquam ac tellus feugiat, laoreet ex vel, tempor urna. Sed eros quam, dapibus sed ultrices eu, varius sollicitudin neque.',
    variations: [],
    category: 'Glasses',
  },
  {
    id: 14,
    img: img14,
    name: 'Papel Higiênico',
    price: 31.49,
    description:
      'Maecenas tincidunt velit suscipit faucibus gravida. Nullam congue, ipsum vel condimentum ultricies, nisl metus dignissim urna, vel ultricies ipsum dolor non enim. Cras a vulputate nibh, eu fermentum mi. Aliquam ac tellus feugiat, laoreet ex vel, tempor urna. Sed eros quam, dapibus sed ultrices eu, varius sollicitudin neque.',
    variations: [],
    category: 'Glasses',
  },
  {
    id: 15,
    img: img15,
    name: 'Detergente 500mL',
    price: 3.39,
    description:
      'Maecenas tincidunt velit suscipit faucibus gravida. Nullam congue, ipsum vel condimentum ultricies, nisl metus dignissim urna, vel ultricies ipsum dolor non enim. Cras a vulputate nibh, eu fermentum mi. Aliquam ac tellus feugiat, laoreet ex vel, tempor urna. Sed eros quam, dapibus sed ultrices eu, varius sollicitudin neque.',
    variations: [],
    category: 'Glasses',
  },
  {
    id: 16,
    img: img16,
    name: 'Pão de forma',
    price: 9.79,
    description:
      'Maecenas tincidunt velit suscipit faucibus gravida. Nullam congue, ipsum vel condimentum ultricies, nisl metus dignissim urna, vel ultricies ipsum dolor non enim. Cras a vulputate nibh, eu fermentum mi. Aliquam ac tellus feugiat, laoreet ex vel, tempor urna. Sed eros quam, dapibus sed ultrices eu, varius sollicitudin neque.',
    variations: [],
    category: 'Glasses',
  },
  {
    id: 17,
    img: img17,
    name: 'Bisnaguinha',
    price: 8.49,
    description:
      'Maecenas tincidunt velit suscipit faucibus gravida. Nullam congue, ipsum vel condimentum ultricies, nisl metus dignissim urna, vel ultricies ipsum dolor non enim. Cras a vulputate nibh, eu fermentum mi. Aliquam ac tellus feugiat, laoreet ex vel, tempor urna. Sed eros quam, dapibus sed ultrices eu, varius sollicitudin neque.',
    variations: [],
    category: 'Glasses',
  },
  {
    id: 18,
    img: img18,
    name: 'Lasanha Bolonhesa',
    price: 15.89,
    description:
      'Maecenas tincidunt velit suscipit faucibus gravida. Nullam congue, ipsum vel condimentum ultricies, nisl metus dignissim urna, vel ultricies ipsum dolor non enim. Cras a vulputate nibh, eu fermentum mi. Aliquam ac tellus feugiat, laoreet ex vel, tempor urna. Sed eros quam, dapibus sed ultrices eu, varius sollicitudin neque.',
    variations: [],
    category: 'Glasses',
  },
  {
    id: 19,
    img: img19,
    name: 'Nuggets de Frango',
    price: 25.19,
    description:
      'Maecenas tincidunt velit suscipit faucibus gravida. Nullam congue, ipsum vel condimentum ultricies, nisl metus dignissim urna, vel ultricies ipsum dolor non enim. Cras a vulputate nibh, eu fermentum mi. Aliquam ac tellus feugiat, laoreet ex vel, tempor urna. Sed eros quam, dapibus sed ultrices eu, varius sollicitudin neque.',
    variations: [],
    category: 'Glasses',
  },
  {
    id: 20,
    img: img20,
    name: 'Bomba de Chocolate',
    price: 4.49,
    description:
      'Maecenas tincidunt velit suscipit faucibus gravida. Nullam congue, ipsum vel condimentum ultricies, nisl metus dignissim urna, vel ultricies ipsum dolor non enim. Cras a vulputate nibh, eu fermentum mi. Aliquam ac tellus feugiat, laoreet ex vel, tempor urna. Sed eros quam, dapibus sed ultrices eu, varius sollicitudin neque.',
    variations: [],
    category: 'Glasses',
  },
  {
    id: 21,
    img: img21,
    name: 'Whisky Jack Daniels Maça Verde',
    price: 144.99,
    description:
      'Maecenas tincidunt velit suscipit faucibus gravida. Nullam congue, ipsum vel condimentum ultricies, nisl metus dignissim urna, vel ultricies ipsum dolor non enim. Cras a vulputate nibh, eu fermentum mi. Aliquam ac tellus feugiat, laoreet ex vel, tempor urna. Sed eros quam, dapibus sed ultrices eu, varius sollicitudin neque.',
    variations: [],
    category: 'Glasses',
  },
  {
    id: 22,
    img: img22,
    name: 'Chocotone Lindt',
    price: 89.99,
    description:
      'Maecenas tincidunt velit suscipit faucibus gravida. Nullam congue, ipsum vel condimentum ultricies, nisl metus dignissim urna, vel ultricies ipsum dolor non enim. Cras a vulputate nibh, eu fermentum mi. Aliquam ac tellus feugiat, laoreet ex vel, tempor urna. Sed eros quam, dapibus sed ultrices eu, varius sollicitudin neque.',
    variations: [],
    category: 'Glasses',
  },
  {
    id: 23,
    img: img23,
    name: 'Batata Agata (Monalisa) Banca 1 Und',
    price: 1.49,
    description:
      'Maecenas tincidunt velit suscipit faucibus gravida. Nullam congue, ipsum vel condimentum ultricies, nisl metus dignissim urna, vel ultricies ipsum dolor non enim. Cras a vulputate nibh, eu fermentum mi. Aliquam ac tellus feugiat, laoreet ex vel, tempor urna. Sed eros quam, dapibus sed ultrices eu, varius sollicitudin neque.',
    variations: [],
    category: 'Glasses',
  },
  {
    id: 24,
    img: img24,
    name: 'Abrobinha Italiana 1 Und ',
    price: 1.69,
    description:
      'Maecenas tincidunt velit suscipit faucibus gravida. Nullam congue, ipsum vel condimentum ultricies, nisl metus dignissim urna, vel ultricies ipsum dolor non enim. Cras a vulputate nibh, eu fermentum mi. Aliquam ac tellus feugiat, laoreet ex vel, tempor urna. Sed eros quam, dapibus sed ultrices eu, varius sollicitudin neque.',
    variations: [],
    category: 'Glasses',
  },
  {
    id: 25,
    img: img25,
    name: 'Queijo Minas Canastra Artesanal Premium - 1Kg ',
    price: 64.99,
    description:
      'Maecenas tincidunt velit suscipit faucibus gravida. Nullam congue, ipsum vel condimentum ultricies, nisl metus dignissim urna, vel ultricies ipsum dolor non enim. Cras a vulputate nibh, eu fermentum mi. Aliquam ac tellus feugiat, laoreet ex vel, tempor urna. Sed eros quam, dapibus sed ultrices eu, varius sollicitudin neque.',
    variations: [],
    category: 'Glasses',
  },
  {
    id: 26,
    img: img26,
    name: 'Picanha Swift 1Kg',
    price: 74.99,
    description:
      'Maecenas tincidunt velit suscipit faucibus gravida. Nullam congue, ipsum vel condimentum ultricies, nisl metus dignissim urna, vel ultricies ipsum dolor non enim. Cras a vulputate nibh, eu fermentum mi. Aliquam ac tellus feugiat, laoreet ex vel, tempor urna. Sed eros quam, dapibus sed ultrices eu, varius sollicitudin neque.',
    variations: [],
    category: 'Glasses',
  },
  {
    id: 27,
    img: img27,
    name: 'Pão de alho baguete tradicional Swift 400g',
    price: 10.96,
    description:
      'Maecenas tincidunt velit suscipit faucibus gravida. Nullam congue, ipsum vel condimentum ultricies, nisl metus dignissim urna, vel ultricies ipsum dolor non enim. Cras a vulputate nibh, eu fermentum mi. Aliquam ac tellus feugiat, laoreet ex vel, tempor urna. Sed eros quam, dapibus sed ultrices eu, varius sollicitudin neque.',
    variations: [],
    category: 'Glasses',
  },
  {
    id: 28,
    img: img28,
    name: 'Escova De Dente Colgate Slim Soft Black 3 Unid',
    price: 29.96,
    description:
      'Maecenas tincidunt velit suscipit faucibus gravida. Nullam congue, ipsum vel condimentum ultricies, nisl metus dignissim urna, vel ultricies ipsum dolor non enim. Cras a vulputate nibh, eu fermentum mi. Aliquam ac tellus feugiat, laoreet ex vel, tempor urna. Sed eros quam, dapibus sed ultrices eu, varius sollicitudin neque.',
    variations: [],
    category: 'Glasses',
  },
  {
    id: 29,
    img: img29,
    name: 'Esponja Multiuso 3M Scotch Brite Dupla Face 10 Unidades',
    price: 12.50,
    description:
      'Maecenas tincidunt velit suscipit faucibus gravida. Nullam congue, ipsum vel condimentum ultricies, nisl metus dignissim urna, vel ultricies ipsum dolor non enim. Cras a vulputate nibh, eu fermentum mi. Aliquam ac tellus feugiat, laoreet ex vel, tempor urna. Sed eros quam, dapibus sed ultrices eu, varius sollicitudin neque.',
    variations: [],
    category: 'Glasses',
  },
  {
    id: 30,
    img: img30,
    name: 'Amaciante de Roupa Concentrado Cuidado Essencial Comfort Intense Refil 900ml',
    price: 13.39,
    description:
      'Maecenas tincidunt velit suscipit faucibus gravida. Nullam congue, ipsum vel condimentum ultricies, nisl metus dignissim urna, vel ultricies ipsum dolor non enim. Cras a vulputate nibh, eu fermentum mi. Aliquam ac tellus feugiat, laoreet ex vel, tempor urna. Sed eros quam, dapibus sed ultrices eu, varius sollicitudin neque.',
    variations: [],
    category: 'Glasses',
  },
  {
    id: 31,
    img: img31,
    name: 'Pizza Calabresa Sadia 460g',
    price: 15.79,
    description:
      'Maecenas tincidunt velit suscipit faucibus gravida. Nullam congue, ipsum vel condimentum ultricies, nisl metus dignissim urna, vel ultricies ipsum dolor non enim. Cras a vulputate nibh, eu fermentum mi. Aliquam ac tellus feugiat, laoreet ex vel, tempor urna. Sed eros quam, dapibus sed ultrices eu, varius sollicitudin neque.',
    variations: [],
    category: 'Glasses',
  },
  {
    id: 32,
    img: img32,
    name: 'Hambúrguer Bovino de Fraldinha Congelado 360g - Wessel',
    price: 29.90,
    description:
      'Maecenas tincidunt velit suscipit faucibus gravida. Nullam congue, ipsum vel condimentum ultricies, nisl metus dignissim urna, vel ultricies ipsum dolor non enim. Cras a vulputate nibh, eu fermentum mi. Aliquam ac tellus feugiat, laoreet ex vel, tempor urna. Sed eros quam, dapibus sed ultrices eu, varius sollicitudin neque.',
    variations: [],
    category: 'Glasses',
  },
];

export default products;
