import classes from './download.module.css';

import MainLayout from '../../components/layout/mainLayout/Main';
import Layout from '../../components/layout/componentLayout/Layout';
import { Link } from 'react-router-dom';




const Download = () => {

    return(
        <MainLayout>
            <Layout className={classes.layout}>
                <h1>Download</h1>
                <p>
                    Trained models, model scores, and feature importance files can be downloaded below, in a zip folder. A readme
                    file is also provided with further information, and to explain how to use these trained models.
                </p>
                <div className={classes.downloadTable}>
                    <div className={classes.header}>
                        <p className={classes.row1}>Name</p>
                        <p className={classes.row2}>Description</p>
                        <p className={classes.row3}></p>
                    </div>

                    <div className={classes.row}>
                        <p className={classes.row1}>All Models</p>
                        <p className={classes.row2}>All trained models</p>
                        <p className={classes.row3}><a href="https://storage.cloud.google.com/zip_data_all/output_models.tar.gz">Download (2.29 GB)</a></p>
                    </div>
           
                    <div className={classes.row}>
                        <p className={classes.row1}>All Scores</p>
                        <p className={classes.row2}>All model scores</p>
                        <p className={classes.row3}><a href="https://storage.cloud.google.com/zip_data_all/output_scores.tar.gz">Download (2.66 MB)</a></p>
                    </div>

                    <div className={classes.row}>
                        <p className={classes.row1}>All Feature Importances</p>
                        <p className={classes.row2}>All model feature importance files</p>
                        <p className={classes.row3}><a href="https://storage.cloud.google.com/zip_data_all/output_fi.tar.gz">Download (1.18 GB)</a></p>
                    </div>

                    <div className={classes.row}>
                        <p className={classes.row1}>Readme</p>
                        <p className={classes.row2}>Readme and additonal information</p>
                        <p className={classes.row3}><a href="https://storage.cloud.google.com/zip_data_all/output_readme.tar.gz">Download (19.6 KB)</a></p>
                    </div>

                    <div className={classes.row}>
                        <p className={classes.row1}>Overall network</p>
                        <p className={classes.row2}><a href="https://cytoscape.org/">Cytoscape</a> file. Overall network, cytoscape version is 3.8.2.</p>
                        <p className={classes.row3}><a href="https://storage.cloud.google.com/zip_data_all/complete_sk.cys">Download (933 KB)</a></p>
                    </div>

                </div>
            </Layout>
        </MainLayout>
    );
};

export default Download;
