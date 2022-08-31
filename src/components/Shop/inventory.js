const { v4: uuidv4 } = require('uuid');

class Album {
  #quantity;
  constructor(name, artist, image, genres, description, price, trackList) {
    this.id = uuidv4();
    this.name = name;
    this.artist = artist;
    this.image = image;
    this.genres = genres;
    this.description = description;
    this.price = price;
    this.trackList = trackList;
    this.#quantity = 1;
  }

  get getQuantity() {
    return this.#quantity;
  }

  IncreaseQuantity() {
    this.#quantity++;
  }

  DecreaseQuantity() {
    if (this.#quantity > 0) {
      this.#quantity--;
    }
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
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
  15,
  [
    new Track(1, 'War', 'Lords child, Montell Fish'),
    new Track(2, 'Crumble', 'Lords child, Montell Fish, SHOPIETHEHOMIE'),
    new Track(3, 'Peter', 'Lords child, Montell Fish'),
    new Track(4, 'Glory', 'Lords child, Montell Fish,Teddi Jones'),
    new Track(5, 'Im Going Higher', 'Lords child, Montell Fish'),
    new Track(6, 'Heaven', 'Lords child, Hulvey,Montell Fish'),
  ]
);

const Mystery_Lady = new Album(
  'Studying Abroad',
  'Masego ',
  'https://t2.genius.com/unsafe/327x327/https%3A%2F%2Fimages.genius.com%2F902a529f025df69f461fbaa29032b0fa.1000x1000x1.png',
  ['R&B'],
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
  25,
  [
    new Track(1, 'Mystery Lady', 'Masego & Don Toliver'),
    new Track(2, 'Passport', 'Masego '),
    new Track(3, 'Silver Tongue Devil', 'Masego'),
    new Track(4, 'Polygamy', 'Masego '),
    new Track(5, 'Sides of Me', 'Masego '),
  ]
);

const DITTO = new Album(
  'DITTO',
  ' Aries',
  'https://t2.genius.com/unsafe/240x240/https%3A%2F%2Fimages.genius.com%2F1388fa2c879b2f5607a7737573d4478f.1000x1000x1.png',
  ['Indie Pop', 'Pop', 'Alternative'],
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
  5,
  [new Track(1, 'DITTO', 'Aries')]
);

const Legends_Never_Die = new Album(
  'Legends Never Die',
  'Juice WRLD',
  'https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F8830989510e788cf0c95721ec7706871.1000x1000x1.png',
  ['Rap', 'Pop Rap', 'Emo Rap'],
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
  50,
  [
    new Track(1, 'Anxiety (Intro)', 'Juice WRLD'),
    new Track(2, 'Conversations', 'Juice WRLD'),
    new Track(3, 'Titanic ', 'Juice WRLD'),
    new Track(4, 'Bad Energy ', 'Juice WRLD'),
    new Track(5, 'Righteous ', 'Juice WRLD'),
    new Track(6, 'Blood On My Jeansic ', 'Juice WRLD'),
  ]
);

const Colorado = new Album(
  'Colorado',
  'Kota the Friend',
  'https://t2.genius.com/unsafe/327x327/https%3A%2F%2Fimages.genius.com%2F56a9ebcb0a7740658f6a7c67b00668b6.500x500x1.jpg',
  ['Rap'],
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
  15,
  [new Track(1, 'Colorado', 'Kota the Friend')]
);

const CTV3 = new Album(
  'CTV3: Cool Tape ',
  'Jaden',
  'https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F86b455ccd09ab16c71e227440a0abb94.1000x1000x1.png',
  ['Bubblegum Pop', 'Alternative Pop'],
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
  25,
  [
    new Track(1, 'Circa 2015', 'Jaden'),
    new Track(2, 'Falling for You', 'Jaden, Justin Bieber'),
    new Track(3, 'Rainbow Bap', 'Jaden'),
    new Track(4, 'LUCY!', 'Jaden'),
    new Track(5, 'Everything', 'Jaden'),
  ]
);

const colours = new Album(
  'colours ',
  'Jessica Akin',
  'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/43/8f/9e/438f9eb5-efa6-2c92-3a9b-6784468ea6f0/artwork.jpg/400x400cc.jpg',
  ['Christan', 'Afro Pop'],
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
  10,
  [
    new Track(1, 'Colours/Hue Knew?', 'Jessica Akin'),
    new Track(2, 'Naked Flame', 'Jessica Akin'),
    new Track(3, 'Roots', 'Jessica Akin'),
    new Track(4, 'Blue', 'Jessica Akin'),
    new Track(5, 'Ultraviolet', 'Jessica Akin'),
  ]
);

const New_Woke_Deal = new Album(
  'New Woke Deal  ',
  'Asha Elia',
  'https://t2.genius.com/unsafe/269x0/https%3A%2F%2Fimages.genius.com%2F788a91649917597adbc89f2a958c309c.1000x1000x1.jpg',
  ['Christan', 'Afro Pop'],
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
  10,
  [
    new Track(1, 'New Woke Deal', 'Asha Elia'),
    new Track(2, 'Lullaby', 'Asha Elia'),
    new Track(3, 'Dreams ', 'Asha Elia'),
    new Track(4, 'Nights Like This ', 'Asha Elia'),
    new Track(5, 'Evidence ', 'Asha Elia'),
  ]
);

const inventory = [
  Camp_Lukewarm,
  Legends_Never_Die,
  Mystery_Lady,
  Colorado,
  DITTO,
  CTV3,
  colours,
  New_Woke_Deal,
];

export const Editors = [Camp_Lukewarm, Legends_Never_Die, CTV3, colours];
export default inventory;
