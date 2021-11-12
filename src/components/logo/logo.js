import Logo from '../../assets/logo.svg';

const Icon = () => (
    <img src={Logo} style={{boxSizing: "border-box", padding:"8px", height: "100%"}} alt="logo"/>
);

export default Icon;