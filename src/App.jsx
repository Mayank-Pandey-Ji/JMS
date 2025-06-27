import "./App.css"
import Header from "./components/Header"
import HeroPage from "./pages/HeroPage"
import OnlineCohort from "./pages/OnlineCohort"
import Thoughts from "./pages/Thoughts"
function App() {
  return (
    <div>
      <Header />
      <HeroPage />
      <Thoughts />
      <OnlineCohort />
    </div>
  )
}

export default App
