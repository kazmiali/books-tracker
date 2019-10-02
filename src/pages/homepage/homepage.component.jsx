import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddBox from '@material-ui/icons/AddBox';
import BookCardList from '../../components/book-card-list/book-card-list.component';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		maxWidth: '100vw',
		overflow: 'hidden'
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	},
	firstBookCard: {
		marginTop: theme.spacing(2)
	},
	button: {
		margin: theme.spacing(1.5, 0, 0, 1)
	},
	input: {
		display: 'none'
	},
	spaceBetweenWrap: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	marginTopTitle: {
		margin: theme.spacing(1.5, 0, 0, 0),
		fontWeight: '500'
	},
	fab: {
		position: 'fixed',
		bottom: theme.spacing(2),
		right: theme.spacing(2)
	},
	hideFabUpSm: {
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

const HomePage = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3} justify='center' alignItems='center'>
				<Grid item xs={11} sm={8} className={classes.spaceBetweenWrap}>
					<Typography className={classes.marginTopTitle} variant='h4'>
						Your Books
					</Typography>
					<Button
						variant='contained'
						color='secondary'
						className={`${classes.button} ${classes.hideButtonDownSm}`}
					>
						<AddBox /> Add Book
					</Button>
				</Grid>
				<Grid item xs={11} sm={8}>
					<BookCardList />
				</Grid>
			</Grid>
			<Fab
				aria-label={'Add'}
				className={`${classes.fab} ${classes.hideFabUpSm}`}
				color={'primary'}
			>
				<AddIcon />
			</Fab>
		</div>
	);
};

export default HomePage;
