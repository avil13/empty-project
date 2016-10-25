import React from "react";
import API from "../api/api";
import LinkStore from "../stores/link-store";


let _getAppState = () => {
    return { links: LinkStore.getAll() };
};


export default class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = _getAppState();
        this.onChange = this.onChange.bind(this);
    }

    render() {
        let content = this.state.links.map(link => {
            return <li key={link.id} class="list-group-item"> {link.title} </li>
        });

        return (
            <div>
                <h1>Hello world</h1>
                <ul class="list-group"> {content} </ul>
            </div>
        );
    }

    componentDidMount() {
        LinkStore.on("change", this.onChange);
        API.fetchLinks();
    }

    onChange() {
        console.log('3.1 change')
        this.setState(_getAppState());
    }

    componentWillUnmount() {
        console.log('4. In the Unmount')
        LinkStore.removeListener("change", this.onChange);
    }
}