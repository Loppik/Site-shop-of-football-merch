const env = 'prod';

const dev = {
  API_URL: 'http://localhost:8081/',
};

const prod = {
  API_URL: 'https://sportwear-api.herokuapp.com/',
};

const config = {
  dev,
  prod,
};

export default config[env];
