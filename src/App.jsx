import { useState } from "react";
import FontSelector from "./components/FontSelector";
import FontDisplay from "./components/FontDisplay";
const App = () => {
  const [size, setSize] = useState(50);
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <FontSelector size={size} setSize={setSize}></FontSelector>
      <FontDisplay size={size}></FontDisplay>
    </div>
  );
};

export default App;
