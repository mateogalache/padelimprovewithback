import { Header } from './Header.jsx'
import { useState } from 'react';

const NAVIGATION_EVENT = 'pushstate'

function navigate (href) {
    window.history.pushState({}, '',href)
    const navigationEvent = new Event(NAVIGATION_EVENT)
    window.dispatchEvent(navigationEvent)
}

function SignUp() {
    return(
        <>  
            <h1>Esto es el signup</h1>
        </>
    )
}

export function App() {
    const[currentPath, setCurrentPath] = useState(window.location.pathname)
    
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener(NAVIGATION_EVENT,onLocationChange)
        return () =>{
            window.removeEventListener(NAVIGATION_EVENT,onLocationChange)
        }
    }, [])

    return (
        <main>
            {currentPath == '/' && <Header/>}
            {currentPath == '/signup' && <SignUp/>}
        </main>
    )
}

