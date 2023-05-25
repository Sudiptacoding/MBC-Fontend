import React, { useState } from 'react'
import postService from '../../postService/postService.jsx';
import ShowUser from '../ShowUser/ShowUser.jsx';

const Home = () => {
    const [name, setName] = useState('')
    const [file, setFile] = useState('')
    const [message, setMessage] = useState('')
    const [image, setimage] = useState('')

    const handelsubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('name', name);
        formData.append('image', file);

        const respon = await postService.create(formData);
        if (respon.data.success == true) {
            setMessage('user added successfully')
            setimage(respon.data.data.image)
        } else {
            setMessage('')
            setimage('')
        }

        setTimeout(() => {
            setMessage('')
            setimage('')
        }, 2000);

        e.target.reset();

    }


    return (
        <div>
            <form action="" onSubmit={handelsubmit}>
                <input type="text" name="name" onChange={(e) => setName(e.target.value)} id="" />
                <input type="file" name="image" onChange={(e) => setFile(e.target.files[0])} id="" />
                <button type="submit">Click now</button>
            </form>
            {
                <div>
                    <h1>{message}</h1>
                  <img src={`http://localhost:5000/postimage/${image}`} alt="" />
                </div>
            }
            <ShowUser></ShowUser>
        </div>
    );
};

export default Home;