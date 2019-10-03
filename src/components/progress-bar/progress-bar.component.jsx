import React, { useState } from 'react';

import { makeStyles, withStyles, lighten } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const useStyles = makeStyles(theme => ({
	progressBar: {
		maxWidth: '100%',
		margin: theme.spacing(1, 2, 0, 2)
	},
	gridCenter: {
		display: 'grid',
		gridTemplateColumns: '1fr 24fr 1fr'
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
					className={`${classes.button} `}
					aria-label='Decrease'
					onClick={() => handleAddProgress()}
				/>
			</div>
		</div>
	);
};

export default ProgressBar;
