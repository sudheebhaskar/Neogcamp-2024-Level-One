import './App.css'

const Header = () => {
  return(
    <header>
      <h1>Welcome to Our Website.</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a> </li>
         <li><a href="/">About</a> </li> 
         <li> <a href="/">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

const ItemDetails = ({item}) => {
  return(
    <div>
      <h2>Smartphone</h2>
      <p>Category: {item.category}</p>
      <p>Price: ${item.price}</p>
      <p>Stock: {item.stock}</p>
    </div>
  )
}

const Footer = () => {
  return(
    <footer>
      <p> &copy; 2024 Company Name. All rights reserved.</p>
    </footer>
  )
}

export default function App() {
  const item = {
    name: "Smartphone",
    category: "Electronics",
    price: 799.99,
    stock: 100
  }
  return (
    <>
    <Header />
    <main>
      <ItemDetails item={item}/>
    </main>
      <Footer />
      </>
  )
}
