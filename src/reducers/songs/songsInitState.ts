const pathToMp3 = require.context('../../assets/mp3', false, /\.mp3$/);
const pathToAlbumstPhotos = require.context('../../assets/images/albumPhotos', false, /\.png$/);
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
      albumPhotoPath: pathToAlbumstPhotos('./Ed_Sheeran_-_No._6_Collaborations_Project.png'),
      released: new Date(2019, 6, 12),
      artistId: 1,
    },
  ],
  songs: [
    {
      songId: 1,
      songName: 'Beautiful People',
      path: pathToMp3('./Splashing_Around.mp3'),
      songLength: '2:34',
      followers: 12523,
      albumId: 1,
    },
    {
      songId: 2,
      songName: 'South of the Border',
      path: pathToMp3('./A_Ghost_Town.mp3'),
      songLength: '3:12',
      followers: 33213,
      albumId: 1,
    },
    {
      songId: 3,
      songName: 'Cross Me',
      path: pathToMp3('./Beach_Disco.mp3'),
      songLength: '3:03',
      followers: 93284,
      albumId: 1,
    },
    {
      songId: 4,
      songName: 'Take Me Back to London',
      path: pathToMp3('./Central_Park.mp3'),
      songLength: '2:22',
      followers: 22113,
      albumId: 1,
    },
    {
      songId: 5,
      songName: 'Best Part of Me',
      path: pathToMp3('./Down_with_Paradise.mp3'),
      songLength: '3:33',
      followers: 82495,
      albumId: 1,
    },
    {
      songId: 6,
      songName: 'I Don\'t Care',
      path: pathToMp3('./Ice_Cream.mp3'),
      songLength: '2:02',
      followers: 13940,
      albumId: 1,
    },
    {
      songId: 7,
      songName: 'Antisocial',
      path: pathToMp3('./If_I_Had_a_Chicken.mp3'),
      songLength: '2:30',
      followers: 229324,
      albumId: 1,
    },
    {
      songId: 8,
      songName: 'Remember the Name',
      path: pathToMp3('./Jazz_Mango.mp3'),
      songLength: '2:11',
      followers: 123255,
      albumId: 1,
    },
    {
      songId: 9,
      songName: 'Feels',
      path: pathToMp3('./Joy_to_the_World.mp3'),
      songLength: '1:35',
      followers: 13548,
      albumId: 1,
    },
    {
      songId: 10,
      songName: 'Put It All on Me',
      path: pathToMp3('./November.mp3'),
      songLength: '2:08',
      followers: 35753,
      albumId: 1,
    },
    {
      songId: 11,
      songName: 'Nothing on You',
      path: pathToMp3('./Russian_Dance.mp3'),
      songLength: '2:24',
      followers: 78965,
      albumId: 1,
    },
    {
      songId: 12,
      songName: 'I Don\'t Want Your Money',
      path: pathToMp3('./Slowly_Until_We_Get_There.mp3'),
      songLength: '1:37',
      followers: 24384,
      albumId: 1,
    },
    {
      songId: 13,
      songName: '1000 Nights',
      path: pathToMp3('./Spy_Suite.mp3'),
      songLength: '2:26',
      followers: 33456,
      albumId: 1,
    },
    {
      songId: 14,
      songName: 'Way to Break My Heart',
      path: pathToMp3('./The_Plan_s_Working.mp3'),
      songLength: '1:42',
      followers: 93822,
      albumId: 1,
    },
    {
      songId: 15,
      songName: 'Blow',
      path: pathToMp3('./Waterfall.mp3'),
      songLength: '2:34',
      followers: 14433,
      albumId: 1,
    },
  ],
};

export default initState;
