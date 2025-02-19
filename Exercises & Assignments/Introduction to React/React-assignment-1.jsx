import './App.css'

const ProductPage = ({ name, price, color, description, inStock }) => {
  const stockMessage = inStock ? "In Stock" : "Currently out of stock";

  return (
   <div>
     <h1>Product Page</h1>
     <h2>iPhone 15 Pro</h2>
     <img src="https://via.placeholder.com/150" alt="placeholder_image" />
      <p><strong>Price:</strong> ${price}</p>
      <p><strong>Color:</strong> {color}</p>
      <p><strong>Description:</strong>{description}</p>
      <p><strong>{stockMessage}</strong></p>
      <p>&copy; 2024 Apple Inc.</p>
     
    </div>
  );
};

const productDetails = {
  name: "iPhone 15 Pro",
  price: "499.99",
  color: "Midnight Green",
  description: "The latest flagship smartphone from Apple with cutting-edge features and stunning design.",
  inStock: true 
};

export default function App() {
  return (
    <main>
       <ProductPage {...productDetails} />
    </main>
  )
}
