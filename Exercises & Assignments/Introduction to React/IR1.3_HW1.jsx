import './App.css'

const WelcomeMessage = (props) => {
  return  <h1>Welcome, {props.userName}</h1>
}


const BookDetails = ({book}) => {
  return (
    <div>
      <h2>Book Details</h2>
      <p>Title: {bookData.title}</p>
      <p>Author: {bookData.author}</p>
      <p>Genre: {bookData.genre}</p>
    </div>
  )
}

const bookData = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  genre: "Classic",
};

const ArticleInformation = ({article}) => {
    return(
      <div>
        <h2>Article Information</h2>
        <p>Title: {article.title}</p>
        <p>Author: {article.author}</p>
        <p>Published Date: {article.publishedDate}</p>
    </div>
    )
}

const articleData = {
  title: "The Power of Habit",
  author: "Charles Duhigg",
  publishedDate: "March 1, 2024",
};

const ProductDetails = ({product}) => {
  return(
    <div>
      <h2>Product Details</h2>
      <p>Name: {product.name}</p>
      <p>Brand: {product.brand}</p>
      <p>Price: ${product.price}</p>
    </div>
  )
}

const productData = {
  name: "Smartphone",
  brand: "Samsung",
  price: 799.99,
};

const eventData = {
  title: "Tech Conference 2024",
  location: "San Francisco",
  date: "April 15, 2024",
};

const EventDetails = ({events}) => {
  return(
    <div>
      <h2>Event Details</h2>
      <p>Title: {events.title}</p>
      <p>Location: {events.location}</p>
      <p>Date: {events.date}</p>
    </div>
  )
}

const UserProfile = (props) => {
  return(
    <div>
        <h2>User Profile</h2>  
      <p>Name: Chris</p>
      <img src={props.img} alt={props.alt} />
    </div>
  )
}

export default function App() {
  return (
   <div>
     <WelcomeMessage userName="Emily" />

     <BookDetails book={bookData} />

     <ArticleInformation article={articleData}/>

     <ProductDetails product={productData}/>

     <EventDetails events={eventData} />

     <UserProfile  img="https://via.placeholder.com/150" alt="placehold"/>
   </div>
  )
}


