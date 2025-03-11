import './App.css'

const CarList = ({ cars }) => {
  const filteredCars = cars.filter(car => car.price > 1500000 && car.price < 2000001);

  return (  
    <div>
      <h2>Cars in Price Range</h2>
      {filteredCars.length > 0 ? (
        filteredCars.map(car => (
          <div key={car.id}>
            <h3>Brand: {car.brand}</h3>
            <p>Price: ${car.price}</p>
          </div>
        ))
      ) : (
        <p>No cars available in this price range.</p>
      )}
    </div>
  );
};


const cars = [
  { id: 1, brand: "Toyota", price: 2000000 },
  { id: 2, brand: "Honda", price: 1800000 },
  { id: 3, brand: "Ford", price: 2500000 },
];

const CafeList = ({ cafes }) => {
  const coffeeShops = cafes.filter(cafe => cafe.type === 'Coffee Shop');

  return (
    <div>
      <h2>Coffee Shops</h2>
      {coffeeShops.length > 0 ? (
        coffeeShops.map(cafe => (
          <div key={cafe.id}>
            <h3>Name: {cafe.name}</h3>
            <p>Type: {cafe.type}</p>
          </div>
        ))
      ) : (
        <p>No coffee shops available.</p>
      )}
    </div>
  );
};


const cafes = [
  { id: 1, name: "Coffee House", type: "Coffee Shop" },
  { id: 2, name: "Java Beans", type: "Café" },
  { id: 3, name: "Brew & Bake", type: "Coffee Shop" },
];

const TutorialList = ({ tutorials }) => {
  const popularTutorials = tutorials.filter(tutorial => tutorial.views > 4000);

  return (
    <div>
      <h2>Popular Tutorials</h2>
      {popularTutorials.length > 0 ? (
        popularTutorials.map(tutorial => (
          <div key={tutorial.id}>
            <h3>Title: {tutorial.title}</h3>
            <p>Views: {tutorial.views}</p>
          </div>
        ))
      ) : (
        <p>No popular tutorials available.</p>
      )}
    </div>
  );
};

const tutorials = [
  { id: 1, title: "React Basics", views: 7000 },
  { id: 2, title: "JavaScript Fundamentals", views: 4000 },
  { id: 3, title: "Node.js Crash Course", views: 8000 },
];

const AlbumList = ({ albums }) => {
  const popAlbums = albums.filter(album => album.genre === 'Pop');

  return (
    <div>
      <h2>Pop Albums</h2>
      {popAlbums.length > 0 ? (
        popAlbums.map(album => (
          <div key={album.id}>
            <h3>Title: {album.title}</h3>
            <p>Genre: {album.genre}</p>
          </div>
        ))
      ) : (
        <p>No pop albums available.</p>
      )}
    </div>
  );
};


const albums = [
  { id: 1, title: "Pop Sensation", genre: "Pop" },
  { id: 2, title: "Rhythm and Blues", genre: "R&B" },
  { id: 3, title: "Classic Rock Hits", genre: "Rock" },
];

const EventList = ({ events }) => {
  const upcomingEvents = events.filter(event => event.status === 'Upcoming');

  return (
    <div>
      <h2>Upcoming Events</h2>
      {upcomingEvents.length > 0 ? (
        upcomingEvents.map(event => (
          <div key={event.id}>
            <h3>Name: {event.name}</h3>
            <p>Date: {event.date}</p>
            <p>Status: {event.status}</p>
          </div>
        ))
      ) : (
        <p>No upcoming events available.</p>
      )}
    </div>
  );
};


const events = [
  { id: 1, name: "Tech Conference", date: "2024-06-15", status: "Upcoming" },
  { id: 2, name: "Art Exhibition", date: "2024-07-20", status: "Upcoming" },
  { id: 3, name: "Music Festival", date: "2024-08-10", status: "Past" },
  { id: 4, name: "Dance Festival", date: "2023-09-12", status: "Past" },
];


const TaskList = ({ tasks }) => {
  const openTasks = tasks.filter(task => task.status === 'Open');

  return (
    <div>
      <h2>Open Tasks</h2>
      {openTasks.length > 0 ? (
        openTasks.map(task => (
          <div key={task.id}>
            <h3>Title: {task.title}</h3>
            <p>Description: {task.description}</p>
            <p>Status: {task.status}</p>
          </div>
        ))
      ) : (
        <p>No open tasks available.</p>
      )}
    </div>
  );
};


const tasks = [
  { id: 1, title: "Task 1", description: "Description 1", status: "Open" },
  { id: 2, title: "Task 2", description: "Description 2", status: "Closed" },
  { id: 3, title: "Task 3", description: "Description 3", status: "Open" },
  { id: 4, title: "Task 4", description: "Description 4", status: "Not Started" }
];

export default function App() {
  return (
    <main>
      <CarList cars={cars} />
      <CafeList cafes={cafes} />
      <TutorialList tutorials={tutorials} />
       <AlbumList albums={albums} />
       <EventList events={events} />
      <TaskList tasks={tasks} />
    </main>
  )
}
