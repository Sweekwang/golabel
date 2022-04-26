import {useHistory} from 'react-router-dom';
import {useRef, useEffect, useState } from 'react';

import classes from './home.module.css';

import MainLayout from '../../components/layout/mainLayout/Main';
import Layout from '../../components/layout/componentLayout/Layout';
import Particle from './particle/particle';
import AButton from '../../components/button/aButton';
import FeaturesController from '../../methods/features';

import How from './how/how'
import ContactDiv from './contact/contact'



const Home = () => {
    const [list,setList] = useState([]);
    const [isInputActive, setIsInputActive] = useState(false)
    const history = useHistory();

    const inputRef = useRef(null);

    const submitHandler = (e) => {
        e.preventDefault();
        // Ensures proper URL encoding
        var enteredValue = inputRef.current.value.replace(/\s+/g, '_');
        //console.log(enteredValue)
        if (enteredValue.startsWith("GO:")) {
            history.push('/golabel/goterm/'+ enteredValue);
        }
        else if (enteredValue !== '') {
            // Double encoding since history decodes it once, which messes up my url
            enteredValue = encodeURIComponent(encodeURIComponent(enteredValue));
            console.log(enteredValue)
            history.push('/golabel/goterm/'+ enteredValue);
            console.log(history)
        }
    
    };

    useEffect(() => {
        FeaturesController
            .retrieveFeaturesInformation()
            .then(res => {
                setList(res);
            });
    }, []);

    return(
        <MainLayout>
            <Layout className={classes.headerContainer} id="home">
                <Particle className={classes.particle}/>
                <div className={classes.headerItems}>
                    <h1>finder.plant.tools</h1>
                    <p>A database to explore biological relationships between Arabidopsis thailiana genetic characteristics.</p>
                    <br/>
                    <AButton href="#how">Learn More</AButton>
                </div>
            </Layout>
            
            <Layout className={classes.searchContainer}>
                <form className={classes.searchForm} onSubmit={submitHandler}>
                    <label className={classes.searchLabel} for='terms'>Search (Go Terms):</label> 
                    <div>
                      <input onFocus={() => setIsInputActive(true)} onBlur={() => setIsInputActive(false)} className={classes.searchInput} list="list" type='text' id='terms' name='terms' ref ={inputRef} />
                      <input className={classes.searchSubmit} type="submit" value="Submit"/>
                      <span className={classes.clickablePlaceholderContainer}>
                        {
                          !isInputActive && (
                            <>
                              <span>eg.</span>
                              <a href='/golabel/goterm/GO:0006950'>GO:0006950,</a>
                              <a href='/golabel/goterm/E-MTAB-4226_1a_up'>E-MTAB-4226_1a_up</a>
                            </>
                          )
                        }
                      </span>
                    </div>
                    <datalist id="list">
                        {list.map((currentList) => {
                            var name = currentList.feature;

                            if(name.includes("dge_")) {
                                name = name.slice(4);
                            } else if (name.includes("go_GO")) {
                                name = "GO:" + name.slice(6);
                            }

                            return(
                                <option key={name} value={name}/>
                            )
                        })}
                    </datalist>
                </form>
            </Layout>
            <How/>
           <ContactDiv/>
        </MainLayout>
    );
};

export default Home;