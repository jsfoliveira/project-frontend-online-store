import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class Product extends React.Component {
  render() {
    const { info, addCart } = this.props;
    const freeShipping = info.shipping.free_shipping;

    return (
      <div className={ info.id }>
        <Link to={ `/product/${info.id}` } data-testid="product-detail-link">
          <div data-testid="product">
            <p>
              {info.title}
            </p>
            <img src={ info.thumbnail } alt={ info.title } />
            <p>
              {`R$ ${info.price}`}
            </p>
          </div>
        </Link>
        {(freeShipping && <p data-testid="free-shipping">Frete Grátis</p>)}
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ (event) => addCart(event, info) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Product.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
  addCart: PropTypes.func,
}.isRequired;

export default Product;
