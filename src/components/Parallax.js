import { Parallax } from 'react-parallax'
import Intro from './Intro'
import iceland7 from '../assets/Iceland-7.JPG'

export default function Container() {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={iceland7}
            bgImageSize="50% auto"
            strength={100}
            className="parallax shade-parallax"
            bgImageStyle={{ opacity: '.3' }}
        >
            <Intro />
        </Parallax>
    )
}
