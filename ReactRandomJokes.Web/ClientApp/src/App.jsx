import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import { AuthContextComponent } from './AuthContext';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

import ViewAll from './Pages/ViewAll';
import Logout from './Pages/Logout';

const App = () => {
    return (
        <AuthContextComponent>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/signup' element={<Signup />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/logout' element={<Logout />} />
                    <Route exact path='/viewall' element={<ViewAll />} />
                </Routes>
            </Layout>
        </AuthContextComponent>

    );
}

export default App;