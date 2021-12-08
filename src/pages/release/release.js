import classes from './release.module.css';

import MainLayout from '../../components/layout/mainLayout/Main';
import Layout from '../../components/layout/componentLayout/Layout';
import AButton from '../../components/button/aButton';


const Release = () => {

    return(
        <MainLayout>
            <Layout className={classes.layout}>
                <h1>Release</h1>
                <AButton href="https://github.com/Sweekwang/golabel/issues">Report Issue</AButton>
                <p>Current version: Version 1.0.0</p>

                <h2>Version Information:</h2>
                <div>
                    <h1>Version 1.0.0</h1>
                    <p>....</p>
                </div>

            </Layout>
        </MainLayout>
    );
};

export default Release;