import classes from './Title.module.scss';
export const Title = (props) => {
	return (
		<div className={classes.title}>
			<p>{props.title}</p>
		</div>
	);
};
