import { Route, BrowserRouter as Router,Routes } from "react-router-dom";
import Login from '../src/pages/login'


function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/signup?" element={<Signup />} /> */}
      </Routes>
    </Router>
  )
}

export default App;
