import classes from './download.module.css';

import MainLayout from '../../components/layout/mainLayout/Main';
import Layout from '../../components/layout/componentLayout/Layout';
import { Link } from 'react-router-dom';




const Download = () => {

    return(
        <MainLayout>
            <Layout className={classes.layout}>
                <h1>Download</h1>
                <p>To download individual files. Go to <Link>Abraidopsis Features</Link> and selected the files to download.</p>
                <div className={classes.downloadTable}>
                    <div className={classes.header}>
                        <p className={classes.row1}>Name</p>
                        <p className={classes.row2}>Description</p>
                        <p className={classes.row3}></p>
                    </div>

                    <div className={classes.row}>
                        <p className={classes.row1}>Go Models</p>
                        <p className={classes.row2}>All trained GO models</p>
                        <p className={classes.row3}><a href="https://github.com/Sweekwang/golabel/archive/refs/heads/go_model.zip">Download (2.68 GB)</a></p>
                    </div>

                    <div className={classes.row}>
                        <p className={classes.row1}>DGE Models</p>
                        <p className={classes.row2}>All trained DGE models</p>
                        <p className={classes.row3}><a href="https://github.com/Sweekwang/golabel/archive/refs/heads/dge.zip">Download (762.2 MB)</a></p>
                    </div>

                    <div className={classes.row}>
                        <p className={classes.row1}>Others Model</p>
                        <p className={classes.row2}>All trained models include job, agi and tti</p>
                        <p className={classes.row3}><a href="https://github.com/Sweekwang/golabel/archive/refs/heads/other_model.zip">Download (1.68 GB)</a></p>
                    </div>

                    <div className={classes.row}>
                        <p className={classes.row1}>Overall network</p>
                        <p className={classes.row2}><a href="https://cytoscape.org/">Cytoscape</a> file. Overall network of ___. Cytoscape version file is 3.8.2.</p>
                        <p className={classes.row3}><a href="https://github.com/Sweekwang/golabel/archive/refs/heads/network.zip">Download (933 KB)</a></p>
                    </div>

                </div>
            </Layout>
        </MainLayout>
    );
};

export default Download;
