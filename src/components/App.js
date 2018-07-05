import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Product from './Product';

class App extends Component {
  constructor() {
    super();
    // this.updateSearch = this.updateSearch.bind(this);
    this.state = {
      products: [],
      // search: '',
    };
  }
  // updateSearch(event) {
  //   this.setState({search: event.traget.value.substr(0,100)})
  // }
  componentDidMount() {
    fetch('https://api.crystallize.digital/graphql?query={%20category(url:%20%22/Illustrations%22,%20tenantID:%20%22assignment%22)%20{%20breadcrumbs%20{%20name%20breadcrumb%20}%20products%20{%20name%20link%20price%20product_image%20}%20}%20}')
    .then(results => {
      return results.json();
    })
    .then(data => {
      let products = data.data.category.products;
      this.setState({products: products});
    })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <ul>
          {/* <form>
            <input type="text" value={this.state.search} onChange={this.updateSearch} />
          </form> */}
            {Object.keys(this.state.products).map(key => <Product className="product" key={key} details={this.state.products[key]} />)}

        </ul>
      </div>
    );
  }
}

export default App;


