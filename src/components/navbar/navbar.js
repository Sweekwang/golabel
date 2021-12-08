import classes from './navbar.module.css';
import { Fragment, useState } from 'react';

import Burger from '../burger/burger';
import Backdrop from '../backdrop/backdrop';

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);

  const showMoreHandler = () => {
    setIsShow(prevState => !prevState);
    console.log(isShow);
  };


  return (
    <Fragment>
    {isShow && <Backdrop onClick={showMoreHandler}/>}
    <nav className={classes.nav}>
      <div className={classes.container}>
        <div className={classes.logoContainer}>
          <Burger className={classes.burger} onClick={showMoreHandler} isShow={isShow} />
          <p><a href="/golabel">finder.plant.tools</a></p>
          <ul>
            <li className={classes.info}><a href="/golabel/release" target="_blank">Release</a></li>
          </ul>
          <ul>
            <li className={classes.info}><a href="https://github.com/Sweekwang/golabel/tree/master" target="_blank">Github</a></li>
          </ul>
        </div>

        <div className={[classes.buttonsContainer, isShow ? null:classes.visable].join(' ')} id={classes.main}>
          <ul>
            <li>
              <a href="/golabel#home">Home</a>
            </li>
            <li>
              <a href="/golabel#how">How to use?</a>
            </li>
            <li>
              <a href="/golabel/features">Abraidopsis Features</a>
            </li>
            <li>
              <a href="/golabel/download">Download</a>
            </li>
            <li>
              <a href="/golabel#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </Fragment>
  );
};

export default Navbar;
