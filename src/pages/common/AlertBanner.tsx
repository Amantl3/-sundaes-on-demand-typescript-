import Alert from "react-bootstrap/Alert";

export default function AlertBanner({message=undefined, varient=undefined}) {
    const alertMessage = message || ' An unexpected error occured. Please try again later.';
    const alertVariant = varient || 'danger';

    return(
        <Alert
            variant={alertVariant}
            style={{background: 'red'}}
        >{alertMessage}</Alert>
    );
}