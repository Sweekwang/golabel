import classes from './how.module.css';

import Layout from '../../../components/layout/componentLayout/Layout';
import Header from '../../../components/header/header';
import Like from '../../../assets/like.svg';
import Search from '../../../assets/search.png';
import Learning from '../../../assets/learning.png';

const How = () => {
    return(
        <Layout className={classes.how} id="how">
            <div className={classes.header}>
                <Header src = {Like} className={classes.headerIcon}>Made with Love</Header>
                <h3>How to use ?</h3>
                <p>A database to explore biological relationships between <i>Arabidopsis thailiana</i> genetic characteristics. Search using any 
                    feature given in the list of features (link below).</p>
            </div>
            <div className={classes.howItems}>
                <div className={classes.box}>
                    
                    <h3>
                        <img src={Search} alt="info"/> <br/>
                        Search.</h3>
                    <p>Search by GO terms (e.g GO0000003) and other <i>A. thailiana</i> feature names above. GO terms (prefix is 'go_') and 
                        Differential gene expression (DGE) features (prefix is 'dge_') need to be searched without their prefix 
                        <a>Click Here</a> to find out the list of abraidopsis features</p>
                </div>

                <div className={classes.box}>
                    <h3>
                        <img src={Learning} alt="info"/><br/>
                        Learn.
                    </h3>
                    <p>Get the model score, network showing first neighbours, and the list of feature importance data of the input feature.</p>
                </div>
            </div>
        </Layout>
    )
};

export default How;