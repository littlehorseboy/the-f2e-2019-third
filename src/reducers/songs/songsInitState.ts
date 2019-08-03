const pathToMp3 = require.context('../../assets/mp3', false, /\.mp3$/);
const pathToArtistPhotos = require.context('../../assets/images/artistPhotos', false, /\.png$/);

const initState = {
  artist: [
    {
      artistId: 1,
      artistName: 'ED SHEERAN',
      artistPhotoPath: pathToArtistPhotos('./artist_photo.png'),
      followers: 252134,
    },
    {
      artistId: 2,
      artistName: 'TYSON',
      artistPhotoPath: '',
      followers: 13579,
    },
  ],
  album: [
    {
      albumId: 1,
      albumName: 'No.6 Collaborations Project',
      released: new Date(2019, 6, 12),
      artistId: 1,
    },
  ],
  songs: [
    {
      songId: 1,
      songName: 'Beautiful People',
      path: pathToMp3('./Splashing_Around.mp3'),
      albumId: 1,
    },
    {
      songId: 2,
      songName: 'South of the Border',
      path: '',
      albumId: 1,
    },
    {
      songId: 3,
      songName: 'Cross Me',
      path: '',
      albumId: 1,
    },
    {
      songId: 4,
      songName: 'Take Me Back to London',
      path: '',
      albumId: 1,
    },
    {
      songId: 5,
      songName: 'Best Part of Me',
      path: '',
      albumId: 1,
    },
    {
      songId: 6,
      songName: 'I Don\'t Care',
      path: '',
      albumId: 1,
    },
    {
      songId: 7,
      songName: 'Antisocial',
      path: '',
      albumId: 1,
    },
    {
      songId: 8,
      songName: 'Remember the Name',
      path: '',
      albumId: 1,
    },
    {
      songId: 9,
      songName: 'Feels',
      path: '',
      albumId: 1,
    },
    {
      songId: 10,
      songName: 'Put It All on Me',
      path: '',
      albumId: 1,
    },
    {
      songId: 11,
      songName: 'Nothing on You',
      path: '',
      albumId: 1,
    },
    {
      songId: 12,
      songName: 'I Don\'t Want Your Money',
      path: '',
      albumId: 1,
    },
    {
      songId: 13,
      songName: '1000 Nights',
      path: '',
      albumId: 1,
    },
    {
      songId: 14,
      songName: 'Way to Break My Heart',
      path: '',
      albumId: 1,
    },
    {
      songId: 15,
      songName: 'Blow',
      path: '',
      albumId: 1,
    },
  ],
};

export default initState;
