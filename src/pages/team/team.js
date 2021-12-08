import classes from './team.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import MainLayout from '../../components/layout/mainLayout/Main';
import Layout from '../../components/layout/componentLayout/Layout';
import Marek from '../../assets/person/marek.png';
import Jonathan from '../../assets/person/jonathan.jpeg';


const Team = () => {

    return(
        <MainLayout>
            <Layout className={classes.layout}>
                <h1>Our Team</h1>
                <p className={classes.subtext}>Who We Are</p>
                <div className={classes.imageContent}>
                    <div className={classes.card}>
                        <img src={Marek} alt="Marek Mutwil"/>
                        <h2>Marek Mutwil</h2>
                        <p>Principal Investigator</p>
                        <div className={classes.icons}>
                            <a href="https://www.plant.tools/" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faGlobe} size="lg"/></a>
                            <a href="https://twitter.com/LabMutwil" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faTwitter} size="lg"/></a>
                            <a href="https://www.linkedin.com/in/marek-mutwil-39aab42" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faLinkedin} size="lg"/></a>
                            <a href="https://github.com/mutwil" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faGithub} size="lg"/></a>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <img src={Jonathan}/>
                        <h2>Jonathan Ng</h2>
                        <p>PHD Student, Computational biology</p>
                        <div className={classes.icons}>
                            <a href="https://www.plant.tools/team---jonathan.html" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faGlobe} size="lg"/></a>
                            <a href="https://www.linkedin.com/in/jonathan-ng-75b89089" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faLinkedin} size="lg"/></a>
                            <a href="https://github.com/jonng2018" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faGithub} size="lg"/></a>
                        </div>
                    </div>
                </div>
            </Layout>
        </MainLayout>
    );
};

export default Team;