import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
	'@global': {
		body: {
			backgroundColor: 'white'
		}
	},
	container: {
		background: 'white',
		borderRadius: '10px',
		paddingBottom: '1rem',
		paddingTop: '1rem',
		marginTop: 'auto'
	},
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: 'white'
	},
	avatar: {
		margin: theme.spacing(1),
		padding: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
		display: 'inline-block'
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	},
	flexCenter: {
		marginTop: '3rem',
		[theme.breakpoints.down('600')]: {
			marginTop: '4rem'
		}
		// display: 'flex',
		// justifyContent: 'center',
		// alignItems: 'center',
		// maxWidth: '100vw',
		// height: '90vh'
	},
	textAlignCenter: {
		textAlign: 'center'
	},
	marginTextField: {
		marginBottom: theme.spacing(2)
	},
	flexSpaceBetween: {
		display: 'flex',
		justifyContent: 'space-between'
	}
}));

const ModalForm = props => {
	const classes = useStyles();
	const { handleClose } = props;
	return (
		<div className={classes.flexCenter}>
			<Container component='main' maxWidth='xs' className={classes.container}>
				<CssBaseline />
				<div className={classes.paper}>
					<Grid container spacing={2}>
						<Grid item xs={12} className={classes.flexSpaceBetween}>
							<Avatar className={classes.avatar} onClick={handleClose}>
								<HomeIcon />
							</Avatar>
							<Avatar className={classes.avatar}>
								<MenuBookIcon />
							</Avatar>
							<Avatar className={classes.avatar} onClick={handleClose}>
								<HighlightOffIcon />
							</Avatar>
						</Grid>
						<Grid item xs={12} className={classes.textAlignCenter}>
							<Typography component='h1' variant='h5'>
								Add Book Info
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<form className={classes.form} noValidate>
								<Grid item xs={12} sm={12} className={classes.marginTextField}>
									<TextField
										fullWidth
										required
										autoComplete='btitle'
										name='bookTitle'
										variant='outlined'
										id='bookTitle'
										label='Title'
										autoFocus
									/>
								</Grid>
								<Grid item xs={12} sm={12} className={classes.marginTextField}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='bookAuthor'
										label='Author'
										name='bookAuthor'
										autoComplete='bauthor'
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='bookCoverUrl'
										label='Enter Book Cover Url'
										name='bookCoverUrl'
										autoComplete='bookCoverUrl'
										className={classes.marginTextField}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='outlined-multiline-static'
										label='Description'
										multiline
										rows='4'
										margin='normal'
									/>
								</Grid>
								<Button
									type='submit'
									fullWidth
									variant='contained'
									color='primary'
									className={classes.submit}
								>
									Add Book
								</Button>
							</form>
						</Grid>
					</Grid>
				</div>
			</Container>
		</div>
	);
};

export default ModalForm;
