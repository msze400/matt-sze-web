import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({}))

export default function Intro() {
    // const classes = useStyles()
    return (
        <div>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={6}>
                    <div style={{ textAlign: 'left' }}>
                        <h4 className="SF-body" style={{ color: 'white' }}>
                            Hey my name is,
                        </h4>
                        <h1
                            className="SF-header"
                            style={{
                                fontSize: '4rem',
                                marginTop: '1rem',
                                marginBottom: '1rem',
                            }}
                        >
                            Matt Sze.
                        </h1>
                        <h1
                            className="SF-header"
                            style={{
                                fontSize: '3rem',
                                marginTop: '1rem',
                                marginBottom: '1rem',
                            }}
                        >
                            I enjoy solving problems.
                        </h1>
                        <h3 className="SF-header" style={{ color: 'white' }}>
                            I'm a New Jersey-based software engineer who
                            specializes in full-stack development. I am
                            classically trained as a chemical engineer, but have
                            found my niche in software development. Currently,
                            I'm working on the App Development Team at Lummus
                            Technology.
                        </h3>
                    </div>
                </Grid>
            </Grid>
            <Button variant="outlined" size="large" color="black">
                Get In Touch
            </Button>
        </div>
    )
}
