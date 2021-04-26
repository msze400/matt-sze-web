import './App.css'
import { ButtonAppBar } from './components'
import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'
import { Container } from './components'
import { CustomizedTimeline } from './components'
import { AboutMe } from './components'
import { Projects } from './components'
import { TiltThis } from './components'
import { Footer } from './components'
import { ContactParallax } from './components'
import { QuoteParallax } from './components'

function App() {
    return (
        <div className="App">
            <React.Fragment>
                <CssBaseline />
                <ButtonAppBar />
                <Container />
                <AboutMe />
                <CustomizedTimeline />
                <QuoteParallax />
                <Projects />
                <ContactParallax />
                <Footer />
            </React.Fragment>
        </div>
    )
}

export default App
