import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import learnit from '../assets/built-to-learn.png'
import financialIndependence from '../assets/financial-independence.png'
import gimmick from '../assets/gimme-yo-money.png'
import TiltThis from './Tilt'

const useStyles = makeStyles((theme) => ({}))

export default function Projects() {
    const classes = useStyles()
    // const photo = require('./assets/peru.png')
    return (
        <Grid
            container
            // spacing={3}
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Grid
                className="projects"
                container
                item
                xs={12}
                // spacing={6}
                direction="row" //when mobile switch to column
                justify="center"
                alignItems="center"
            >
                <Grid item xs={5}>
                    <TiltThis imageURL={learnit} />
                </Grid>
                <Grid item xs={5}>
                    <div>Featured Project</div>
                </Grid>
                <Grid item xs={5}>
                    <div>Hello</div>
                </Grid>
                <Grid item xs={5}>
                    <TiltThis imageURL={financialIndependence} />
                </Grid>
                <Grid item xs={5}>
                    <TiltThis imageURL={gimmick} />
                </Grid>
                <Grid item xs={5}>
                    <div>Hello</div>
                </Grid>
            </Grid>
        </Grid>
    )
}
