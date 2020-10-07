import axios from "axios";

const BASEURL = "https://randomuser.me/api/results=100";

// Export an object with a 
export default {
  fetchUsers: function() {
    return axios.get(BASEURL)
    .then(res => {
      const results = res.data;
      return results.map(user => {
        return {
          login: results.login.username,
          name: results.name.first,
          image: results.picture.medium,
          email: results.email
        };
      });
    }).catch(err => {
      console.log(err)
    }), [];
  }
};
