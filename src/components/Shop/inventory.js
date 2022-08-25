const { v4: uuidv4 } = require('uuid');

const inventory = [
  {
    id: uuidv4(),
    name: 'Camp Lukewarm',
    artist: 'Lords child, Montell Fish',
    image:
      'https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2Fa32c4772671773907170a67788e8e5c2.600x600x1.jpg',
    genres: ['Christan', 'Alternative'],
    description:
      'The brush cherry (Syzygium buxifolium, Syzygium paniculatum or Eugenia paniculata, family: Myrtaceae - myrtle family) is an evergreen ornamental shrub or small tree. In their homeland, the brush cherry can grow up to 5m high.',
    price: 200,
    trackList: [
      {
        no: 1,
        title: 'War',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 2,
        title: 'Crumble',
        artists: 'Lords child, Montell Fish, SHOPIETHEHOMIE',
      },
      {
        no: 3,
        title: 'Peter',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 4,
        title: 'Glory',
        artists: 'Lords child, Montell Fish,Teddi Jones',
      },
      {
        no: 5,
        title: 'Im Going Higher',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 6,
        title: 'Heaven',
        artists: 'Lords child, Hulvey,Montell Fish',
      },
    ],
  },

  {
    id: uuidv4(),
    name: 'The Weatherman',
    artist: 'Miles Carter',
    image:
      'https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F182a4c1ff51e4dbb1d7cb64cf91092e3.1000x1000x1.jpg',
    genres: ['Christan', 'Alternative'],
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 200,
    trackList: [
      {
        no: 1,
        title: 'War',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 2,
        title: 'Crumble',
        artists: 'Lords child, Montell Fish, SHOPIETHEHOMIE',
      },
      {
        no: 3,
        title: 'Peter',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 4,
        title: 'Glory',
        artists: 'Lords child, Montell Fish,Teddi Jones',
      },
      {
        no: 5,
        title: 'Im Going Higher',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 6,
        title: 'Heaven',
        artists: 'Lords child, Hulvey,Montell Fish',
      },
    ],
  },

  {
    id: uuidv4(),
    name: ' Modus Vivendi',
    artist: '070 Shake',
    image:
      'https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F3a5cbdd2cade95de8a3af8e29c1d33f9.1000x1000x1.png',
    genres: ['Christan', 'Alternative'],
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 200,
    trackList: [
      {
        no: 1,
        title: 'War',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 2,
        title: 'Crumble',
        artists: 'Lords child, Montell Fish, SHOPIETHEHOMIE',
      },
      {
        no: 3,
        title: 'Peter',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 4,
        title: 'Glory',
        artists: 'Lords child, Montell Fish,Teddi Jones',
      },
      {
        no: 5,
        title: 'Im Going Higher',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 6,
        title: 'Heaven',
        artists: 'Lords child, Hulvey,Montell Fish',
      },
    ],
  },

  {
    id: uuidv4(),
    name: `
    Chandler Moore`,
    artist: 'Chandler Moore',
    image:
      'https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F4f0abb019448dce5523a4b43f64280dc.1000x1000x1.jpg',
    genres: ['Gospel', 'Christain'],
    description:
      'Released as a double album, Mr. Morale & The Big Steppers is Kendrick Lamar’s fifth and final studio album with Top Dawg Entertainment. ',
    price: 200,
    trackList: [
      {
        no: 1,
        title: 'War',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 2,
        title: 'Crumble',
        artists: 'Lords child, Montell Fish, SHOPIETHEHOMIE',
      },
      {
        no: 3,
        title: 'Peter',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 4,
        title: 'Glory',
        artists: 'Lords child, Montell Fish,Teddi Jones',
      },
      {
        no: 5,
        title: 'Im Going Higher',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 6,
        title: 'Heaven',
        artists: 'Lords child, Hulvey,Montell Fish',
      },
    ],
  },

  {
    id: uuidv4(),
    name: 'Amen',
    artist: 'Sondae',
    image: `https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2Febc31ee931f85dccdca0b24c2f18660f.1000x1000x1.jpg`,
    genres: ['Christan', 'Alternative'],
    description:
      'The Japanese apricot bonsai (Prunus mume) belongs to the few bonsai species that already flower at the end of winter (sometimes at the end of January). ',
    price: 150,
    trackList: [
      {
        no: 1,
        title: 'War',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 2,
        title: 'Crumble',
        artists: 'Lords child, Montell Fish, SHOPIETHEHOMIE',
      },
      {
        no: 3,
        title: 'Peter',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 4,
        title: 'Glory',
        artists: 'Lords child, Montell Fish,Teddi Jones',
      },
      {
        no: 5,
        title: 'Im Going Higher',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 6,
        title: 'Heaven',
        artists: 'Lords child, Hulvey,Montell Fish',
      },
    ],
  },

  {
    id: uuidv4(),
    name: 'JAMIE',
    artist: 'Montell Fish',
    image:
      'https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F56128e1044c2f7db18e5924abfe3a933.1000x1000x1.jpg',
    genres: ['Christan', 'Alternative'],
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 200,
    trackList: [
      {
        no: 1,
        title: 'War',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 2,
        title: 'Crumble',
        artists: 'Lords child, Montell Fish, SHOPIETHEHOMIE',
      },
      {
        no: 3,
        title: 'Peter',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 4,
        title: 'Glory',
        artists: 'Lords child, Montell Fish,Teddi Jones',
      },
      {
        no: 5,
        title: 'Im Going Higher',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 6,
        title: 'Heaven',
        artists: 'Lords child, Hulvey,Montell Fish',
      },
    ],
  },

  {
    id: uuidv4(),
    name: 'Nectar',
    artist: 'Joji',
    image:
      'https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F79c6343980b4513f2c46813301da0dec.1000x1000x1.png',
    genres: ['Indie', 'Alternative'],
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 200,
    trackList: [
      {
        no: 1,
        title: 'War',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 2,
        title: 'Crumble',
        artists: 'Lords child, Montell Fish, SHOPIETHEHOMIE',
      },
      {
        no: 3,
        title: 'Peter',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 4,
        title: 'Glory',
        artists: 'Lords child, Montell Fish,Teddi Jones',
      },
      {
        no: 5,
        title: 'Im Going Higher',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 6,
        title: 'Heaven',
        artists: 'Lords child, Hulvey,Montell Fish',
      },
    ],
  },

  {
    id: uuidv4(),
    name: 'LINGO STARR',
    artist: 'tobi lou',
    image:
      'https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F92db4207dfba42e7954ba85244868455.1000x1000x1.png',
    genres: ['Indie', 'Alternative', 'Pop'],
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 200,
    trackList: [
      {
        no: 1,
        title: 'War',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 2,
        title: 'Crumble',
        artists: 'Lords child, Montell Fish, SHOPIETHEHOMIE',
      },
      {
        no: 3,
        title: 'Peter',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 4,
        title: 'Glory',
        artists: 'Lords child, Montell Fish,Teddi Jones',
      },
      {
        no: 5,
        title: 'Im Going Higher',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 6,
        title: 'Heaven',
        artists: 'Lords child, Hulvey,Montell Fish',
      },
    ],
  },
];

