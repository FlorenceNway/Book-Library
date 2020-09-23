import React from 'react';
import { useHistory } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import styles from './layout.module.scss';

const Layout = ({ children }) => {
  // {children} all components under Layout will be shown, no need to write each
  const history = useHistory();
  return (
    <div>
      <Menu className={styles.menuLayout} size="huge" fixed="top">
        <Menu.Item name="editorials" className={styles.menuItem} />
        <Menu.Item name="reviews" className={styles.menuItem} />
        <Menu.Item
          name="New"
          className={styles.menuItem}
          onClick={() => history.push('/books/new')}
        />
      </Menu>
      <div className={styles.layoutSection}>{children}</div>
    </div>
  );
};
export default Layout;
