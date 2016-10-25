import AppDispatcher from "../AppDispatcher"
import { Actiontypes } from "../Constants";

let ServerAction = {
    receiveLinks(links) {
        console.log('2.  In ServerAction');

        AppDispatcher.dispatch({
            actionType: Actiontypes.RECEIVE_LINKS,
            links
        })
    }
};

export default ServerAction;