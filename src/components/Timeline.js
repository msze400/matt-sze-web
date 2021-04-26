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
import RepeatIcon from '@material-ui/icons/Repeat'
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
                    <TimelineDot>
                        <SentimentVeryDissatisfiedIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Received a 2 out of 5 on the AP Computer Science
                            Exam
                        </Typography>
                        <Typography>
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
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Earned an A in a MATLAB Course at Rutgers University
                        </Typography>
                        <Typography>
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
                    <TimelineDot color="primary">
                        <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Graduated With a B.S. in Chemical Engineering
                        </Typography>
                        <Typography>from Rutgers University</Typography>
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
                    <TimelineDot color="primary">
                        <WorkIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Joined Lummus Technology
                        </Typography>
                        <Typography>
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
                    <TimelineDot color="secondary">
                        <CodeIcon />
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Enrolled and Graduated from Full Stack Academy's
                        </Typography>
                        <Typography>Part-time Flex Program</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <div style={{ height: '10vh', backgroundSize: '10%' }} />
        </Timeline>
    )
}
