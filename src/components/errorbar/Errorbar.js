import classes from './Errorbar.module.css'

const ErrorBar = () => {
    return (
        <div className={classes.errorDiv}>
            <div className={classes.errorDiv2}>
                <p>Error has occurred</p>
                <a href='/golabel'>Back to Home</a>
            </div>
        </div>
    )
}

export default ErrorBar;