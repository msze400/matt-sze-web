import { Parallax } from 'react-parallax'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Intro from './Intro'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}))

export default function Container() {
    const classes = useStyles()
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            // bgImage="https://drive.google.com/uc?id=17hVFEUOtNRwb86V-djzzcjSK3hc03yFS"
            // bgImage="https://drive.google.com/uc?id=18x3jU_XOpvP6ZdnL2mFySnSQaasHAeYN"
            bgImage="https://drive.google.com/uc?id=1yZBwny_Y54Vvyxj0qIT9mqYq2YX65VUC"
            bgImageSize="50% auto"
            strength={100}
        >
            <Intro />
            <Grid
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
            >
                {/* <Paper className={classes.paper}>xs=12</Paper> */}
                <Grid item xs={6}>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image="https://drive.google.com/uc?id=17hVFEUOtNRwb86V-djzzcjSK3hc03yFS"
                            title="Matt in Machu Picchu!"
                        />
                    </Card>
                </Grid>
            </Grid>
            <div style={{ height: '10vh', backgroundSize: '10%' }} />
        </Parallax>
    )
}
