import Tilt from 'react-parallax-tilt'

export default function TiltThis({ imageURL, liveLink }) {
    return (
        <a href={liveLink} target="_blank" rel="noreferrer">
            <Tilt
                className="parallax-effect-glare-scale"
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.01}
                style={{
                    backgroundImage: `url(${imageURL})`,
                    height: '35vh',
                    width: '35vw',
                    backgroundSize: '100% 100%',
                    border: '2px black solid',
                }}
            >
                <div className="inner-element">
                    {/* <div>Learn More</div> */}
                </div>
            </Tilt>
        </a>
    )
}
