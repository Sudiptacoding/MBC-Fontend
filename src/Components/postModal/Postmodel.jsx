import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import postService from '../../postService/postService';

const Postmodel = (props) => {

    const [id, setId] = useState(props.id)
    const [name, setName] = useState(props.name)
    const [image, setImage] = useState('')

    
    const handelSubmit = async (e) => {
        e.preventDefault();


        const formData = new FormData();
        formData.append('name', name);
        formData.append('id', id);
        if (image != '') {
            formData.append('image', image)
        }
        const respons = await postService.upded(formData);
        if(respons) {
            setShow(false)
        }



    }








    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <form onSubmit={handelSubmit}>
                    <Modal.Body>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="" />
                        <input type="file" onChange={(e) => setImage(e.target.files[0])} name="image" id="" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button type='submit' variant="primary">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </form>



            </Modal>
        </>
    );
};

export default Postmodel;