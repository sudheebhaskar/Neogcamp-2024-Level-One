import './App.css'

const LaptopList = ({ laptops }) => {
  const filteredLaptops = laptops.filter(laptop => laptop.price > 4999 && laptop.price < 15000);

  return (
    <div>
      <h2>Laptops in Price Range</h2>
      {filteredLaptops.length > 0 ? (
        filteredLaptops.map(laptop => (
          <div key={laptop.id}>
            <h3>Brand: {laptop.brand}</h3>
            <p>Price: ${laptop.price}</p>
          </div>
        ))
      ) : (
        <p>No laptops available in this price range.</p>
      )}
    </div>
  );
};

const laptops = [
  { id: 1, brand: "Dell", price: 8000 },
  { id: 2, brand: "HP", price: 7000 },
  { id: 3, brand: "Lenovo", price: 19000 },
];

const BookList = ({ books }) => {
  const fantasyBooks = books.filter(book => book.genre === 'Fantasy');

  return (
    <div>
      <h2>Fantasy Books</h2>
      {fantasyBooks.length > 0 ? (
        fantasyBooks.map(book => (
          <div key={book.id}>
            <h3>Title: {book.title}</h3>
            <p>Genre: {book.genre}</p>
          </div>
        ))
      ) : (
        <p>No fantasy books available.</p>
      )}
    </div>
  );
};


const books = [
{id: 1, title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy" },
{id: 2, title: "The Hobbit", genre: "Self-help" },
{id: 3, title: "Mistborn: The Final Empire", genre: "Fantasy" },
];

const PodcastList = ({ podcasts }) => {
  const longPodcasts = podcasts.filter(podcast => podcast.duration > 30);

  return (
    <div>
      <h2>Podcasts Longer Than 30 Minutes</h2>
      {longPodcasts.length > 0 ? (
        longPodcasts.map(podcast => (
          <div key={podcast.id}>
            <h3>Title: {podcast.title}</h3>
            <p>Duration: {podcast.duration} minutes</p>
          </div>
        ))
      ) : (
        <p>No podcasts available with duration more than 30 minutes.</p>
      )}
    </div>
  );
};

const podcasts = [
  { id: 1, title: "Tech Talk", duration: 45 },
  { id: 2, title: "Business Insights", duration: 25 },
  { id: 3, title: "Science Hour", duration: 60 },
];

const MovieList = ({ movies }) => {
  const actionMovies = movies.filter(movie => movie.genre === 'Action');

  return (
    <div>
      <h2>Action Movies</h2>
      {actionMovies.length > 0 ? (
        actionMovies.map(movie => (
          <div key={movie.id}>
            <h3>Title: {movie.title}</h3>
            <p>Genre: {movie.genre}</p>
          </div>
        ))
      ) : (
        <p>No action movies available.</p>
      )}
    </div>
  );
};

const movies = [
  { id: 1, title: "Mission Impossible", genre: "Action" },
  { id: 2, title: "Die Hard", genre: "Action" },
  { id: 3, title: "The Avengers", genre: "Adventure" },
];

const jobs = [
  { id: 1, title: "Software Engineer", type: "Full-time" },
  { id: 2, title: "Marketing Manager", type: "Part-time" },
  { id: 3, title: "Data Analyst", type: "Full-time" },
];

const JobList = ({ jobs }) => {
  const fullTimeJobs = jobs.filter(job => job.type === 'Full-time');

  return (
    <div>
      <h2>Full-time Jobs</h2>
      {fullTimeJobs.length > 0 ? (
        fullTimeJobs.map(job => (
          <div key={job.id}>
            <h3>Title: {job.title}</h3>
            <p>Type: {job.type}</p>
          </div>
        ))
      ) : (
        <p>No full-time jobs available.</p>
      )}
    </div>
  );
};

const Playlist = ({ songs }) => {
  const artist1Songs = songs.filter(song => song.artist === 'Artist 1');

  return (
    <div>
      <h2>Playlist of Artist 1</h2>
      {artist1Songs.length > 0 ? (
        artist1Songs.map(song => (
          <div key={song.id}>
            <h3>Title: {song.title}</h3>
            <p>Artist: {song.artist}</p>
          </div>
        ))
      ) : (
        <p>No songs available for Artist 1.</p>
      )}
    </div>
  );
};


const songs = [
  { id: 1, title: "Song 1", artist: "Artist 1" },
  { id: 2, title: "Song 2", artist: "Artist 2" },
  { id: 3, title: "Song 3", artist: "Artist 1" },
];


export default function App() {
  return (
    <main>
      <LaptopList laptops={laptops} />
      <BookList books={books} />
      <PodcastList podcasts={podcasts} />
      <MovieList movies={movies} />
       <JobList jobs={jobs} />
       <Playlist songs={songs} />
    </main>
  )
}
