import { useState } from 'react'
import './App.css'
import Section from './components/section'

function App() {
    const [isDarkMode, setDarkMode] = useState(false)

    return (
        <div className="relative w-screen h-screen bg-[hsl(235,21%,11%)] flex items-center justify-center">
            <div className="absolute z-0 top-0 left-0 w-full h-[40%] bg-[url('./bg-desktop-dark.jpg')] bg-cover bg-center bg-no-repeat"></div>

            <Section></Section>
        </div>


    )
}

export default App
