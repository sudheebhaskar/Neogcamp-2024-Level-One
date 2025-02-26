import './App.css'

const Cars = ({cars}) => {
  const carListing = cars.map(car => ( 
  <div key={car.id}>
      <h3>Name: {car.brand}</h3>
      <p>Price: ${car.price}</p>
  </div>
    ))
 return(
    <>
      <h2>Cars</h2>
      {carListing}
    </>
  )
}

const Hotels = ({hotels}) => {
  const hotelListing = hotels.map(hotel => (
    <div key={hotel.id}>
      <h3>Name: {hotel.name}</h3>
      <p>Cuisine: {hotel.cuisine}</p>
    </div>
    ))
  return(
    <>
      <h2>Hotels</h2>
      {hotelListing}
    </>
  )
}

const Podcasts = ({podcasts}) => {
  const podcastListing = podcasts.map(podcast =>(
    <div key={podcast.id}>
      <h3>Title: {podcast.title}</h3>
      <p>Host: {podcast.host}</p>
    </div>
    ))
  return(
    <>
      <h2>Podcasts</h2>
      {podcastListing}
    </>
  )
}

const Articles = ({articles}) => {
  const articleListing = articles.map(article =>(
    <div key={article.id}>
      <h3>Title: {article.title}</h3>
      <p>Content: {article.content}</p>
    </div>
    ))
  return(
    <>
      <h2>Articles</h2>
      {articleListing}
    </>
  )
}

const Movies = ({movies}) => {
  const movieListing = movies.map(movie =>(
    <div key={movie.id}>
      <h3>Title: {movie.title}</h3>
      <p>Director: {movie.director}</p>
    </div>
    ))
  return(
    <>
      <h2>Movies</h2>
      {movieListing}
    </>
  )
}


  
export default function App() {

  const cars = [
    {id:1, brand: "Toyota", price: 25000},
    {id:2, brand: "Honda", price: 30000},
    {id:3, brand: "Ford", price: 35000}
  ];

  const hotels = [
    {id:1, name: "Marriott", location: "New York"},
    {id:2, name: "Hilton", location: "Los Angeles"},
    {id:3, name:"Sheraton", location: "Chicago"}
  ];

  const podcasts = [
    {id:1, title: "Podcast 1", host: "Host 1"},
    {id:2, title: "Podcast 2", host: "Host 2"},
    {id:3, title: "Podcast 3", host: "Host 3"}
  ];

  const articles = [
    {id:1, title: "Article 1", host: "Content 1"},
    {id:2, title: "Article 2", host: "Content 2"},
    {id:3, title: "Article 3", host: "Content 3"}
  ];

  const movies= [
    {id:1, title: "Movie 1", director: "Director 1"},
    {id:2, title: "Movie 2", director: "Director 2"},
    {id:3, title: "Movie 3", director: "Director 3"}
  ];

  
  return (
    <main>
     <Cars cars={cars} />
      <hr />
     <Hotels hotels={hotels} />
      <hr />
      <Podcasts podcasts={podcasts} />
      <hr />
      <Articles articles={articles} />
      <hr />
      <Movies movies={movies} />
    </main>
  )
}
