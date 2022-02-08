import classes from './Errorbar.module.css'

const ErrorBar = () => {
    return (
        <div className={classes.errorDiv}>
            <div className={classes.errorDiv2}>
                <p>
                    Error has occurred (If this is seen due to a GO term being the input feature,&nbsp;
                    this is expected as this means machine learning was not done on it, as it has &lt;10&nbsp;
                    genes. Hence, no information is available for it).
                </p>
                <a href='/golabel'>Back to Home</a>
            </div>
        </div>
    )
}

export default ErrorBar;