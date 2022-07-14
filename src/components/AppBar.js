import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import resume from '../assets/Sze_Resume.pdf'

import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

    appBar: {
        backgroundColor: '#233554',
    },
}))

export default function ButtonAppBar() {
    const classes = useStyles()

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    })

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return
        }

        setState({ ...state, [anchor]: open })
    }

    const list = (anchor) => (
        <Box
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Blog', 'Travel', 'Personal Finance', 'Bucket List'].map(
                    (text, index) => (
                        <ListItem button key={text}>
                            {/* <ListItemIcon></ListItemIcon> */}
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                )}
            </List>
            {/* <Divider /> */}
        </Box>
    )

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        {['left'].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <MenuIcon onClick={toggleDrawer(anchor, true)}>
                                    {anchor}
                                </MenuIcon>
                                <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                >
                                    {list(anchor)}
                                </Drawer>
                            </React.Fragment>
                        ))}
                        {/* <MenuIcon onClick={toggleDrawer(anchor, true)}>{anchor}/> */}
                    </IconButton>
                    <Typography
                        variant="h6"
                        className={classes.title}
                    ></Typography>
                    <Button
                        color="inherit"
                        href={resume}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Resume
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
