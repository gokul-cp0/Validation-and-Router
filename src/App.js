import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from "./Store/Login Page";
import SignUp from "./Store/Sign Up page";
import HomePage from "./Store/home page";

const App=()=>
{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<HomePage/>}/>
            </Routes>
        </Router>
    )
}
export default App;