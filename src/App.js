import { BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./Store/Login Page";
import SignUp from "./Store/Sign Up page";
import HomePage from "./Store/home page";

const App=()=>
{
    return(
        <BrowserRouter basename="/Validation-and-Router">
            <Routes>
                <Route path="/" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;