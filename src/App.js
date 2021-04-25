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

function App() {
    return (
        <div className="App">
            <React.Fragment>
                <CssBaseline />
                <ButtonAppBar />
                <Container />
                <div style={{ height: '10vh', backgroundSize: '10%' }} />
                <AboutMe />
                <CustomizedTimeline />
                <Projects />
                <Footer />
            </React.Fragment>
        </div>
    )
}

export default App
