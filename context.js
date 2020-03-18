import React, { Component } from 'react'
import productList from "./data"


//create context
const ProjectContext = React.createContext();

//set default state
class ProjectProvider extends Component {
    state = {
        listProduct: []
    }

    //setState
    componentDidMount() {
        this.setState({
            listProduct: []
        }) 
    }

    //add new product to cart
    addProduct = (newProduct) => {
        const listProduct = [];
        this.setState({
            listProduct: this.state.listProduct.concat(newProduct)
        })
        return listProduct;
    }

    //remove product
    removeProduct =(item) => {
        const listProduct = [];
        this.setState({
            listProduct: this.state.listProduct.splice(this.state.listProduct.indexOf(item), 1)
        })

        return listProduct;
    }

    //update the amount
    increaseAmount = (item, list) => {
        //define new elementsitem
        let id = item.id;
        let price = item.price;
        let image = item.image;
        let title = item.title;
        let availability = item.availability;
        let amount = item.amount + 1;

        let newProduct = {
                    id,
                    price,
                    image,
                    title,
                    availability,
                    amount
            }
        console.log(newProduct); 

        //replace in the array
        list.splice(list.indexOf(item), 1, newProduct);

        //set new state
        const listProduct = [];
        this.setState({
            listProduct: list
        })
        return listProduct;
    }

    decreaseAmount = (item, list) => {
        //define new elementsitem
        let id = item.id;
        let price = item.price;
        let image = item.image;
        let title = item.title;
        let availability = item.availability;
        let amount = item.amount - 1;

        let newProduct = {
                    id,
                    price,
                    image,
                    title,
                    availability,
                    amount
            }
        console.log(newProduct); 

        //replace in the array
        list.splice(list.indexOf(item), 1, newProduct);

        //set new state
        const listProduct = [];
        this.setState({
            listProduct: list
        })
        return listProduct;
    }

    render () {
        return (
            <ProjectContext.Provider value = {
                {
                  ...this.state,
                  //function export goes here   
                  addProduct: this.addProduct,
                  removeProduct: this.removeProduct,
                  increaseAmount: this.increaseAmount,
                  decreaseAmount: this.decreaseAmount
                }
            }>
                {this.props.children}
            </ProjectContext.Provider>
        )
    }
}

const ProjectConsumer = ProjectContext.Consumer;
export function withProjectConsumer(Component) {
    return function COnsumerWrapper(props) {
        return (
            <ProjectConsumer>
                {value => <Component {...props} 
                    context = {value}
                    />
                }
            </ProjectConsumer>
        )
    }
}

export {ProjectContext, ProjectProvider, ProjectConsumer};