import React from 'react';
import uuid from 'uuid/v4';
import { API_URL } from '../../../../configs/config';
// import InfoWindow from '../InfoWindow/InfoWindow';
import styles from './productInfo.css';

class ProductInfo extends React.Component {
  state = {
    fb: null,
    sizes: null,
    size: null,
    serverInfo: '',
  };

  async componentDidMount() {
    const { params: { fbId } } = this.props; // FIXME: naming fbId
    const { dispatchGetProduct, dispatchGetSizes } = this.props;
    dispatchGetProduct(fbId);
    dispatchGetSizes(fbId);
  }

  addProductToBasket = () => {
    const { size, fb } = this.state;
    let prod = { ...fb, size: size, id: uuid() };
    let products = JSON.parse(localStorage.getItem('products'));
    if (products == null) {
      let p = [];
      p.push(prod);
      localStorage.setItem('products', JSON.stringify(p));
    } else {
      products.push(prod);
      localStorage.setItem('products', JSON.stringify(products));
    }
    this.props.onAddProductToBasket(prod);
    this.setState({ serverInfo: 'Success added to basket'});
    setTimeout(() => {
      this.setState({ serverInfo: ''});
    }, 3000);
  }

  changeSize = (event) => {
    this.setState({ size: event.target.value });
  }

  render() {
    const { fb, size, serverInfo } = this.state;
    const { isProductLoading, isSizesLoading, productData, sizes } = this.props;
    return (
      <div>
        {!isProductLoading && productData && (
          <div>
            <img className={styles.photo} src={`${API_URL}images/${productData.imageName}`} />
            <h1>{productData.name}</h1>
            <p>{productData.description}</p>
            <p>Price: {productData.price}</p>
            {!isSizesLoading && sizes && 
              sizes.map(size => (
                <label className={styles.sizeLabel} key={size._id}>
                  <input name="sizes" type="radio" value={size.size} className={styles.sizeInput} onChange={this.changeSize} />
                  <span className={styles.sizeSpan}>{size.size}</span>
                </label>
              ))
            }
            {
              sizes && sizes.err && <p>{sizes.err}</p>
            }
            {
              size && <button type="button" onClick={this.addProductToBasket}>Add to basket</button>
            }
            {
              size == null && <button type="button" onClick={this.addProductToBasket} disabled>Add to basket</button>
            }
          </div>
        )
        }
        { /* <InfoWindow text={serverInfo} /> */ }
      </div>
    );
  }
}

export default ProductInfo;
