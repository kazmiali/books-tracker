import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BookCard from '../../components/book-card/book-card.component';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	},
	firstBookCard: {
		marginTop: theme.spacing(2)
	}
}));

const HomePage = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3} justify='center' alignItems='center'>
				<Grid item xs={12} sm={8}>
					<BookCard />
				</Grid>
				{/* <Grid item xs={12} sm={6}>
					<Paper className={classes.paper}>xs=12 sm=6</Paper>
				</Grid> */}
			</Grid>
		</div>
	);
};

export default HomePage;
