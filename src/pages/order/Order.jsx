import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { Container, Grid, Segment, List } from 'semantic-ui-react';
import Layout from '../../components/layout/Layout';

const Order = () => {
  const orders = useSelector((state) => state.orderReducer.data);
  const books = useSelector((state) => state.bookReducer.data);

  return (
    <Layout>
      <Container>
        <Grid>
          <Grid.Column computer={8}>
            <Segment padded>
              <List divided relaxed>
                {_.map(orders, (order) => {
                  const book = books[order];
                  return (
                    <List.Item key={_.uniqueId()}>
                      <List.Content>
                        <List.Header>{book.name}</List.Header>
                        <List.Description>{book.description}</List.Description>
                      </List.Content>
                    </List.Item>
                  );
                })}
              </List>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </Layout>
  );
};
export default Order;
