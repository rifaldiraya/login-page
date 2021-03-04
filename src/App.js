import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

//pages
import Login from "./pages/Login";
import ChangePassword from "./pages/ChangePassword";
import CreateAccount from "./pages/CreateAccount";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/changepassword" component={ChangePassword} />
        <Route path="/create" component={CreateAccount} />
      </BrowserRouter>
    </div>
  );
}

export default App;
