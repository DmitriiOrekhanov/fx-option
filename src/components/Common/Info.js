import classes from "./Info.module.scss";

export const Info = (props) => {
  return (
    <div className={props.className}>
      <p className={classes.title}>{props.title}</p>
      <p className={classes.text}>{props.text}</p>
    </div>
  );
};
