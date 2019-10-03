import React, { useState } from 'react';

import { makeStyles, withStyles, lighten } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const useStyles = makeStyles(theme => ({
	addButton: {
		margin: theme.spacing(0, 0, 0, 1),
		[theme.breakpoints.down('600')]: {
			margin: theme.spacing(0, 0, 0, 0.4)
		}
	},
	subtractButton: {
		margin: theme.spacing(0, 0, 0, 1.5),
		[theme.breakpoints.down('600')]: {
			margin: theme.spacing(0, 0, 0, 1.1)
		}
	},
	progressBar: {
		maxWidth: '100%',
		margin: theme.spacing(1, 0, 0, 0)
	},
	gridCenter: {
		display: 'grid',
		gridTemplateColumns: '1fr 8fr 1fr'
	}
}));

const BorderLinearProgress = withStyles({
	root: {
		height: 10,
		backgroundColor: lighten('#ff6c5c', 0.5)
	},
	bar: {
		borderRadius: 20,
		backgroundColor: '#ff6c5c',
		display: 'inline'
	}
})(LinearProgress);

const ProgressBar = () => {
	const classes = useStyles();
	const [progress, setProgress] = useState(0);

	const handleAddProgress = () => {
		if (progress === 100) {
			return;
		}
		setProgress(progress + 10);
	};

	const handleDecreaseProgress = () => {
		if (progress === 0) {
			return;
		}
		setProgress(progress - 10);
	};

	return (
		<div>
			<div className={classes.gridCenter}>
				<RemoveCircleIcon
					color='secondary'
					className={classes.addButton}
					aria-label='Increase'
					onClick={() => handleDecreaseProgress()}
				/>
				<BorderLinearProgress
					className={classes.progressBar}
					variant='determinate'
					color='secondary'
					value={progress}
				/>
				<AddCircleIcon
					color='secondary'
					className={`${classes.button} ${classes.subtractButton} `}
					aria-label='Decrease'
					onClick={() => handleAddProgress()}
				/>
			</div>
		</div>
	);
};

export default ProgressBar;
