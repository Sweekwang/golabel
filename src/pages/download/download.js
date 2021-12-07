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
                        <p className={classes.row1}>File Name</p>
                        <p className={classes.row2}>Description</p>
                        <p className={classes.row3}></p>
                    </div>

                    <div className={classes.row}>
                        <p className={classes.row1}>Go Model</p>
                        <p className={classes.row1}>go_model.zip</p>
                        <p className={classes.row2}>Description</p>
                        <p className={classes.row3}><a href="https://github.com/Sweekwang/golabel/archive/refs/heads/go_model.zip">Download (2.68 GB)</a></p>
                    </div>

                    <div className={classes.row}>
                        <p className={classes.row1}>DGE Models</p>
                        <p className={classes.row1}>Filename.zip</p>
                        <p className={classes.row2}>Description</p>
                        <p className={classes.row3}>Download</p>
                    </div>

                    <div className={classes.row}>
                        <p className={classes.row1}>Others Models</p>
                        <p className={classes.row1}>Filename.zip</p>
                        <p className={classes.row2}>Description</p>
                        <p className={classes.row3}>Download</p>
                    </div>

                </div>
            </Layout>
        </MainLayout>
    );
};

export default Download;