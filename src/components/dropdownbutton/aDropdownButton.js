import classes from './aDropdownButton.module.css';

const ADropdownButton = (props) => {
    return(
        <a href={props.href} className={[classes.aDropdownButton, props.className].join(' ')} onClick={props.onClick}>{props.children}</a>
    )
};

export default ADropdownButton;