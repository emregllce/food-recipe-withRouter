import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./components/recipe/Main"
import About from './components/about/About';
import Details from './components/details/Details';
import Login from './components/login/Login';
import NotFound from './components/header/NotFound';
import RecipeCard from './components/recipe/RecipeCard';
import Github from './components/github/Github';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/main" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/github" element={<Github />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/details" element={<RecipeCard />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        </BrowserRouter>
        {/* <RecipeCard /> */}
    </div>
  );
}

export default App;

