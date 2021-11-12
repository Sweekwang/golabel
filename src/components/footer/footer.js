import classes from "./footer.module.css";

import Layout from '../layout/componentLayout/Layout';

const Footer = () => {
    var d = new Date();
    var n = d.getFullYear();

    return(
        <footer className={classes.footer}>
            <Layout>
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Disclaimer</a></li>
                    <li><a href="/">Privacy Policy</a></li>
                    <li><a href="https://www.plant.tools/" target="_blank">Plant Tools</a></li>
                </ul>
                <p>CopyRights © {n}</p>
            </Layout>
        </footer>
    )
};

export default Footer;