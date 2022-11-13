import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainMenu from "./app/MainMenu";

function App() {
  return (
    <BrowserRouter>
      <div className="overflow-hidden">
        <Routes>
          <Route path="/" element={<MainMenu/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;