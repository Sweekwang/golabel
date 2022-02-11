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
                    <p>
                        Search by Gene Ontology (GO) terms (e.g GO:0000003) and other <i>A. thailiana</i> feature names above. GO terms (prefix is 'go_') and 
                        Differential gene expression (DGE) features (prefix is 'dge_') need to be searched without their prefix.&nbsp; 
                        <a>Click Here</a> to find out the list of abraidopsis features. When a feature is searched in the database, the results&nbsp;
                        show a network and feature information.
                    </p>
                </div>

                <div className={classes.box}>
                    <h3>
                        <img src={Learning} alt="info"/><br/>
                        Learn.
                    </h3>
                    <p>
                        The Out-of-bag (OOB) score is rounded to 2 decimal places, categorical variables are scored using OOB F1 while&nbsp;
                        continuous variables are scored using OOB R<sup>2</sup>.<br/><br/>
                        The network shows the local neighbours of the node (feature). Nodes are coloured according&nbsp;
                        to their feature categories, edge weight is proportional to the strength of correlation between the nodes, and edge colour is determined&nbsp;
                        by direction of correlation (red for positive correlation and blue for negative correlation) to the search term&nbsp;
                        (feature that you have searched for).<br/><br/>
                        The feature information shows feature category, name, description and feature importance information, which is given by the&nbsp;
                        randon forest model, and shows how strong a feature&nbsp; 
                        is in predicting the search term. It also shows the feature rank score (FRS), which is calculated by converted
                        feature importance values into ranks, and calculating Spearman's correlation from these ranks. Hence, the interpretation of FRS values is&nbsp; 
                        the same as interpreting Spearman's. Its values range from -1 (perfectly negative correlation) to 1 (perfectly positive correlation), with 0&nbsp;
                        meaning no correation. Feature importance values and FRS scores have been rounded to two decimal places.
                    </p>
                </div>
            </div>
        </Layout>
    )
};

export default How;