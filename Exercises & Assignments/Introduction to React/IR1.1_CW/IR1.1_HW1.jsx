import './App.css'

const Heading = () => {
  return <h1>React Playground</h1>
}

const Greetings = () => {
  const name = "Alice Smith"
  return <h2>Hello, {name}!</h2>
}

const ExternalLink = () => {
  const url ="https://reactexamples.com"
  return (
    <div>
      <a href={url} target="_blank">Visit React Examples</a>
    </div>
  )
}

const Avatar = () => {
  const imageUrl = "https://via.placeholder.com/200"
  return(
      <div>
       <img src={imageUrl} alt="placeholder"/>
      </div>
    )
}

const UserInfo = () => {
  const user = {
    name: "Alice Smith",
    age: 28,
    email: "alice.smith@example.com",
    bio: "Passionate about React and building innovative web applications."
  };

  return (
    <div>
      <h3>User Information</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
    </div>
    
  )
}

export default function App() {
  return (
    <div>
      <Heading />
      <Greetings />
      <ExternalLink />
      <Avatar />
      <UserInfo />
    </div>
  )
}
