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

    projectDesc: {
        backgroundColor: 'rgb(35, 53, 84)',
        color: '#ccd6f6',
        textAlign: 'left',
        padding: '1rem',
    },

    icon: {
        color: '#ccd6f6',
    },

    featuredProject: {
        color: '#64ffda',
        textAlign: 'right',
        fontFamily: 'Space Mono',
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
                            className={classes.icon}
                        />
                    </IconButton>
                    <IconButton>
                        <ExitToAppIcon
                            onClick={(event) =>
                                (window.location.href = liveLink)
                            }
                            className={classes.icon}
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
            className="primary-background"
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
                    <h1>Things I've Built</h1>
                    <hr />
                </Grid>
                <Grid item xs={5} className={classes.projectImg}>
                    <TiltThis
                        imageURL={learnit}
                        liveLink="https://built-to-learn.herokuapp.com/"
                    />
                </Grid>
                <Grid item xs={5}>
                    <div>
                        <h3 className={classes.featuredProject}>
                            Featured Project
                        </h3>
                        <h2 className={classes.rightSide}>Learn It</h2>
                        <Paper className={classes.projectDesc}>
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
                    <TiltThis
                        imageURL={financialIndependence}
                        liveLink="https://finfreedom-dashboard.herokuapp.com"
                    />
                </Grid>
                <Grid item xs={5}>
                    <div>
                        <h3 className={classes.featuredProject}>
                            Featured Project
                        </h3>
                        <h2 className={classes.rightSide}>
                            Financial Freedom Dashboard
                        </h2>
                        <Paper className={classes.projectDesc}>
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
                    <TiltThis
                        imageURL={gimmick}
                        liveLink="https://grace-shopper-gimmicks.herokuapp.com/home"
                    />
                </Grid>
                <Grid item xs={5}>
                    <div>
                        <h3 className={classes.featuredProject}>
                            Featured Project
                        </h3>
                        <h2 className={classes.rightSide}>
                            Gimme Yo Money Gimmicks
                        </h2>
                        <Paper className={classes.projectDesc}>
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
                            githubLink="https://github.com/Graceshopper-Gimmick/Grace-Shopper-Gimmick/tree/main/fs-app-template"
                            liveLink="https://grace-shopper-gimmicks.herokuapp.com/home"
                        />
                    </div>
                </Grid>
            </Grid>
            <div style={{ height: '10vh' }} />
        </Grid>
    )
}
