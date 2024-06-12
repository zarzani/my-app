import { Component } from "react";

class Product extends Component {
    render() {
        return (<div>
            <span className="m-2 text-info">product name</span>
            <span className="bagde bg-primary m-2">2</span>
            <button type="button" className="btn m-2 btn-danger"> +</button>
            <button type="button" className="btn m-2 btn-warning">-</button>

            <button className="deleteBtn m-2">delete</button>
        </div>);

    }
}
export default Product; 