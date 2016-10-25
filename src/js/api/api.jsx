import ServerAction from "../actions/server-action";

let API = {
    fetchLinks() {
        console.log('1. In API')

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                return res.json();
            })
            .then(res => {
                ServerAction.receiveLinks(res);
            })
            .catch(err => {
                console.err(err);
            });
    }
};

export default API;