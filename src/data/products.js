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

const products = [
  {
    id: 1,
    img: img1,
    name: 'Tru Storie Sunglasses',
    price: 179.69,
    description:
      'Praesent placerat leo odio. Duis id ornare lacus, quis bibendum diam. Maecenas placerat velit nec sodales consectetur. Phasellus finibus volutpat leo, nec pharetra elit facilisis cursus. Proin ut massa suscipit, vestibulum eros semper, porttitor nisi. Duis mattis ac ante ac fermentum. Integer quis mi et orci finibus sollicitudin in id quam.',
    variations: [],
    category: 'Suits',
  },
  {
    id: 2,
    img: img2,
    name: 'P.L.E.A.S.E. 3000',
    price: 70.83,
    description:
      'Nulla felis nisl, commodo sed facilisis ut, euismod sed nunc. Proin et libero gravida, ullamcorper erat nec, posuere ex. Nunc lobortis sit amet magna eu malesuada. Nam in egestas ex. Vivamus auctor nisi eu maximus fermentum.',
    variations: [],
    category: 'Glasses',
  },
  {
    id: 3,
    img: img3,
    name: 'The Blue Horn',
    price: 869.22,
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
    name: 'Patrick Green',
    price: 788.33,
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
    name: 'Lorenzo VM58 ',
    price: 160.18,
    description:
      'Maecenas eleifend, eros et ornare auctor, dolor ante mattis tortor, in cursus enim magna in lectus. Mauris id facilisis nunc. Etiam nisl nisi, posuere at bibendum id, facilisis id urna. Nullam tristique tempus tempus. Praesent blandit nisi in turpis fringilla, nec aliquam urna mollis. Integer et dignissim eros.',
    variations: [],
    category: 'Watches',
  },
  {
    id: 6,
    img: img6,
    name: 'Umbrella Look',
    price: 1120.3,
    description:
      'Vestibulum at erat feugiat ipsum facilisis mollis. In dictum non orci ut luctus. Curabitur auctor tellus vel est placerat, id semper diam tempus. Ut fermentum ligula vel pellentesque iaculis. Aliquam eget faucibus metus. Phasellus consectetur nisi at tellus auctor vulputate. ',
    variations: [],
    category: 'Full look',
  },
  {
    id: 7,
    img: img7,
    name: 'Another Marriage',
    price: 650.87,
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
    name: 'Tell People',
    price: 196.34,
    description:
      'Proin pulvinar porttitor lorem sed venenatis. Etiam sed tincidunt quam. Quisque ullamcorper odio erat. Aenean elementum tempus lectus eu pulvinar. Morbi ac gravida odio. Cras auctor, enim vitae venenatis finibus, libero lectus consectetur nulla, et finibus diam lectus in ante.',
    variations: [],
    category: 'Perfumes',
  },
  {
    id: 9,
    img: img9,
    name: 'Big Footer',
    price: 135.5,
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
    name: 'The French Blue',
    price: 791.13,
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
    name: 'Hi5 Black',
    price: 853.49,
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
    name: 'Weekend View',
    price: 74.29,
    description:
      'Maecenas tincidunt velit suscipit faucibus gravida. Nullam congue, ipsum vel condimentum ultricies, nisl metus dignissim urna, vel ultricies ipsum dolor non enim. Cras a vulputate nibh, eu fermentum mi. Aliquam ac tellus feugiat, laoreet ex vel, tempor urna. Sed eros quam, dapibus sed ultrices eu, varius sollicitudin neque.',
    variations: [],
    category: 'Glasses',
  },
];

export default products;
