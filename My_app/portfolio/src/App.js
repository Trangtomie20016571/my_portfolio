import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Page/Layout";
import Home from "./Page/Home/Home";
function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Layout/>}>
              <Route index element = {<Home/>}>

              </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
