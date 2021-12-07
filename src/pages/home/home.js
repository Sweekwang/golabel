import {useHistory} from 'react-router-dom';
import {useRef} from 'react';

import classes from './home.module.css';

import MainLayout from '../../components/layout/mainLayout/Main';
import Layout from '../../components/layout/componentLayout/Layout';
import Particle from './particle/particle';
import AButton from '../../components/button/aButton';

import How from './how/how'
import ContactDiv from './contact/contact'



const Home = () => {
    const history = useHistory();

    const inputRef = useRef(null);

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredValue = inputRef.current.value.replace(/\s+/g, '');
        console.log(enteredValue)
        if (enteredValue !== ''){
            history.push('/golabel/goterm/'+ enteredValue);
        }
    
    };

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
                    <label className={classes.searchLabel} for='terms'>Search (Go Terms):</label> <br/>
                    <input className={classes.searchInput} list="list" type='text' id='terms' name='terms' placeholder="e.g. GO:0000003, E-GEO-39217_1a_up" ref ={inputRef}>
                    <datalist id="list">
                        <option key="Test 1" value="Test 1"/>
                        <option key="Test 1" value="Test 1"/>
                        <option key="E-GEO-39217_1a_up_fi" value="E-GEO-39217_1a_up_fi"/>
                
                    </datalist>
                    </input>
                    <input className={classes.searchSubmit} type="submit" value="Submit"></input>
                </form>
            </Layout>
            <How/>
           <ContactDiv/>
        </MainLayout>
    );
};

export default Home;