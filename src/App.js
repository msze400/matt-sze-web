import './App.css'
import { ButtonAppBar } from './components'
import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'
import { Container } from './components'

function App() {
    return (
        <div className="App">
            <React.Fragment>
                <CssBaseline />
                <ButtonAppBar />
                <Container />
                <header className="App-header">
                    <p>Hey, I'm Matt.</p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </React.Fragment>
        </div>
    )
}

export default App
