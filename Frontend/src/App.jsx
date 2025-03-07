import { RoutesNav } from './RoutesNav.jsx'
import { Header } from './Header.jsx'
import { useState } from 'react';

const Home = () => <h1>Home</h1>

function App() {
    return (
        <div className='App'>
          <Header></Header>
          <RoutesNav/>
        </div>
    )
}

export default App

