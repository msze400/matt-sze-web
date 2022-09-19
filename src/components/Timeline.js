import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied'
import LaptopMacIcon from '@material-ui/icons/LaptopMac'
import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work'
import CodeIcon from '@material-ui/icons/Code'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
        backgroundColor: 'rgb(35, 53, 84)',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },

    year: {
        color: '#ccd6f6',
    },

    leftSide: {
        textAlign: 'left',
    },

    timelineDot: {
        backgroundColor: 'rgb(35, 53, 84)',
        color: '#ccd6f6',
    },
}))

export default function CustomizedTimeline() {
    const classes = useStyles()

    return (
        <Timeline
            align="alternate"
            className="primary-background"
            style={{ margin: 0 }}
        >
            <h4 className="SF-body" style={{ color: '#64ffda' }}>
                "How did you get here?" you might ask.
            </h4>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" className={classes.year}>
                        2013
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot className={classes.timelineDot}>
                        <SentimentVeryDissatisfiedIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography
                            variant="h6"
                            component="h1"
                            id="timeline-title"
                        >
                            Received a 2 out of 5 on the AP Computer Science
                            Exam
                        </Typography>
                        <Typography id="timeline-desc">
                            Vowed never to get into coding again
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" className={classes.year}>
                        2014
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot className={classes.timelineDot}>
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={`${classes.paper}`}>
                        <Typography
                            variant="h6"
                            component="h1"
                            id="timeline-title"
                        >
                            Earned an A in a MATLAB Course at Rutgers University
                        </Typography>
                        <Typography id="timeline-desc">
                            Enrolled as a Teaching Assistant
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" className={classes.year}>
                        2018
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot className={classes.timelineDot}>
                        <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography
                            variant="h6"
                            component="h1"
                            id="timeline-title"
                        >
                            Graduated With a B.S. in Chemical Engineering
                        </Typography>
                        <Typography id="timeline-desc">
                            from Rutgers University
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" className={classes.year}>
                        2018
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot className={classes.timelineDot}>
                        <WorkIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography
                            variant="h6"
                            component="h1"
                            id="timeline-title"
                        >
                            Joined Lummus Technology
                        </Typography>
                        <Typography id="timeline-desc">
                            as a Process/App Development Engineer
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" className={classes.year}>
                        2021
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot className={classes.timelineDot}>
                        <CodeIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography
                            variant="h6"
                            component="h1"
                            id="timeline-title"
                        >
                            Enrolled and Graduated from Full Stack Academy's
                        </Typography>
                        <Typography id="timeline-desc">
                            Part-time Flex Program
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" className={classes.year}>
                        2021
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot className={classes.timelineDot}>
                        <CodeIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography
                            variant="h6"
                            component="h1"
                            id="timeline-title"
                        >
                            Landed my First Software Role as a Front End
                            Engineer
                        </Typography>
                        <Typography id="timeline-desc">
                            at Colgate Palmolive
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" className={classes.year}>
                        2021
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot className={classes.timelineDot}>
                        <CodeIcon />
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography
                            variant="h6"
                            component="h1"
                            id="timeline-title"
                        >
                            Joined MIT Lincoln Laboratory's
                        </Typography>
                        <Typography id="timeline-desc">
                            Artifical Intelligence and Algorithms Group
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>

            <div style={{ height: '10vh', backgroundSize: '10%' }} />
        </Timeline>
    )
}
