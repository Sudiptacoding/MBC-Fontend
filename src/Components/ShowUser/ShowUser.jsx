import React, { useEffect, useState } from 'react';
import postService from '../../postService/postService';
import Postmodel from '../postModal/Postmodel';




const ShowUser = () => {
    const [post, setPost] = useState({});

    const getUser = async () => {
        setPost(await postService.getPost())
    }
    useEffect(() => {
        getUser();
    }, [post]);

    const handelClick = async (id, e) => {
        const deletpost = await postService.deletPost(id)
        if (deletpost) {
            // document.getElementById(id).parentElement.parentElement.remove();
        }else{
            alert(deletpost.data.msg)
        }
    }


    return (
        <div>
            {post.data != undefined && post.data.data.length > 0 && (
                post.data.data.map((data, i) => (
                    <div key={i}>
                        <div>{data.name}</div>
                        <img src={`http://localhost:5000/postimage/${data.image}`} alt="" style={{ width: '200px' }} />
                        <button id={data._id} onClick={(e) => handelClick(data._id, e)}>Delet</button>       
                        <Postmodel id={data._id} name={data.name} image={data.image}></Postmodel>                 
                    </div>
                ))
            )}

        </div>
    );
};

export default ShowUser;