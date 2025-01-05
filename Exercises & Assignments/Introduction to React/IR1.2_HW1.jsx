import './App.css'

const BookInformation = () => {
  const book = {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian Fiction",
    year: 1949,
 };

  return (
    <div>
      <h2>Book Information</h2>
      <h3>Title: {book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Year: {book.year}</p>
    </div>
  )
}

const BlogDetails = () => {
const blog = {
  title: "How to Start a Blog",
  author: "Jane Smith",
  date: "February 28, 2024",
  likes: 150,
};
return(
  <div>
    <h2>Blog Details</h2>
    <h3>Title: {blog.title}</h3>
    <p>Author: {blog.author}</p>
    <p>Date: {blog.date}</p>
    <p>Likes: {blog.likes}</p>
  </div>
)
}

const MovieProfile = () => {
  const movieProfile = {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    rating: 9.3,
  };

  return (
    <div>
      <h2>Movie Profile</h2>
      <h3>Title: {movieProfile.title}</h3>
      <p>Director: {movieProfile.director}</p>
      <p>Rating: {movieProfile.rating}</p>
    </div>
  )
}

const ProductDetails = () => {
  const product = {
    name: "Smartphone",
    brand: "Samsung",
    price: 799.99,
  };

  return (
    <div>
      <h2>Product Details</h2>
      <p>Name: {product.name}</p>
      <p>Brand: {product.brand}</p>
      <p>Price: ${product.price}</p>
    </div>
  )
}

const BookDetails = () => {
  const book = {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: {
      name: "Douglas Adams",
      nationality: "British"
    },
    publicationYear: 1979,
    genres: ["Science Fiction", "Comedy"]
  };

  return (
    <>
      <h2>Book Details</h2>
      <h3>{book.title}</h3>
      <p>Author: {book.author.name} (Nationality: {book.author.nationality})</p>
      <p>Publication Year: {book.year}</p>
      <p>Genres: {book.genres.join(", ")}</p>
    </>
  )

}

export default function App() {
  return (
    <div>
      <BookInformation />
      <BlogDetails />
      <MovieProfile />  
      <ProductDetails />
      <BookDetails />
    </div>
  )
}

