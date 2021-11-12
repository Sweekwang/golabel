import classes from './header.module.css';


const Header = (props) => {
    return(
        <div className={[classes.header, props.className].join(' ')}>
            <img src={props.src} alt="icon"/>
            <h2>{props.children}</h2>
        </div>
    )
};

export default Header;