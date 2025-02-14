import './App.css'

const UserStatus = ({ isOnline }) => {
  const statusMessage = isOnline ? "User is online" : "User is offline";

  return (
    <div>
      <h1>User Status</h1>
      <p>{statusMessage}</p>
    </div>
  );
};
const userIsOnline = true;

const DayOfWeek = ({ isWeekend }) => {
  const message = isWeekend ? "Enjoy your weekend!" : "Have a great day!";

  return (
    <div>
      <h1>Day of the Week</h1>
      <p>{message}</p>
    </div>
  );
};
const todayIsWeekend = true;

const ShoppingCart = ({ itemCount }) => {
  const message = itemCount > 0 ? `You have ${itemCount} items in your cart` : "Your cart is empty";

  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>{message}</p>
    </div>
  );
};
const cartItemCount = 3; 

const DiscountOffer = ({ isPrimeMember }) => {
  const message = isPrimeMember ? "You're eligible for a 20% discount" : "Become a prime member for exclusive discounts";

  return (
    <div>
      <h1>Discount Offer</h1>
      <p>{message}</p>
    </div>
  );
};

const primeMemberStatus = true;

const ShowError = ({ showError }) => {
  const message = showError ? "An error occurred. Please try again later." : "";

  return (
    <div>
      {showError && <p>{message}</p>}
    </div>
  );
};

const errorStatus = true; 

export default function App() {
  return (
    <main>
      <UserStatus isOnline={userIsOnline} />
      <DayOfWeek isWeekend={todayIsWeekend} />
      <ShoppingCart itemCount={cartItemCount} />
      <DiscountOffer isPrimeMember={primeMemberStatus} />
      <ShowError showError={errorStatus} />
    </main>
  )
}
