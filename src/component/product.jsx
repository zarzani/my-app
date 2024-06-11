import { Button } from "bootstrap";
import { Component } from "react";

class Product extends Component {
    render() {
        return(<div>
        <span>product name</span>
        <span>2</span>
        <Button>+</Button>
        <Button>-</Button>
        <Button>delete</Button>
        </div>);
        
    }
}
export default Product;
