import axios from "axios";

class Post {

    create(formData) {
        const url = 'http://localhost:5000/create-post';
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        return axios.post(url, formData, config)
    };

    // get post

    getPost() {
        const url = "http://localhost:5000/get-post";
        return axios.get(url);
    }

    deletPost(id) {
        const url = "http://localhost:5000/delet-post/" + id;
        return axios.get(url);
    }

    // upded

    upded(formData) {
        const url = 'http://localhost:5000/upded-post';
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        return axios.post(url, formData, config)
    };

}
export default new Post();