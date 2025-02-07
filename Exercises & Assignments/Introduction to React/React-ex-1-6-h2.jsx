import './App.css'

const ReverseArray = ({ array }) => {
  const reverseArray = (arr) => {
    return [...arr].reverse();
  };

  const reversedArray = reverseArray(array);

  return (
    <div>
      <h1>Original Array: {array.join(', ')}</h1>
      <h2>Reversed Array: {reversedArray.join(', ')}</h2>
    </div>
  );
};

 const originalArray = [1, 2, 3, 4, 5];

const CalculateBMI = ({ weight, height }) => {
  const calculateBMI = (weight, height) => {
    return weight / (height * height);
  };

  const bmi = calculateBMI(weight, height);

  return (
    <div>
      <h1>BMI Calculator</h1>
      <p><strong>Weight:</strong> {weight} kg</p>
      <p><strong>Height:</strong> {height} m</p>
      <p><strong>BMI:</strong> {bmi.toFixed(2)}</p>
    </div>
  );
};

const weight = 70; 
const height = 1.75; 

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Stay hungry, stay foolish. - Steve Jobs",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
];

const GenerateQuote = () => {
  const getRandomQuote = (quotesArray) => {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    return quotesArray[randomIndex];
  };

  const randomQuote = getRandomQuote(quotes);

  return (
    <div>
      <h1>Random Quote</h1>
      <p>{randomQuote}</p>
    </div>
  );
};

const GradeAnalyser = ({ score }) => {
  const analyseGrade = (score) => {
    let grade, message;

    if (score >= 90 && score <= 100) {
      grade = 'A';
      message = 'Excellent work!';
    } else if (score >= 80 && score <= 89) {
      grade = 'B';
      message = 'Good job!';
    } else if (score >= 70 && score <= 79) {
      grade = 'C';
      message = 'Not bad, keep it up!';
    } else if (score >= 60 && score <= 69) {
      grade = 'D';
      message = 'You passed, but aim higher next time.';
    } else {
      grade = 'F';
      message = "Sorry, you didn't pass. Keep working hard!";
    }

    return { grade, message };
  };

  const { grade, message } = analyseGrade(score);

  return (
    <div>
      <h1>Grade Analysis</h1>
      <p><strong>Score:</strong> {score}</p>
      <p><strong>Grade:</strong> {grade}</p>
      <p><strong>Message:</strong> {message}</p>
    </div>
  );
};

const score = 85;

const TemperatureFeedback = ({ temperature }) => {
  const getFeedback = (temp) => {
    if (temp < 0) {
      return "Brr, it's freezing!";
    } else if (temp >= 0 && temp <= 10) {
      return "It's quite cold, bundle up!";
    } else if (temp > 10 && temp <= 20) {
      return "The weather is cool and comfortable.";
    } else if (temp > 20 && temp <= 30) {
      return "It's a warm day!";
    } else {
      return "It's hot outside, stay cool!";
    }
  };

  const feedback = getFeedback(temperature);

  return (
    <div>
      <h1>Temperature Feedback</h1>
      <p><strong>Current Temperature:</strong> {temperature} degree celsius</p>
      <p><strong>Feedback:</strong> {feedback}</p>
    </div>
  );
};
const currentTemperature = 25;

export default function App() {
  return (
    <main>
      <ReverseArray array={originalArray} />
       <CalculateBMI weight={weight} height={height} />
      <GenerateQuote />
      <GradeAnalyser score={score} />
       <TemperatureFeedback temperature={currentTemperature} />
    </main>
  )
}
