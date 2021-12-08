import classes from './disclaimer.module.css';

import MainLayout from '../../components/layout/mainLayout/Main';
import Layout from '../../components/layout/componentLayout/Layout';


const Disclaimer = () => {

    return(
        <MainLayout>
            <Layout className={classes.layout}>
                <h1>Disclaimer</h1>
                <p>Access to the online contents and services of the <a href="/golabel#home">finder.plant.tools</a> is 
                    granted to all users without any limitations pursuant to the regulations stipulated below.</p>

                <p>
                    Academic users may download the material offered on the site for their non-commercial use, but all 
                    copyright and other proprietary notices contained in the materials are to be retained. Non-academic/commercial, 
                    for-profit users may use the <a href="/golabel#home">finder.plant.tools</a> website and online services, but 
                    any other use, in particular the download of any component of <a href="/golabel#home">finder.plant.tools</a>, 
                    requires an agreement. Please contact the <a href="/golabel#contact">Marek Mutwil</a> for the latter.
                </p>

                <p>
                    The software is provided on an “as is” basis, without warranty of any kind, either expressed, implied, or statutory, 
                    including, without limitation, warranties that the software is free of defects, merchantable, fit for a particular 
                    purpose or non-infringing. The entire risk as to the quality and performance of the software is with you. Should any 
                    software prove defective in any respect, you assume the cost of any necessary servicing, repair, or correction. This 
                    disclaimer of warranty constitutes an essential part of any right to use. No use of any software is authorized except under 
                    this disclaimer. Furthermore, under no circumstances and under no legal theory, whether tort (including negligence), contract, 
                    or otherwise, shall MPG be liable to you for any direct, indirect, special, incidental, or consequential damages of any character 
                    including, without limitation, damages for lost profits, loss of goodwill, work stoppage, computer failure or malfunction, or any 
                    and all other commercial damages or losses.
                </p>

                <p>
                By using this site, you agree to the <a href="/golabel/policy">Privacy policy</a> 
                </p>
            </Layout>
        </MainLayout>
    );
};

export default Disclaimer;