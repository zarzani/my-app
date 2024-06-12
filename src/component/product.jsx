import { Component } from "react";

class Product extends Component {
    render() {
        return (<div>
            <span className="m-2 text-info">product name</span>
            <span className="bagde bg-primary m-2">2</span>
            <button type="button" className="btn btn-danger"> +</button>
            <button type="button" className="btn btn-warning">-</button>

            <button className="deleteBtn">delete</button>
        </div>);

    }
}
export default Product; 