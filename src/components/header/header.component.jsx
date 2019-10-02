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

import {
	HomeRounded,
	Menu,
	Whatshot,
	AccountCircle,
	VpnKey,
	AddCircleOutline
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		maxWidth: '100vw',
		overflow: 'hidden'
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
	headerLink: {
		color: '#fff',
		textDecoration: 'none'
	},
	drawerLink: {
		color: 'rgba(0,0,0,0.87)',
		textDecoration: 'none'
	},
	IconMargin: {
		marginRight: '2px'
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

const HideOnScroll = props => {
	const { children } = props;
	const trigger = useScrollTrigger();
	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	);
};

const Header = props => {
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
				<Link to='/' className={classes.drawerLink}>
					<ListItem button>
						<ListItemIcon>
							<Whatshot />
						</ListItemIcon>
						<ListItemText primary='Trending' />
					</ListItem>
				</Link>
				<Link to='/profile' className={classes.drawerLink}>
					<ListItem button>
						<ListItemIcon>
							<AccountCircle />
						</ListItemIcon>
						<ListItemText primary='Profile' />
					</ListItem>
				</Link>
				<Link to='/login' className={classes.drawerLink}>
					<ListItem button>
						<ListItemIcon>
							<VpnKey />
						</ListItemIcon>
						<ListItemText primary='Login' />
					</ListItem>
				</Link>
				<Link to='/signup' className={classes.drawerLink}>
					<ListItem button>
						<ListItemIcon>
							<AddCircleOutline />
						</ListItemIcon>
						<ListItemText primary='Signup' />
					</ListItem>
				</Link>
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
							<Link to='/' className={classes.headerLink}>
								<HomeRounded />
							</Link>
						</IconButton>
						<Typography variant='h6' className={classes.title}></Typography>

						<Link to='/' className={classes.headerLink}>
							<Button className={classes.hideButtonDownSm} color='inherit'>
								<Whatshot className={classes.IconMargin} />
								Trending
							</Button>
						</Link>
						<Link to='/login' className={classes.headerLink}>
							<Button className={classes.hideButtonDownSm} color='inherit'>
								<AccountCircle className={classes.IconMargin} />
								Profile
							</Button>
						</Link>
						<Link to='/login' className={classes.headerLink}>
							<Button className={classes.hideButtonDownSm} color='inherit'>
								<VpnKey className={classes.IconMargin} />
								Login
							</Button>
						</Link>

						<Link to='/signup' className={classes.headerLink}>
							<Button className={classes.hideButtonDownSm} color='inherit'>
								<AddCircleOutline className={classes.IconMargin} />
								Signup
							</Button>
						</Link>

						<IconButton
							onClick={toggleDrawer('right', true)}
							edge='end'
							className={`${classes.menuButton} ${classes.hideMenuUpSm}`}
							color='inherit'
							aria-label='menu'
						>
							<Menu />
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
};

export default Header;
