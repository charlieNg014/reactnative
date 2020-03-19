import React, { Component } from 'react'
import {productList} from "./data"


//create context
const ProjectContext = React.createContext();

//set default state
class ProjectProvider extends Component {
    state = {
        listProduct: [],
        latestList: []
    }

    //setState
    componentDidMount() {
        this.setState({
            listProduct: [],
            latestList: productList
        }) 
    }

    //add new product to cart
    addProduct = (newProduct) => {
        const listProduct = [];
        this.setState({
            listProduct: this.state.listProduct.concat(newProduct)
        })
        this.addProductList(newProduct, this.state.latestList);
        return listProduct;
    }

    //remove product
    removeProduct =(item, recentList, latestList) => {
        const listProduct = [];
        recentList.splice(recentList.indexOf(item), 1);

        this.setState({
            listProduct: recentList
        })
        this.removeProductList(item, this.state.latestList);

        return listProduct;
    }

    //update to the latestList
    addProductList = (item, list) => {
        let id = item.id;
        let price = item.price;
        let image = item.image;
        let title = item.title;
        let availability = item.availability;
        let amount = item.amount;
        let inCart = true;

        
        let  trueStateProduct = {
                id,
                price,
                image,
                title,
                availability,
                amount,
                inCart
            }

        // console.log(changedStateProduct);

        // console.log(list.indexOf(trueStateProduct));
        list.splice(list.indexOf(item), 1, trueStateProduct);

        // console.log(list);

        this.setState({
            latestList: list
        })

    }

    removeProductList = (item, newLatestList) => {
        let id = item.id;
        let price = item.price;
        let image = item.image;
        let title = item.title;
        let availability = item.availability;
        let amount = 1;
        let inCart = false;

        
        let  falseStateProduct = {
                amount,
                availability,
                id,
                image,
                inCart,
                price,
                title
            }
        let index = 0;
        console.log(falseStateProduct);

        for (var i = 0; i < newLatestList.length; i++) {
            if (newLatestList[i].id === falseStateProduct.id) {
                newLatestList.splice(i, 1, falseStateProduct);
            } else {
                console.log("Unmatch")
            }
        }
        this.setState({
            latestList: newLatestList
        })
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
        // console.log(newProduct); 

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
        // console.log(newProduct); 

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
                  decreaseAmount: this.decreaseAmount,
                  addProductList: this.addProductList
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