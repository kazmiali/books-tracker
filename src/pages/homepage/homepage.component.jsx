import React, { useState } from 'react';

import { Grid, Button, Typography, Fab, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Add, AddBox } from '@material-ui/icons';

import BookCardList from '../../components/book-card-list/book-card-list.component';
import ModalForm from '../../components/modal-form/modal-form.component';

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
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={3} justify='center' alignItems='center'>
				<Grid item xs={11} sm={8} className={classes.spaceBetweenWrap}>
					<Typography className={classes.marginTopTitle} variant='h4'>
						Your Books
					</Typography>
					<Button
						onClick={handleOpen}
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
				onClick={handleOpen}
			>
				<Add />
			</Fab>
			<Modal
				aria-labelledby='simple-modal-title'
				aria-describedby='simple-modal-description'
				open={open}
				onClose={handleClose}
			>
				<ModalForm handleClose={handleClose} />
			</Modal>
		</div>
	);
};

export default HomePage;
