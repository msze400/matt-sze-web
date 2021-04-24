import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Paper from '@material-ui/core/Paper'
import matt from '../assets/matt-background.png'

const useStyles = makeStyles((theme) => ({
    // media: {
    //     height: 50,
    //     paddingTop: '56.25%', // 16:9
    // },
    // Card: {
    //     width: '10vw',
    //     margin: 'auto',
    // },
    // Media: {
    //     height: 550,
    // },
}))

export default function AboutMe() {
    const classes = useStyles()
    return (
        // <div style={{ height: '50vh', backgroundColor: 'blue' }}>
        <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
        >
            {/* <Paper className={classes.paper}>xs=12</Paper> */}
            <Grid item xs={3}>
                <h2>About Me</h2>
                <hr />
                <p style={{ textAlign: 'left' }}>
                    Hello! My name is Matt. My journey into coding started back
                    in high school, where I admittely did not take my AP
                    computer science course too seriously and received a 2 out
                    of 5 on the AP Test. <br />
                    <br />
                    After vowing to never get into coding as a profession, I
                    realized I would be forced to take a coding course called,
                    MATLAB, at Rutgers University during my freshman year. I
                    wound up acing the course (after learning from my mistakes
                    in highschool) and ironically became a teaching assistant
                    for the course!
                    <br />
                    <br />
                    Fast forward a couple of years, and I graduate with a
                    Chemical Engineering degree from Rutgers University, landing
                    a role as a Process/App Development Engineer at Lummus
                    Technology.
                    <br />
                    <br />
                    More recently I have become interested in expanding more
                    into tech and have graduated from Fullstack Academy's
                    6-month part-time Software Engineering Immersive Program.
                </p>
            </Grid>
            <Grid item xs={6}>
                <img
                    src="https://drive.google.com/uc?id=17hVFEUOtNRwb86V-djzzcjSK3hc03yFS"
                    // style={{ height: 'auto' }}
                    style={{
                        width: '75%',
                        height: 'auto',
                    }}
                />
            </Grid>
        </Grid>
        // </div>
    )
}
