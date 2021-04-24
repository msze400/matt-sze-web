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
            spacing={3}
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={6}>
                <h2>Some Things I've Built</h2>
                <hr />
                {/* <div> */}
                <TiltThis />
                <div>Hello</div>
            </Grid>
            <Grid item xs={6}>
                <img
                    src={financialIndependence}
                    style={{
                        width: '75%',
                        height: 'auto',
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <img
                    src={gimmick}
                    style={{
                        width: '75%',
                        height: 'auto',
                    }}
                />
            </Grid>
        </Grid>
    )
}
