import classes from './Layout.module.css';

const Layout = (props) => {
    return(
        <div id={props.id} className={[classes.layout, props.className].join(' ')}>{props.children}</div>
    )
};

export default Layout;