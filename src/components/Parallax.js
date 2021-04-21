import { Parallax } from 'react-parallax'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'
import CustomizedTimeline from './Timeline'

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
            <h1 style={{ color: 'white' }}>Hey, I'm Matt.</h1>
            <h2 style={{ color: 'white' }}>
                A classically trained chemical engineer turned software engineer
            </h2>
            <Card style={{ width: '25vw', height: '25vh' }}>
                <CardMedia
                    className={classes.media}
                    image="https://drive.google.com/uc?id=17hVFEUOtNRwb86V-djzzcjSK3hc03yFS"
                    title="Paella dish"
                />
            </Card>
            <CustomizedTimeline />

            <div style={{ height: '100vh', backgroundSize: '20%' }} />
        </Parallax>
    )
}
