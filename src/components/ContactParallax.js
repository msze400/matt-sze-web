import { Parallax } from 'react-parallax'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import iceland3 from '../assets/Iceland-3.JPG'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    contactButton: {
        width: '50px',
        // display: 'inline-fle
    },

    contactContents: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        '& h3, h1': {
            color: 'white',
        },
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

export default function ContactParallax() {
    const classes = useStyles()
    return (
        <Parallax
            blur={2}
            bgImage={iceland3}
            bgImageAlt="the cat"
            strength={-200}
            bgImageStyle={{ opacity: '.5' }}
            className="shade-parallax"
        >
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={5}>
                    {/* <div style={{ height: '15vh' }}> */}
                    <div
                        style={{ height: '50vh' }}
                        className={classes.contactContents}
                    >
                        <h1>Get In Touch</h1>
                        <h3>
                            I'm currently open to new opportunities, and my
                            inbox is always open. If you have a question or just
                            wanted to get in contact with me, I'll do my best to
                            get back to you.
                        </h3>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <ColorButton
                                variant="contained"
                                className={classes.margin}
                                style={{
                                    maxWidth: '200px',
                                    maxHeight: '40px',
                                    minWidth: '180px',
                                    minHeight: '40px',
                                }}
                            >
                                Say Hello
                            </ColorButton>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Parallax>
    )
}
