import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=100";

// Export an object with a 
export default {
    fetchUsers: function () {
        return axios.get(BASEURL)
            // .then(res => {
            //     const results = res.data.results;
            //     console.log("res.data: ", results)
            //     return results.map(user => {
            //         console.log(user.login.username)
            //         return {
            //             login: user.login.username,
            //             name: user.name.first,
            //             image: user.picture.medium,
            //             email: user.email
            //         };      
            //     });
            // }).catch(err => {
            //     console.log(err)
            // }), [];
    }
};
