import './App.css'

const WelcomeBanner = (props) => {
  return <h1>Welcome to {props.appName} App</h1>
}

const recipeData = {
  title: "Chocolate Cake",
  author: "Baker Betty",
  rating: 4.7,
};

const RecipeDetails = ({recipe}) => {
  return(
    <div>
      <h2>Recipe Details</h2>
      <p>Title: {recipe.title}</p>
      <p>Author: {recipe.author}</p>
      <p>Rating: {recipe.rating}</p>
    </div>
  )
}

const movieData = {
  title: "The Godfather",
  director: "Francis Ford Coppola",
  releaseDate: "March 24, 1972",
};

const MovieInformation = ({movie}) => {
  return(
    <div>
      <h2>Movie Information</h2>
      <p>Title: {movie.title}</p>
      <p>Director: {movie.director}</p>
      <p>Release Date: {movie.releaseDate}</p>
    </div>
  )
}

const ProductFeatures = ({product}) => {
  return(
    <div>
      <h2>Product Features</h2>
      <p>Name: {product.name}</p>
      <p>Color: {product.color}</p>
      <p>Size: {product.size}</p>
    </div>
  )
}

const productData = {
  name: "Smartwatch",
  color: "Black",
  size: "Medium",
};

const UserProfileCard = (props) => {
  return(
    <div>
      <h2>User Profile</h2>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Role: {props.role}</p>
    </div>
  )
}


export default function App() {
  return (
   <div>
    <WelcomeBanner appName="My Recipe"/>
    <RecipeDetails recipe={recipeData} />
    <MovieInformation movie={movieData} />
    <ProductFeatures product={productData} />
    <UserProfileCard name="Alice" email="alice@example.com" role="Admin"/>
     
   </div>
  )
}



