import './App.css'

const ProductList = ({ products }) => {
  const totalPrice = products.reduce((acc, curr) => acc + curr.price, 0)

  return(
    <div>
      <h2>Total Price of Products</h2>
      <p>${totalPrice}</p>
    </div>
  )
}

const Restaurants = ({restaurants}) => {
  const totalRating = restaurants.reduce((acc, curr) => acc + curr.rating, 0)

  const averageRating = totalRating/restaurants.length;

  return(
    <div>
      <h2>Total Rating of Restaurants</h2>
      <p>{totalRating}</p>

      <h2>Average Rating of Restaurants</h2>
      <p>{averageRating.toFixed(2)}</p>
    </div>
  )
}

const Videos = ({videos}) => {
  const totalViews = videos.reduce((acc, curr) => acc + curr.views, 0);
  return(
    <div>
      <h2>Total Views of Videos</h2>
      <p>{totalViews}</p>
    </div>
  )
}

export default function App() {

  const products = [
    {id:1, name: "Product 1", price: 19.99},
    {id:2, name: "Product 2", price: 29.99},
    {id:3, name: "Product 3", price: 39.99}
  ];

  const restaurants = [
    {id:1, name: "Restaurant 1", cuisine: "Italian", rating: 5},
    {id:2, name: "Restaurant 2", cuisine: "Mexican", rating: 3.5},
    {id:3, name: "Restaurant 3", cuisine: "Chinese", rating: 2.7}
  ];

  const videos = [
    {id: 1, title: "Video 1", views: 1000},
    {id:2, title: "Video 2", views: 2000},
    {id:3, title: "Video 3", views: 3000}
  ];

return (
    <main>
      <ProductList products={products} />
      <hr />
      <Restaurants restaurants={restaurants} />
      <hr />
      <Videos videos={videos} />
    </main>
  )
}
