import './loader.css';

const Loader = () => {
    return(
        <div class="loaderBackground">
            <div class="cornersDiv">
            <div class="corners">
                <div class="corner corner--1"></div>
                <div class="corner corner--2"></div>
                <div class="corner corner--3"></div>
                <div class="corner corner--4"></div>
            </div>
            <p>Loading Data ... </p>
            </div>
        </div>
    )
};

export default Loader;