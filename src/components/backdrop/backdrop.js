import classes from "./backdrop.module.css"

const Backdrop = (props) => (
    <div className={classes.backdrop} onClick={props.onClick}>
    </div>
)

export default Backdrop;