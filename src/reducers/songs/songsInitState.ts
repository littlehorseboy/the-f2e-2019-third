const pathToMp3 = require.context('../../assets/mp3', false, /\.mp3$/);
const pathToArtistPhotos = require.context('../../assets/images/artistPhotos', false, /\.png$/);

const initState = {
  artist: [
    {
      artistId: 1,
      artistName: 'Ed Sheeran',
      artistPhotoPath: pathToArtistPhotos('./artist_photo.png'),
      followers: 252134,
    },
    {
      artistId: 2,
      artistName: 'Tyson',
      artistPhotoPath: '',
      followers: 13579,
    },
  ],
  album: [
    {
      albumId: 1,
      albumName: 'No.6 Collaborations Project',
      albumPhotoPath: '',
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
      path: pathToMp3('./A_Ghost_Town.mp3'),
      albumId: 1,
    },
    {
      songId: 3,
      songName: 'Cross Me',
      path: pathToMp3('./Beach_Disco.mp3'),
      albumId: 1,
    },
    {
      songId: 4,
      songName: 'Take Me Back to London',
      path: pathToMp3('./Central_Park.mp3'),
      albumId: 1,
    },
    {
      songId: 5,
      songName: 'Best Part of Me',
      path: pathToMp3('./Down_with_Paradise.mp3'),
      albumId: 1,
    },
    {
      songId: 6,
      songName: 'I Don\'t Care',
      path: pathToMp3('./Ice_Cream.mp3'),
      albumId: 1,
    },
    {
      songId: 7,
      songName: 'Antisocial',
      path: pathToMp3('./If_I_Had_a_Chicken.mp3'),
      albumId: 1,
    },
    {
      songId: 8,
      songName: 'Remember the Name',
      path: pathToMp3('./Jazz_Mango.mp3'),
      albumId: 1,
    },
    {
      songId: 9,
      songName: 'Feels',
      path: pathToMp3('./Joy_to_the_World.mp3'),
      albumId: 1,
    },
    {
      songId: 10,
      songName: 'Put It All on Me',
      path: pathToMp3('./November.mp3'),
      albumId: 1,
    },
    {
      songId: 11,
      songName: 'Nothing on You',
      path: pathToMp3('./Russian_Dance.mp3'),
      albumId: 1,
    },
    {
      songId: 12,
      songName: 'I Don\'t Want Your Money',
      path: pathToMp3('./Slowly_Until_We_Get_There.mp3'),
      albumId: 1,
    },
    {
      songId: 13,
      songName: '1000 Nights',
      path: pathToMp3('./Spy_Suite.mp3'),
      albumId: 1,
    },
    {
      songId: 14,
      songName: 'Way to Break My Heart',
      path: pathToMp3('./The_Plan_s_Working.mp3'),
      albumId: 1,
    },
    {
      songId: 15,
      songName: 'Blow',
      path: pathToMp3('./Waterfall.mp3'),
      albumId: 1,
    },
  ],
};

export default initState;
