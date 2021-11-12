import classes from './tooltips.module.css';

const Tooltips = (props) => {
    return(
        <div className={classes.tooltip}> 
            <p>?</p>
            <span className={classes.tooltiptext}>{props.children}</span>
        </div>
    )
};

export default Tooltips;