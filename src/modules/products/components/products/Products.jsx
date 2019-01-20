import React from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../../../configs/config';
import styles from './products.css';

class Products extends React.Component {
  async componentDidMount() {
    const { match: { params: { ctRouteName } } } = this.props;
    const { dispatchGetProducts } = this.props;
    dispatchGetProducts(ctRouteName);
  }

  render() {
    const { isLoading, items } = this.props; // FIXME: change style names
    return (
      <React.Fragment>
        {!isLoading && items && (
          <div className={styles.fbs}>
            {items.map(ft => (
              <div key={ft._id} className={styles.fb}>
                <Link to={`/fb/${ft._id}`}>
                  <img className={styles.shoesPhoto} src={`${API_URL}images/${ft.imageName}`} />
                </Link>
                <p className={styles.shoesName}>{ft.name}</p>
                <p className={styles.shoesDescription}>{ft.description}</p>
              </div>
            ))
            }
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Products;
