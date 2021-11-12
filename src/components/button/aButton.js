import classes from './aButton.module.css';

const AButton = (props) => {
    return(
        <a href={props.href} className={[classes.aButton, props.className].join(' ')} onClick={props.onClick}>{props.children}</a>
    )
};

export default AButton;