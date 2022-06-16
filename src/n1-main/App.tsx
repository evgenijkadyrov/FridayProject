import React from 'react';
import './App.css';
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Login from "../n2-features/f1-auth/a1-login/Login";
import Tests from "../n2-features/f0-test/Tests";
import Profile from "./Profile";


function App() {
    return (
        <div className="App">

           {/* <Header/>
            <Main/>*/}
            <BrowserRouter>
            <Routes>
                <Route path={'/profile'}
                       element={<Profile/>}/>

                <Route path='/tests'

                       element={<Tests/>}/>
               {/* <Route path={'login/recover/newpassword'}
                       element={<NewPassword/>}/>
                <Route path={'login/recover'} element={<RecoverPassword/>}/>
                <Route path={'404'} element={<Ups/>}/>
                <Route path={'login/registration'} element={<Registration/>}/>*/}
                <Route path={'/login'} element={<Login/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
