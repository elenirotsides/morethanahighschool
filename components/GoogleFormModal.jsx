import { Modal, Button, Spinner } from 'react-bootstrap';
import { useState } from 'react';

export default function GoogleFormModal(props) {
    const [loading, setLoading] = useState(true);

    const hideSpinner = () => {
        setLoading(false);
    };

    return (
        <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
            <Modal.Header closeButton>{/* <Modal.Title id='contained-modal-title-vcenter'>Modal heading</Modal.Title> */}</Modal.Header>
            <Modal.Body>
                {loading ? (
                    <Spinner animation='border' variant='danger' style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                ) : null}
                <iframe
                    src='https://docs.google.com/forms/d/e/1FAIpQLSfngPhZototEeNoXZCSXTBRR3peAYgG3GFDgxu4gpWv9s9KKw/viewform?embedded=true'
                    style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100%', height: '500px' }}
                    onLoad={hideSpinner}
                ></iframe>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='danger' onClick={props.onHide} style={{ fontFamily: 'ScopeOne-Regular' }}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