export const Editors = [
  {
    id: uuidv4(),
    name: 'Stay With Me',
    image: '',
    genres: ['Christan', 'Alternative'],
    description:
      'its. The apple tree as a very good bonsai tree for beginners. Specially for bonsai suitable apple tree types are: Wild apple (Malus sylvestris) and different ornamental apple species (for example Malus toringo, Malus halliana, Malus cerasifera).',
    price: 200,
    trackList: [
      {
        no: 1,
        title: 'War',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 2,
        title: 'Crumble',
        artists: 'Lords child, Montell Fish, SHOPIETHEHOMIE',
      },
      {
        no: 3,
        title: 'Peter',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 4,
        title: 'Glory',
        artists: 'Lords child, Montell Fish,Teddi Jones',
      },
      {
        no: 5,
        title: 'Im Going Higher',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 6,
        title: 'Heaven',
        artists: 'Lords child, Hulvey,Montell Fish',
      },
    ],
  },

  {
    id: uuidv4(),
    name: 'Amen',
    image: '',
    genres: ['Christan', 'Alternative'],
    description:
      'The Japanese apricot bonsai (Prunus mume) belongs to the few bonsai species that already flower at the end of winter (sometimes at the end of January). ',
    price: 150,
    trackList: [
      {
        no: 1,
        title: 'War',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 2,
        title: 'Crumble',
        artists: 'Lords child, Montell Fish, SHOPIETHEHOMIE',
      },
      {
        no: 3,
        title: 'Peter',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 4,
        title: 'Glory',
        artists: 'Lords child, Montell Fish,Teddi Jones',
      },
      {
        no: 5,
        title: 'Im Going Higher',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 6,
        title: 'Heaven',
        artists: 'Lords child, Hulvey,Montell Fish',
      },
    ],
  },

  {
    id: uuidv4(),
    name: 'Camp Lukewarm',
    image: '',
    genres: ['Christan', 'Alternative'],
    description:
      'The brush cherry (Syzygium buxifolium, Syzygium paniculatum or Eugenia paniculata, family: Myrtaceae - myrtle family) is an evergreen ornamental shrub or small tree. In their homeland, the brush cherry can grow up to 5m high.',
    price: 200,
    trackList: [
      {
        no: 1,
        title: 'War',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 2,
        title: 'Crumble',
        artists: 'Lords child, Montell Fish, SHOPIETHEHOMIE',
      },
      {
        no: 3,
        title: 'Peter',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 4,
        title: 'Glory',
        artists: 'Lords child, Montell Fish,Teddi Jones',
      },
      {
        no: 5,
        title: 'Im Going Higher',
        artists: 'Lords child, Montell Fish',
      },
      {
        no: 6,
        title: 'Heaven',
        artists: 'Lords child, Hulvey,Montell Fish',
      },
    ],
  },
];

export default inventory;
