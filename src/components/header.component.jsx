import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/HomeRounded';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
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

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func
};

export default function Header(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<HideOnScroll {...props}>
				<AppBar>
					<Toolbar>
						<Link to='/' className={classes.homeLink}>
							<IconButton
								edge='start'
								className={classes.homeButton}
								color='inherit'
								aria-label='menu'
							>
								<HomeIcon />
							</IconButton>
						</Link>
						<Typography variant='h6' className={classes.title}></Typography>
						<Button color='inherit'>Trending</Button>
						<Button color='inherit'>Profile</Button>
						<Button color='inherit'>Login</Button>
						{/* <IconButton
							edge='end'
							className={classes.menuButton}
							color='inherit'
							aria-label='menu'
						>
							<MenuIcon />
						</IconButton> */}
					</Toolbar>
				</AppBar>
			</HideOnScroll>

			<Toolbar />
		</div>
	);
}
