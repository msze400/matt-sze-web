import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#233554',
    },
}))

export default function Footer() {
    const classes = useStyles()

    return (
        <AppBar position="static" className={classes.appBar}>
            <Container maxWidth="md">
                <Toolbar style={{ justifyContent: 'center' }}>
                    <Typography variant="body1" color="inherit">
                        Built using Material UI and React <br /> by Matt Sze
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
