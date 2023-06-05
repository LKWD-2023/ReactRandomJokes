import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import { AuthContextComponent } from './AuthContext';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

import ViewAll from './pages/ViewAll';
import Logout from './pages/Logout';

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