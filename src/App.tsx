import { useState } from "react";
import JSONdata from "./data/data.json";

function App() {
  const [data, setData] = useState(JSONdata);

  const handleFilter = () => {
    const filtered = data.filter((item) => item.id === 2);

    setData(filtered);
  };

  return (
    <main className=" text-violet font-bold">
      <button onClick={handleFilter}>Filter</button>
      <pre> {JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}

export default App;
