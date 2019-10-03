import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, ButtonBase } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import ProgressBar from '../progress-bar/progress-bar.component';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		textAlign: 'left',
		margin: theme.spacing(0, 0, 2, 0)
	},
	paper: {
		padding: theme.spacing(2),
		margin: 'auto',
		maxWidth: 700
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
	},
	pointer: {
		cursor: 'pointer'
	},
	descriptionSmall: {
		[theme.breakpoints.down('400')]: {
			fontSize: '.75rem'
		}
	},
	flexCenter: {
		display: 'flex',
		justifyContent: 'space-between'
	}
}));

const BookCard = props => {
	const classes = useStyles();
	// const { imageuri, title, author, description } = props;

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<ProgressBar />
					</Grid>
					<Grid item>
						<ButtonBase className={classes.image}>
							<img
								className={classes.img}
								alt='complex'
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Px6ku9bLoPnVpEv72ofWX-3sGF50voDXVLkTPb8r30k_NQ4q'
							/>
						</ButtonBase>
					</Grid>
					<Grid item xs container>
						<Grid item xs container direction='column' spacing={1}>
							<Typography className={classes.flexCenter} variant='h6'>
								Watching You
								<DeleteForeverIcon className={classes.pointer} />
							</Typography>
							<Typography
								variant='subtitle1'
								className={classes.descriptionSmall}
								color='textSecondary'
							>
								Author: Paulo Coelho
							</Typography>
							<Typography
								className={classes.descriptionSmall}
								variant='body2'
								gutterBottom
							>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
								quo dignissimos fugit minus corporis animi amet in reprehenderit
								deleniti ullam.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
};

export default BookCard;
