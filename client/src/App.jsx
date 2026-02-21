import { Route, Routes } from "react-router";
import ComponentsLibrary from "./pages/ComponentsLibrary";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/component-library" element={<ComponentsLibrary />} />
      </Routes>
    </div>
  );
};

export default App;
