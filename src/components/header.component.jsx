import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
	Drawer,
	Button,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	useScrollTrigger,
	Slide,
	CssBaseline,
	AppBar,
	Toolbar,
	IconButton,
	Typography
} from '@material-ui/core';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/HomeRounded';
import MenuIcon from '@material-ui/icons/Menu';
import HotIcon from '@material-ui/icons/Whatshot';
import ProfileIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 0
	},
	menuButton: {
		marginLeft: theme.spacing(2)
	},
	homeButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	},
	homeLink: {
		color: '#fff'
	},
	list: {
		width: 250
	},
	fullList: {
		width: 'auto'
	},
	hideMenuUpSm: {
		[theme.breakpoints.up('600')]: {
			display: 'none'
		}
	},
	hideButtonDownSm: {
		[theme.breakpoints.down('600')]: {
			display: 'none'
		}
	}
}));

function HideOnScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	);
}

export default function TemporaryDrawer(props) {
	const classes = useStyles();
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false
	});

	const toggleDrawer = (side, open) => event => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [side]: open });
	};

	const sideList = side => (
		<div
			className={classes.list}
			role='presentation'
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}
		>
			<List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<HideOnScroll {...props}>
				<AppBar>
					<Toolbar>
						<IconButton
							edge='start'
							className={classes.homeButton}
							color='inherit'
							aria-label='menu'
						>
							<Link to='/' className={classes.homeLink}>
								<HomeIcon />
							</Link>
						</IconButton>
						<Typography variant='h6' className={classes.title}></Typography>

						<Button className={classes.hideButtonDownSm} color='inherit'>
							<HotIcon />
							Trending
						</Button>
						<Button className={classes.hideButtonDownSm} color='inherit'>
							Profile
						</Button>
						<Button className={classes.hideButtonDownSm} color='inherit'>
							Login
						</Button>

						<IconButton
							onClick={toggleDrawer('right', true)}
							edge='end'
							className={`${classes.menuButton} ${classes.hideMenuUpSm}`}
							color='inherit'
							aria-label='menu'
						>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />

			<Drawer
				anchor='right'
				open={state.right}
				onClose={toggleDrawer('right', false)}
			>
				{sideList('right')}
			</Drawer>
		</div>
	);
}
