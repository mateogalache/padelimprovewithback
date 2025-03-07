import { HomePage } from './HomePage.jsx'
import { SignUp } from './SignUp.jsx'
import { Routes, Route } from 'react-router-dom'

export function RoutesNav() {
    return (
        <div>
          <Routes>
             <Route path='/' element ={ <HomePage/> }/>
             <Route path='/signup' element ={ <SignUp/> }/>
          </Routes>
        </div>
    )
}