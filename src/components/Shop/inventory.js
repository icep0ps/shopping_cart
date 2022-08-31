const { v4: uuidv4 } = require('uuid');

class Album {
  constructor(name, artist, image, genres, description, price, trackList) {
    this.id = uuidv4();
    this.name = name;
    this.artist = artist;
    this.image = image;
    this.genres = genres;
    this.description = description;
    this.price = price;
    this.trackList = trackList;
  }
}

class Track {
  constructor(no, title, artists) {
    this.no = no;
    this.title = title;
    this.artists = artists;
  }
}

const Camp_Lukewarm = new Album(
  'Camp Lukewarm',
  'Lords child, Montell Fish',
  'https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2Fa32c4772671773907170a67788e8e5c2.600x600x1.jpg',
  ['Christan', 'Alternative'],
  'The brush cherry (Syzygium buxifolium, Syzygium paniculatum or Eugenia paniculata, family: Myrtaceae - myrtle family) is an evergreen ornamental shrub or small tree. In their homeland, the brush cherry can grow up to 5m high.',
  200,
  [
    new Track(1, 'War', 'Lords child, Montell Fish'),
    new Track(2, 'Crumble', 'Lords child, Montell Fish, SHOPIETHEHOMIE'),
    new Track(3, 'Peter', 'Lords child, Montell Fish'),
    new Track(4, 'Glory', 'Lords child, Montell Fish,Teddi Jones'),
    new Track(5, 'Im Going Higher', 'Lords child, Montell Fish'),
    new Track(6, 'Heaven', 'Lords child, Hulvey,Montell Fish'),
  ]
);

const Modus_Vivendi = new Album(
  'Modus Vivendi',
  '070 Shake',
  'https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F3a5cbdd2cade95de8a3af8e29c1d33f9.1000x1000x1.png',
  ['Indie', 'Alternative'],
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  200,
  [
    new Track(1, 'War', 'Lords child, Montell Fish'),
    new Track(2, 'Crumble', 'Lords child, Montell Fish, SHOPIETHEHOMIE'),
    new Track(3, 'Peter', 'Lords child, Montell Fish'),
    new Track(4, 'Glory', 'Lords child, Montell Fish,Teddi Jones'),
    new Track(5, 'Im Going Higher', 'Lords child, Montell Fish'),
    new Track(6, 'Heaven', 'Lords child, Hulvey,Montell Fish'),
  ]
);

const Feelings = new Album(
  'Feelings',
  ' Chandler Moore',
  'https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F4f0abb019448dce5523a4b43f64280dc.1000x1000x1.jpg',
  ['Gospel', 'Christain'],
  'Released as a double album, Mr. Morale & The Big Steppers is Kendrick Lamar’s fifth and final studio album with Top Dawg Entertainment. ',
  200,
  [
    new Track(1, 'War', 'Lords child, Montell Fish'),
    new Track(2, 'Crumble', 'Lords child, Montell Fish, SHOPIETHEHOMIE'),
    new Track(3, 'Peter', 'Lords child, Montell Fish'),
    new Track(4, 'Glory', 'Lords child, Montell Fish,Teddi Jones'),
    new Track(5, 'Im Going Higher', 'Lords child, Montell Fish'),
    new Track(6, 'Heaven', 'Lords child, Hulvey,Montell Fish'),
  ]
);

const Amen = new Album(
  'Amen',
  'Sondae',
  'https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2Febc31ee931f85dccdca0b24c2f18660f.1000x1000x1.jpg',
  ['Christan', 'Alternative'],
  'The Japanese apricot bonsai (Prunus mume) belongs to the few bonsai species that already flower at the end of winter (sometimes at the end of January). ',
  150,
  [
    new Track(1, 'War', 'Lords child, Montell Fish'),
    new Track(2, 'Crumble', 'Lords child, Montell Fish, SHOPIETHEHOMIE'),
    new Track(3, 'Peter', 'Lords child, Montell Fish'),
    new Track(4, 'Glory', 'Lords child, Montell Fish,Teddi Jones'),
    new Track(5, 'Im Going Higher', 'Lords child, Montell Fish'),
    new Track(6, 'Heaven', 'Lords child, Hulvey,Montell Fish'),
  ]
);

const inventory = [Camp_Lukewarm, Amen, Feelings, Modus_Vivendi];

export const Editors = [Modus_Vivendi, Camp_Lukewarm, Amen];
export default inventory;
