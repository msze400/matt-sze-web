import { Parallax } from 'react-parallax'
import Grid from '@material-ui/core/Grid'
import iceland5 from '../assets/Iceland-5.JPG'

export default function QuoteParallax() {
    // const classes = useStyles()
    return (
        <Parallax
            blur={2}
            bgImage={iceland5}
            strength={-200}
            bgImageStyle={{ opacity: '.5' }}
            className="shade-parallax"
        >
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={8}>
                    {/* <div style={{ height: '15vh' }}> */}
                    <h2 style={{ color: 'white' }}>
                        {/* <Typography> */}
                        "The world is full of f*cking why. You tell people
                        something they ask you 'why?' There's so much f*cking
                        why. You go out and find why not. Surround yourself with
                        why not. Find people who make your dreams come true and
                        you do the same for them."
                        <br /> - Kevin Smith
                        {/* </Typography> */}
                    </h2>
                    {/* </div> */}
                </Grid>
            </Grid>
        </Parallax>
    )
}
