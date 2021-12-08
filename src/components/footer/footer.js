import classes from "./footer.module.css";

import Layout from '../layout/componentLayout/Layout';

const Footer = () => {
    var d = new Date();
    var n = d.getFullYear();

    return(
        <footer className={classes.footer}>
            <Layout className={classes.content}>
                <ul>
                    <li><a href="/golabel#home">About</a></li>
                    <li><a href="/golabel/disclaimer">Disclaimer</a></li>
                    <li><a href="/golabel/policy">Privacy Policy</a></li>
                </ul>
                <ul>
                    <li><a href="/golabel/team">Project Team</a></li>
                    <li><a href="https://www.plant.tools/" target="_blank">Plant Tools</a></li>
                </ul>
            </Layout>
            <Layout>
                <p>CopyRights © {n}</p>
            </Layout>
        </footer>
    )
};

export default Footer;