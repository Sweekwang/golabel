import { Fragment } from 'react';
import classes from './Main.module.css';

const Main = (props) => {
    return(
        <Fragment>
        <div className={[classes.layout, props.className].join(' ')}>{props.children}</div>
        </Fragment>
    )
};

export default Main;