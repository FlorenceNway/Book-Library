import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Icon, Menu, Label } from 'semantic-ui-react';
import styles from './layout.module.scss';

const Layout = ({ children }) => {
  // {children} all components under Layout will be shown, no need to write each
  const history = useHistory();
  const orders = useSelector((state) => state.orderReducer.data);
  return (
    <div>
      <Menu className={styles.menuLayout} size="huge" fixed="top">
        <Menu.Item
          name="Books"
          className={styles.menuItem}
          onClick={() => history.push('/')}
        />
        <Menu.Item
          name="New"
          className={styles.menuItem}
          onClick={() => history.push('/books/new')}
        />
        <Menu.Item
          name="New"
          className={styles.menuItem}
          onClick={() => history.push('/books/new')}
        />
        <Menu.Item name="cart" position="right">
          <Icon name="cart" color="yellow" />
          <Label color="teal">{orders.length}</Label>
        </Menu.Item>
      </Menu>
      <div className={styles.layoutSection}>{children}</div>
    </div>
  );
};
export default Layout;
