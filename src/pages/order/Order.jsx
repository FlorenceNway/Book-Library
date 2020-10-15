import React from 'react';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Segment, List, Button } from 'semantic-ui-react';
import Layout from '../../components/layout/Layout';
import { createOrder } from '../../service/order/orderAction';

const Order = () => {
  const orders = useSelector((state) => state.orderReducer.data);
  const books = useSelector((state) => state.bookReducer?.data);
  const orderGroups = _.groupBy(orders, 'id');
  const dispatch = useDispatch();

  const passedData = _.map(orderGroups, (order, index) => {
    const book = books[index];
    const quantity = order.length;
    return {
      bookId: book.id,
      quantity,
    };
  });

  return (
    <Layout>
      <Container>
        <Grid>
          <Grid.Column computer={8}>
            <Segment padded>
              <List divided relaxed>
                {_.map(orderGroups, (order, index) => {
                  const book = books[index];
                  return (
                    <List.Item key={_.uniqueId()}>
                      <List.Content floated="right">
                        <List.Description>{`Quantity: ${order.length}`}</List.Description>
                      </List.Content>
                      <List.Content>
                        <List.Header>{book.name}</List.Header>
                        <List.Description>{book.description}</List.Description>
                      </List.Content>
                    </List.Item>
                  );
                })}
                {/* {_.map(orders, (order) => {
                  const book = books[order];
                  return (
                    <List.Item key={_.uniqueId()}>
                      <List.Content>
                        <List.Header>{book.name}</List.Header>
                        <List.Description>{book.description}</List.Description>
                      </List.Content>
                    </List.Item>
                  );
                })} */}
              </List>
            </Segment>
            <Button
              primary
              floated="right"
              onClick={() => dispatch(createOrder(passedData))}
            >
              Order Now
            </Button>
          </Grid.Column>
        </Grid>
      </Container>
    </Layout>
  );
};
export default Order;
