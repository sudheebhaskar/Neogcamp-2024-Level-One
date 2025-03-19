import './App.css'

const TotalPrice = ({ smartphones }) => {
  const totalPrice = smartphones.reduce((total, smartphone) => total + smartphone.price, 0);

  return (
    <div>
      <h2>Total Price of Smartphones</h2>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

const smartphones = [
  { id: 1, brand: "Samsung", price: 799.99 },
  { id: 2, brand: "iPhone", price: 999.99 },
  { id: 3, brand: "Google Pixel", price: 899.99 },
];

const AverageRating = ({ hotels }) => {
  const totalRating = hotels.reduce((total, hotel) => total + hotel.rating, 0);
  const averageRating = totalRating / hotels.length;

  return (
    <div>
      <h2>Average Rating of Hotels</h2>
      <p>Average Rating: {averageRating.toFixed(1)}</p>
    </div>
  );
};

const hotels = [
  { id: 1, name: "Luxury Hotel", rating: 4.8 },
  { id: 2, name: "Budget Inn", rating: 3.5 },
  { id: 3, name: "Resort Paradise", rating: 4.2 },
];

const TotalListeners = ({ podcasts }) => {
  const totalListeners = podcasts.reduce((total, podcast) => total + podcast.listeners, 0);

  return (
    <div>
      <h2>Total Number of Podcast Listeners</h2>
      <p>Total Listeners: {totalListeners}</p>
    </div>
  );
};


const podcasts = [
  { id: 1, title: "Tech Talk", listeners: 5000 },
  { id: 2, title: "Science Insights", listeners: 3000 },
  { id: 3, title: "Comedy Hour", listeners: 7000 },
];

const tweets = [
  { id: 1, content: "Tweet 1", retweets: 20 },
  { id: 2, content: "Tweet 2", retweets: 15 },
  { id: 3, content: "Tweet 3", retweets: 30 },
];

const TotalRetweets = ({ tweets }) => {
  const totalRetweets = tweets.reduce((total, tweet) => total + tweet.retweets, 0);

  return (
    <div>
      <h2>Total Number of Retweets</h2>
      <p>Total Retweets: {totalRetweets}</p>
    </div>
  );
};

const articles = [
  { id: 1, title: "Article 1", content: "Content 1" },
  { id: 2, title: "Article 2", content: "Content 2" },
  { id: 3, title: "Article 3", content: "Content 3" },
];

const TotalWordCount = ({ articles }) => {
  const totalWordCount = articles.reduce((total, article) => total + article.content.split(' ').length, 0);

  return (
    <div>
      <h2>Total Word Count of Articles</h2>
      <p>Total Words: {totalWordCount}</p>
    </div>
  );
};

const posts = [
  { id: 1, title: "Post 1", content: "Content 1", likes: 10, user: "User1" },
  { id: 2, title: "Post 2", content: "Content 2", likes: 5, user: "User2" },
  { id: 3, title: "Post 3", content: "Content 3", likes: 7, user: "User1" },
];

const TotalLikes = ({ posts }) => {
  const user1Posts = posts.filter(post => post.user === 'User1');
  const totalLikes = user1Posts.reduce((total, post) => total + post.likes, 0);

  return (
    <div>
      <h2>Total Likes of User1</h2>
      <p>Total Likes: {totalLikes}</p>
    </div>
  );
};


export default function App() {
  return (
    <main>
      <TotalPrice smartphones={smartphones} />
       <AverageRating hotels={hotels} />
       <TotalListeners podcasts={podcasts} />
      <TotalRetweets tweets={tweets} />
      <TotalWordCount articles={articles} />
       <TotalLikes posts={posts} />
    </main>
  )
}
