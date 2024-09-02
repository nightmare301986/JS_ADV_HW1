const musicCollection = {
    // массив муз.коллекция
    albums: [
        {title: "How Much is The Fish", artist: "Scooter", year: 1994},
        {title: "Bohemian Rapsody", artist: "Queen", year: 1987},
        {title: "Черный альбом", artist: "Виктор Цой", year: 1990},
    ]
};
musicCollection[Symbol.iterator] = function customIter() {
    const array = this.albums; 
    let current = 0;
    return {
      next() {
        if (current < array.length) {
          return { value: array[current++], done: false };
        }
        return { value:undefined, done: true };
      }
    };
  };
for (const albums of musicCollection) {
  console.log(albums.title, "-" ,albums.artist,'(',albums.year,')');
};