import classes from './policy.module.css';

import MainLayout from '../../components/layout/mainLayout/Main';
import Layout from '../../components/layout/componentLayout/Layout';


const Policy = () => {

    return(
        <MainLayout>
            <Layout className={classes.layout}>
                <h1>Privacy Policy</h1>
                <p>
                    No personal data needs to be entered to use finder.plant.tools.
                </p>

            </Layout>
        </MainLayout>
    );
};

export default Policy;