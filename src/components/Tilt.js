import Tilt from 'react-parallax-tilt'

export default function TiltThis({ imageURL, liveLink }) {
    return (
        <a href={liveLink} target="_blank" rel="noreferrer">
            <Tilt
                className="parallax-effect-glare-scale parallax-img"
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.01}
                style={{
                    backgroundImage: `url(${imageURL})`,
                }}
            >
                <div className="inner-element">
                    {/* <div>Learn More</div> */}
                </div>
            </Tilt>
        </a>
    )
}
