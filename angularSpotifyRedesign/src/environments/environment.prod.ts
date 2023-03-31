export const environment = {
  production: true
};

export const SpotifyConfiguratin = {
  clientId:'574d3b231c964c3d811127671de153fb',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/login/',
  scopes: [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "user-library-read",
    "playlist-read-private",
    "playlist-read-collaborative",
  ]
  };
