import './App.css';

const Laptops = ({ laptops }) => {
  const laptopListing = laptops.map((laptop) => (
    <div key={laptop.id}>
      <h3>Brand: {laptop.brand}</h3>
      <p>Price: ${laptop.price}</p>
    </div>
  ));
  return (
    <>
      <h2>Laptops</h2>
      {laptopListing}
    </>
  );
};



const Tourist_Spots = ({ tourist_spots }) => {
  const tourist_spotsListing = tourist_spots.map((tourist_spot) => (
    <div key={tourist_spot.id}>
      <h3>Name: {tourist_spot.name}</h3>
      <p>Location: {tourist_spot.location}</p>
    </div>
  ));
  return (
    <>
      <h2>Tourist Spots</h2>
      {tourist_spotsListing}
    </>
  );
};

const PodcastEpisodes = ({ podcastepisodes }) => {
  const podcastepisodeListing = podcastepisodes.map((podcastepisode) => (
    <div key={podcastepisode.id}>
      <h3>Title: {podcastepisode.title}</h3>
      <p>Duration: {podcastepisode.duration}</p>
    </div>
  ));
  return (
    <>
      <h2>Podcast Episodes</h2>
      {podcastepisodeListing}
    </>
  );
};

const NewsArticles = ({ newsarticles }) => {
  const newsarticleListing = newsarticles.map((newsarticle) => (
    <div key={newsarticle.id}>
      <h3>Title: {newsarticle.title}</h3>
      <p>Description: {newsarticle.description}</p>
    </div>
  ));
  return (
    <>
      <h2>News Articles</h2>
      {newsarticleListing}
    </>
  );
};

const Games = ({ games }) => {
  const gameListing = games.map((game) => (
    <div key={game.id}>
      <h3>Title: {game.title}</h3>
      <p>Genre: {game.genre}</p>
    </div>
  ));
  return (
    <>
      <h2>Games</h2>
      {gameListing}
    </>
  );
};

export default function App() {
  const laptops = [
    { id: 1, brand: 'Dell', price: 999 },
    { id: 2, brand: 'HP', price: 899 },
    { id: 3, brand: 'Lenovo', price: 1099 },
  ];

  const tourist_spots = [
    { id: 1, name: 'Grand Canyon', location: 'Arizona, USA' },
    { id: 2, name: 'Eiffel Tower', location: 'Paris, France' },
    { id: 3, name: 'Great Wall of China', location: 'Beijing, China' },
  ];

  const podcastepisodes = [
    { id: 1, title: 'Episode 1', duration: '30 minutes' },
    { id: 2, title: 'Episode 2', duration: '45 minutes' },
    { id: 3, title: 'Podcast 3', duration: '60 minutes' },
  ];

  const newsarticles = [
    { id: 1, title: 'News 1', description: 'Description 1' },
    { id: 2, title: 'News 2', description: 'Description 2' },
    { id: 3, title: 'News 3', description: 'Description 3' },
  ];

  const games = [
    { id: 1, title: 'Game 1', genre: 'Action' },
    { id: 2, title: 'Game 2', genre: 'Adventure' },
    { id: 3, title: 'Game 3', genre: 'Strategy' },
  ];

  return (
    <main>
      <Laptops laptops={laptops} />
      <hr />
      <Tourist_Spots tourist_spots={tourist_spots} />
      <hr />
      <PodcastEpisodes podcastepisodes={podcastepisodes} />
      <hr />
      <NewsArticles newsarticles={newsarticles} />
      <hr />
      <Games games={games} />
    </main>
  );
}
