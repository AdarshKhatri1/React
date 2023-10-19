
import {Routes,Route} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Setting from './Pages/Setting'
import Home from './Pages/Home'
import Private_route from './Private_route'

export default function All_routes(){

    return (
        <div>
            Welcome to All_routes
            <div>

<Routes>
    <Route path='/' element={<Home />} />
    <Route path='/dash' element={
        <Private_route >
            <Dashboard />
        </Private_route>
    } />
    <Route path='/login' element={<Login />} />
    <Route path='/setting' element={<Setting />} />
</Routes>

            </div>
        </div>
    )
}