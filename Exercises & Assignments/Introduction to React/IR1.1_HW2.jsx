import './App.css'

const WelcomeMessage = () => {
  return <h1>Discover the World of JSX!</h1>
}

const actor="Tom Hardy";
const GreetActor = () => {
  return <h3>Welcome, {actor} fans!</h3>
}

const ExternalLink = () => {
  const text = "https://www.reactjs.org"
  return <a href={text} target="_blank">Explore React Documentation</a>
  }

const VideoPlayer = () => {
  const videoUrl = "https://www.example.com/video.mp4";
  return (
    <div>
      <video  width="750" height="500" controls >
      <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  )
}

const MovieDetails = () => {
  const movie = {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    rating: "PG-13",
    duration: "2h 22min"
  };

  return(
    <div>
      <h3>Movie Details</h3>
      <p><strong>Title:</strong> {movie.title}</p>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Year:</strong> {movie.year}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
      <p><strong>Duration:</strong> {movie.duration}</p>
    
    </div>
  )
}

export default function App() {
  return (
   <div>
    <WelcomeMessage />
     <GreetActor />
     <ExternalLink />
     <VideoPlayer />
     <MovieDetails />
   </div>
  )
}
