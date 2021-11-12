import Particles from 'react-particles-js';

const Particle = (props) => (
    <Particles
    className={props.className}
    params={{
	    "particles": {
	        "number": {
	            "value": 32
	        },
	        "size": {
	            "value": 6
	        },
            "color": {
                "value": "#2f5d62be"
            },
            "line_linked": {
                "color": '#a7c4bc',
            }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
);

export default Particle;