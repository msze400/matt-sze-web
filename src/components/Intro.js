import { makeStyles, withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    introContents: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
    },
}))

const ColorButton = withStyles((theme) => ({
    root: {
        color: 'white',
        backgroundColor: '#0a192f',
        '&:hover': {
            backgroundColor: '#233554',
        },
    },
}))(Button)

export default function Intro() {
    const classes = useStyles()
    return (
        <div>
            <Grid
                container
                alignItems="center"
                align="center"
                justify="center"
                direction="column"
            >
                <Grid item xs={8} md={5}>
                    <div
                        style={{ textAlign: 'left', height: '94vh' }}
                        className={classes.introContents}
                    >
                        <h4 className="SF-body" style={{ color: 'white' }}>
                            Hey my name is,
                        </h4>
                        <h1 className="SF-header title">Matt Sze.</h1>
                        <h1 className="SF-header subheader">
                            I enjoy solving problems.
                        </h1>
                        <h3 className="SF-header me-description">
                            I'm a New Jersey-based software engineer who
                            specializes in full-stack development. I am
                            classically trained as a chemical engineer, but have
                            found my niche in software development. Currently,
                            I'm working as a Software Engineer at MIT Lincoln
                            Lab in its Artificial Intelligence and Algorithms
                            group.
                        </h3>

                        <ColorButton
                            variant="contained"
                            className={classes.margin}
                            style={{
                                maxWidth: '200px',
                                maxHeight: '40px',
                                minWidth: '180px',
                                minHeight: '40px',
                            }}
                            href="mailto:msze400@gmail.com"
                        >
                            Get In Touch
                        </ColorButton>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
