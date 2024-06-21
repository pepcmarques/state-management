import { use } from "react";

const res = fetch("/data.json").then((r) => r.json())

function App() {
  const data = use(res);

  return (
    <>
      <div>
        {JSON.stringify(data)}
      </div>
    </>
  )
}

export default App
