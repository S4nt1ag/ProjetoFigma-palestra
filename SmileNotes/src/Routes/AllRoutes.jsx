import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/login";
import { useState } from "react";

export function AllRoutes() {
    const [user, setUser] = useState(null);
    
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={Home} path="/" >
                    <Home user={user} />
                </Route>
                <Route Component={Login} path="/login">
                    <Login setUser={setUser} />
                </Route>
            </Routes>
        </BrowserRouter >
    );
}