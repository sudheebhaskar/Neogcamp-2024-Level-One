import './App.css'

const CreditCardPayment = ({ amount }) => {
  const message = amount > 1000 
    ? "Please use your credit card for payment." 
    : "You can pay using cash or debit card.";

  return (
    <div>
      <h1>Payment Method</h1>
      <p>{message}</p>
    </div>
  );
};
const paymentAmount = 1200;

const ProductAvailability = ({ inStock }) => {
  const message = inStock 
    ? "The product is available. Order now!" 
    : "Sorry, the product is currently out of stock.";

  return (
    <div>
      <h1>Product Availability</h1>
      <p>{message}</p>
    </div>
  );
};

const productInStock = true;

const TrafficLight = ({ color }) => {
  const message = color.toLowerCase() === 'red' 
    ? "Stop! The light is red." 
    : "Go! The light is green.";

  return (
    <div>
      <h1>Traffic Light</h1>
      <p>{message}</p>
    </div>
  );
};

const currentColor = 'red';

const MembershipStatus = ({ isPremium }) => {
  const message = isPremium 
    ? "Welcome, Premium Member!" 
    : "Upgrade to premium for exclusive benefits.";

  return (
    <div>
      <h1>Membership Status</h1>
      <p>{message}</p>
    </div>
  );
};
const premiumMembership = true; 

const WeatherReport = ({ isSunny }) => {
  const message = isSunny 
    ? "It is sunny today." 
    : "It is not sunny today.";

  return (
    <div>
      <h1>Weather Report</h1>
      <p>{message}</p>
    </div>
  );
};
const todayIsSunny = true; 



export default function App() {
  return (
    <main>
       <CreditCardPayment amount={paymentAmount} />
        <ProductAvailability inStock={productInStock} />
       <TrafficLight color={currentColor} />
       <MembershipStatus isPremium={premiumMembership} />
      <WeatherReport isSunny={todayIsSunny} />
    </main>
  )
}
