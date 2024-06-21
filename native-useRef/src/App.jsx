import { useRef, useState, useEffect } from "react";

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const idRef = useRef(1);

  const [names, setNames] = useState([
    { id: idRef.current++, name: "John" },
    { id: idRef.current++, name: "Jane" },
  ]);

  const onAddName = () => {
    setNames([...names, { id: idRef.current++, name: inputRef.current.value }]);
    inputRef.current.value = "";
  };

  return (
    <>
      <div>
        {names.map((person) => (
          <div key={person.id}>
            {person.id} - {person.name}
          </div>
        ))}
      </div>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={onAddName}>Insert Name</button>
      </div>
    </>
  );
}

export default App;
