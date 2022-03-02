import React from "react";
import './App.css';
import Contacts from './components/Contacts';
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import Profile from "./Profile";


function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        {isAuthenticated ?  <LogoutButton/> : <LoginButton />}
        <Profile/>
        <Contacts />
      </div>
    </div>
  );
}

export default App;
