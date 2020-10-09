import React, { useEffect, useState } from 'react';
import {
  Button,
  Grid,
  Table,
  TableCell,
  Container,
  Dropdown,
  Segment,
  Loader,
} from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { getAllBooks, selectBook } from '../../service/book/bookAction';
import { addToCart } from '../../service/order/orderAction';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.bookReducer?.data);
  const isPending = useSelector((state) => state.bookReducer?.isPending);
  const filterValue = useSelector((state) => state.bookReducer?.filterData);
  const [selectedValue, setSelectedValue] = useState('All');
  const filterMenu = _.groupBy(filterValue, 'name');
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllBooks());
  }, []); // same as onSucess

  return (
    <div>
      <Layout title="Books">
        <Container>
          <Dropdown placeholder={selectedValue}>
            <Dropdown.Menu>
              <Dropdown.Item
                key="All"
                onClick={() => {
                  setSelectedValue('All');
                  dispatch(selectBook('All'));
                }}
              >
                All
              </Dropdown.Item>
              {_.map(filterMenu, (menu, index) => {
                // index return the key
                return (
                  <Dropdown.Item
                    key={index}
                    onClick={() => {
                      setSelectedValue(index);
                      dispatch(selectBook(index));
                    }}
                    value={index}
                  >
                    {index}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>

          <Grid>
            <Grid.Row>
              <Grid.Column>
                {isPending ? (
                  <Segment style={{ height: 500 }}>
                    <Loader active />
                  </Segment>
                ) : (
                  <Table>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Quantity</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {/* {books.map((book, index) => ( */}
                      {_.map(books, (book, index) => (
                        <Table.Row key={book.id}>
                          <Table.Cell>{index + 1}</Table.Cell>
                          <Table.Cell>{book?.name}</Table.Cell>
                          <Table.Cell>{book?.description}</Table.Cell>
                          <Table.Cell>{book?.quantity}</Table.Cell>
                          <TableCell>
                            <Button color="red">DELETE</Button>
                            <Button
                              secondary
                              onClick={() => history.push(`/books/${book.id}`)}
                            >
                              Detail
                            </Button>
                            <Button
                              disabled={!book.quantity || book.quantity <= 0}
                              primary
                              onClick={() => dispatch(addToCart(book.id))}
                            >
                              Add to cart
                            </Button>
                          </TableCell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table>
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Layout>
    </div>
  );
};
export default BookList;
