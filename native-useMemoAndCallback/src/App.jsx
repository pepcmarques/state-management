import { useState, useMemo, useCallback } from "react";

function SortedList({ list, sortFunc }) {
  console.log("Running Sorted List");

  const sortedList = useMemo(() => [...list].sort(sortFunc), [list, sortFunc]);
  return <div>{sortedList.join(", ")}</div>;
}

function App() {
  const [numbers] = useState([10, 20, 30]);

  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );

  const names = ["John", "Paul", "George", "Ringo"];

  const SortFunc = useCallback((a, b) => a.localeCompare(b) * -1, []);

  const [Counter1, setCounter1] = useState(0);
  const [Counter2, setCounter2] = useState(0);

  return (
    <>
      <div>
        Total: {total}
        <br />
        Names: {names.join(", ")}
        <br />
        <SortedList list={names} sortFunc={SortFunc} />
        <br />
        <button onClick={() => setCounter1(Counter1 + 1)}>
          Counter1 = {Counter1}
        </button>
        <button onClick={() => setCounter2(Counter2 + 1)}>
          Counter2 = {Counter2}
        </button>
        <br />
        Total = {Counter1 + Counter2}
      </div>
    </>
  );
}

export default App;
