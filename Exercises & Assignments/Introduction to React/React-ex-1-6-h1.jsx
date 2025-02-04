import './App.css'

const GenerateGreeting = ({ name }) => {
  const getGreeting = (userName) => {
    return `Hello ${userName}!`;
  };

  const greetingMessage = getGreeting(name);
  return (
    <div>
      <h1>{greetingMessage}</h1>
    </div>
  );
};

const CalculateArea = ({ length, width }) => {
  const calculateArea = (length, width) => {
    return length * width;
  };

  const area = calculateArea(length, width);

  return (
    <div>
      <h1>Rectangle Details</h1>
      <p><strong>Length:</strong> {length} cm</p>
      <p><strong>Width:</strong> {width} cm</p>
      <p><strong>Area:</strong> {area} cm²</p>
    </div>
  );
};

const CalculatePerimeter = ({ length, width }) => {
  const calculatePerimeter = (length, width) => {
    return 2 * (length + width);
  };

  const perimeter = calculatePerimeter(length, width);

  return (
    <div>
      <h1>Rectangle Details</h1>
      <p><strong>Length:</strong> {length} cm</p>
      <p><strong>Width:</strong> {width} cm</p>
      <p><strong>Perimeter:</strong> {perimeter} cm</p>
    </div>
  );
};

const GenerateMessage = () => {
  const getMessage = () => {
    const hours = new Date().getHours();

    if (hours < 12) {
      return "Good Morning!";
    } else if (hours < 18) {
      return "Good Afternoon!";
    } else {
      return "Good Evening!";
    }
  };

  const message = getMessage();

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

const CalculateVolume = ({ radius, height }) => {
  const calculateVolume = (radius, height) => {
    return Math.PI * Math.pow(radius, 2) * height;
  };

  const volume = calculateVolume(radius, height);

  return (
    <div>
      <h1>Cylinder Details</h1>
      <p><strong>Radius:</strong> {radius} cm</p>
      <p><strong>Height:</strong> {height} cm</p>
      <p><strong>Volume:</strong> {volume.toFixed(2)} </p>
    </div>
  );
};

const userName = "John";
const length = 10;
const width = 5;
const radius = 3;
const height = 5;


export default function App() {
  return (
    <main>
      <GenerateGreeting name={userName} />
       <CalculateArea length={length} width={width} />
      <CalculatePerimeter length={length} width={width} />
      <GenerateMessage />
      <CalculateVolume radius={radius} height={height} />
    </main>
  )
}


