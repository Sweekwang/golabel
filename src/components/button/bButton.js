import classes from './aButton.module.css';

const BButton = (props) => {
    return(
        <div className={[classes.aButton, props.className].join(' ')}>{props.children}</div>
    )
};

export default BButton;