import React from 'react';
import './App.css';
import { Route, Routes} from "react-router-dom";
import Login from "../n2-features/f1-auth/a1-login/Login";
import Tests from "../n2-features/f0-test/Tests";
import Profile from "./m1-ui/Profile/Profile";
import NewPassword from "../n2-features/f1-auth/a3-recover/NewPassword";
import RecoverPassword from "../n2-features/f1-auth/a3-recover/RecoverPassword";
import Registration from "../n2-features/f1-auth/a2-register/Registration";
import Ups from "../common/c4-Ups/Ups";


function App() {
    return (
        <div className="App">

            {/* <Header/>
            <Main/>*/}

                <Routes>
                    <Route path={'/FridayProject//'} element={<Profile/>}/>
                    <Route path={'FridayProject/tests'} element={<Tests/>}/>
                    <Route path={'FridayProject/login/recover/newpassword'} element={<NewPassword/>}/>
                    <Route path={'FridayProject/login/recover'} element={<RecoverPassword/>}/>
                    <Route path={'FridayProject/*'} element={<Ups/>}/>
                    <Route path={'FridayProject/login/registration'} element={<Registration/>}/>
                    <Route path={'FridayProject/login'} element={<Login/>}/>
                </Routes>

        </div>
    );
}

export default App;
