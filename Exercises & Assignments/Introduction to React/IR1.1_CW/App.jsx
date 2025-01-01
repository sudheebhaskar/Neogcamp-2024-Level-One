import './App.css'

const MyComponent = () => {
  return <h1>Hello, JSX!</h1>
}

const Greeting = () => {
  const name = "John"
  return <h1>Hello, {name}!</h1>
}

const LinkTag = () => {
  const url = "https://example.com"
  return <a href={url} target="_blank"> Visit Example Website </a>
}

const ImageTag = () => {
  const imageUrl = "https://via.placeholder.com/150"
  return (
    <div>
      <img src={imageUrl} alt="placeholder" />    
    </div>
  )
}

const ProfileDetails = () => {
  const details = {
    name: "John Doe",
    age: 25,
    email: "john@gmail.com",
    bio: "A passionate software developer"
  }

  return (
    <>
      <h2>Profile Details</h2>
      <p>Name: {details.name}</p>
      <p>Age: {details.age}</p>
      <p>Email: {details.email}</p>
      <p>Bio: {details.bio}</p>
    </>
  )
}

export default function App() {
  return (
   <div>
     {/*rendering JSX*/}

     <MyComponent />

     <Greeting />

     <LinkTag />

     <ImageTag />

     <ProfileDetails />
   </div>
  )
}

