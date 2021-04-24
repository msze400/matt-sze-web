import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Paper from '@material-ui/core/Paper'
import matt from '../assets/matt-background.png'
import Tilt from 'react-parallax-tilt'
import learnit from '../assets/built-to-learn.png'
import { AutoInit } from 'materialize-css'

const useStyles = makeStyles((theme) => ({}))

export default function TiltThis({ imageURL }) {
    const classes = useStyles()
    // console.log(learnit)
    // console.log(imageURL)
    return (
        <Tilt
            className="parallax-effect-glare-scale"
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.01}
            style={{
                backgroundImage: `url(${imageURL})`,
                height: '25vh',
                width: '30vw',
                backgroundSize: '100% 100%',
                border: '2px black solid',
            }}
        >
            {/* <div className="inner-element">
                <div>Learn More</div>
            </div> */}
        </Tilt>
    )
}
