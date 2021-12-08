import classes from './features.module.css';

import MainLayout from '../../components/layout/mainLayout/Main';
import Layout from '../../components/layout/componentLayout/Layout';



const Features = () => {

    return(
        <MainLayout>
            <Layout className={classes.layout}>
                <h1>Abraidopsis Features</h1>
                <form>
                    <input type="submit" value="Download"/>
                    <div>
                    <input type="checkbox" id="GO:0015979" name="GO:0015979" value="GO:0015979"/>
                        <label for="GO:0015979">GO:0015979</label><br/>
                    </div>
                </form>

            </Layout>
        </MainLayout>
    );
};

export default Features;