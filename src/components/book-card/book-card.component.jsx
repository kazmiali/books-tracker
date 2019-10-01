import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { textAlign } from '@material-ui/system';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		textAlign: 'left'
	},
	paper: {
		padding: theme.spacing(2),
		margin: 'auto',
		maxWidth: 500
	},
	image: {
		width: 120,
		height: 150
	},
	img: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%'
	}
}));

const BookCard = props => {
	const classes = useStyles();
	const { imageuri, title, author, description } = props;

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<Grid container spacing={2}>
					<Grid item>
						<ButtonBase className={classes.image}>
							<img
								className={classes.img}
								alt='complex'
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Px6ku9bLoPnVpEv72ofWX-3sGF50voDXVLkTPb8r30k_NQ4q'
							/>
						</ButtonBase>
					</Grid>
					<Grid item xs={12} xs container>
						<Grid item xs container direction='column' spacing={2}>
							<Grid item xs>
								<Typography variant='h6'>Watching You</Typography>
								<Typography variant='subtitle1' color='textSecondary'>
									Author: Paulo Coelho
								</Typography>
								<Typography variant='body2' gutterBottom>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Ipsum quo dignissimos fugit minus corporis animi amet in
									reprehenderit deleniti ullam.
								</Typography>
							</Grid>
						</Grid>
						<Grid item>
							<Typography variant='subtitle1'>
								<DeleteForeverIcon />
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
};

export default BookCard;
