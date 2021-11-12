import classes from './contact.module.css';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import Layout from '../../../components/layout/componentLayout/Layout';
import Contact from '../../../assets/contact.svg';
import Header from '../../../components/header/header';

const ContactDiv = () => {
    return(
        <Layout className={classes.contact} id="contact">
            <div className={classes.contactContainer}>
                <div className={classes.contactInfoContainer}>
                    <Header src = {Contact}>Contact</Header>
                    <h3><a href="https://www.plant.tools/team---marek.html">Marek MUTWIL, ​Asst. Prof.</a></h3>
                    <p className={classes.mainText}>Principal Investigator</p>
                    <p>
                        <a href="mailto: mutwil@ntu.edu.sg">Email</a>, <a href="https://twitter.com/LabMutwil">Twitter</a>, <a href="https://www.linkedin.com/in/marek-mutwil-39aab42/">Linkedin</a>
                    </p>
                    <p><a href="https://scholar.google.com/citations?hl=en&user=1WY1xDwAAAAJ">Publications</a></p>
                </div>
            </div>

            <div className={classes.twitterContainer}>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="labmutwil"
                    options={{height: 400}}
                />
            </div>
        </Layout>
    )
};

export default ContactDiv;