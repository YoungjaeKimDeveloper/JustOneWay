import { useState } from "react";

useState;

const App = () => {
  const [number, setnumber] = useState<number>(0);
  return <div>{number}</div>;
};

export default App;
