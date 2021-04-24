import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import learnit from '../assets/built-to-learn.png'
import financialIndependence from '../assets/financial-independence.png'
import gimmick from '../assets/gimme-yo-money.png'
import TiltThis from './Tilt'
import Paper from '@material-ui/core/Paper'
import GitHubIcon from '@material-ui/icons/GitHub'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import IconButton from '@material-ui/core/IconButton'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    projectImg: {
        display: 'flex',
        justifyContent: 'center',
    },

    rightSide: {
        textAlign: 'right',
    },
}))

export default function Projects() {
    const classes = useStyles()
    // const photo = require('./assets/peru.png')

    function LinkRow({ githubLink, liveLink }) {
        return (
            <React.Fragment>
                <div className={classes.rightSide}>
                    <IconButton>
                        <GitHubIcon
                            onClick={(event) =>
                                (window.location.href = githubLink)
                            }
                        />
                    </IconButton>
                    <IconButton>
                        <ExitToAppIcon
                            onClick={(event) =>
                                (window.location.href = liveLink)
                            }
                        />
                    </IconButton>
                </div>
            </React.Fragment>
        )
    }
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
                spacing={6}
                direction="row" //when mobile switch to columns
                justify="center"
                alignItems="center"
            >
                <Grid item xs={8}>
                    <h1>Some Things I've Built</h1>
                    <hr />
                </Grid>
                <Grid item xs={5} className={classes.projectImg}>
                    <TiltThis imageURL={learnit} />
                </Grid>
                <Grid item xs={5}>
                    <div>
                        <h3 className={classes.rightSide}>Featured Project</h3>
                        <h2 className={classes.rightSide}>Learn It</h2>
                        <Paper>
                            Learn It is a live stream teaching platform that
                            brings the best teachers on the web to anyone with a
                            computer. Learn It was created with the intention
                            that rock star teachers should be paid like super
                            stars.
                        </Paper>
                        <p className={classes.rightSide}>
                            PostgresSQL | Express | React | Node.js | WebRTC |
                            Amazon S3 | Stripe
                        </p>
                        <LinkRow
                            githubLink="https://github.com/Built-To-Learn/learn.it"
                            liveLink="https://built-to-learn.herokuapp.com/"
                        />
                    </div>
                </Grid>
                <Grid item xs={5} className={classes.projectImg}>
                    <TiltThis imageURL={financialIndependence} />
                </Grid>
                <Grid item xs={5}>
                    <div>
                        <h3 className={classes.rightSide}>Featured Project</h3>
                        <h2 className={classes.rightSide}>
                            Financial Freedom Dashboard
                        </h2>
                        <Paper>
                            The financial freedom dashboard calculates how much
                            money is required to invest on a monthly basis in
                            order to become financially independent.
                        </Paper>
                        <p className={classes.rightSide}>
                            Express | React | Node.js | Redux
                        </p>
                        <LinkRow
                            githubLink="https://github.com/msze400/Financial-Independence-App"
                            liveLink="https://finfreedom-dashboard.herokuapp.com"
                        />
                    </div>
                </Grid>
                <Grid item xs={5} className={classes.projectImg}>
                    <TiltThis imageURL={gimmick} />
                </Grid>
                <Grid item xs={5}>
                    <div>
                        <h3 className={classes.rightSide}>Featured Project</h3>
                        <h2 className={classes.rightSide}>
                            Gimme Yo Money Gimmicks
                        </h2>
                        <Paper>
                            Learn It is a live stream teaching platform that
                            brings the best teachers on the web to anyone with a
                            computer. Learn It was created with the intention
                            that rock star teachers should be paid like super
                            stars.
                        </Paper>
                        <p className={classes.rightSide}>
                            PostgresSQL | Express | React | Node.js | Material
                            UI
                        </p>
                        <LinkRow
                            githubLink="https://grace-shopper-gimmicks.herokuapp.com/home"
                            liveLink="https://github.com/Graceshopper-Gimmick/Grace-Shopper-Gimmick/tree/main/fs-app-template"
                        />
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}
