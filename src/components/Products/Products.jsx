import getProductsBySearch from 'API/products';
import FormSearchProducts from 'components/FormFilterTodo/FormSearchProducts';
import Product from 'components/Product/Product';
import { Component } from 'react';

class Products extends Component {
  state = { isLoading: false, error: '', products: null, searchQuery: '' };

  handleSetSearchQuery = value => {
    this.setState({ searchQuery: value });
  };

  componentDidUpdate(_, prevState) {
    prevState.searchQuery !== this.state.searchQuery && this.fetchProducts();
  }

  fetchProducts = async () => {
    try {
      this.setState({ isLoading: true, products: null });
      const data = await getProductsBySearch(this.state.searchQuery);
      this.setState({ products: data.products });
    } catch (error) {
      this.setState({ error: error.response.data });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { error, isLoading, products } = this.state;
    return (
      <>
        {error && <h1>{error}</h1>}
        <FormSearchProducts submit={this.handleSetSearchQuery} />
        {isLoading && <h1>Loading...</h1>}
        {products &&
          (!products.length ? (
            <h1>No data found</h1>
          ) : (
            products.map(product => (
              <div key={product.id} className="container mt-3">
                <Product product={product} />
              </div>
            ))
          ))}
      </>
    );
  }
}

export default Products;
