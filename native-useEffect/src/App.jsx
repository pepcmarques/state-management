import { useState, useEffect } from "react";

function App() {
  const [names, setNames] = useState([]);

  const [time, setTime] = useState(0);

  const Stopwatch = () => {
    useEffect(() => {
      const interval = setInterval(() => {
        setTime((t) => {
          return t + 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    return <div>Time: {time}</div>
  }
  

  useEffect(() => {
    fetch("./names.json")
      .then((response) => response.json())
      .then((data) => setNames(data));
  }, []);

  const [selectedNameDetails, setSelectedNameDetails] = useState(null);

  const onSelectedNameChange = (name) => {
    fetch(`./${name}.json`)
    .then((response) => response.json())
    .then((data) => setSelectedNameDetails(data));

  }

  return (
    <>
      <Stopwatch />
      <div>
        {names.map((name) => <button onClick={() => onSelectedNameChange(name)}>{name}</button>)}
      </div>
      <div>{JSON.stringify(selectedNameDetails)}</div>
    </>
  );
}

export default App;
