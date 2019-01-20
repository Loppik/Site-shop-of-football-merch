import React from 'react';
import { Link } from 'react-router-dom';

import styles from './categories.css';

class Categories extends React.Component {
  componentDidMount() {
    const { dispatchGetCategories } = this.props;
    dispatchGetCategories();
  }

  render() {
    const { isLoading, items } = this.props;
    return (
      <React.Fragment>
        {!isLoading && items && (
          <div className={styles.categories}>
            { items.map(ct => (
              <Link to={`/ct/${ct.routeName}`} key={ct._id}>
                <div className={styles.category}>
                  <p className={styles.categoryName}>{ct.name}</p>
                </div>
              </Link>
            ))
            }
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Categories;
