import React, { useEffect, useState } from 'react';
import {
  Button,
  Grid,
  Table,
  TableCell,
  Container,
  Dropdown,
} from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import Layout from '../../components/layout/Layout';
import { getAllBooks, selectBook } from '../../service/book/bookAction';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.bookReducer.data);
  const filterValue = useSelector((state) => state.bookReducer.filterData);
  const [selectedValue, setSelectedValue] = useState('All');
  const filterMenu = _.groupBy(filterValue, 'name');

  useEffect(() => {
    dispatch(getAllBooks());
  }, []); // same as onSucess

  return (
    <div>
      <Layout>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column>
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
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid>
            <Grid.Row>
              <Grid.Column>
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
                      <Table.Row>
                        <Table.Cell>{index + 1}</Table.Cell>
                        <Table.Cell>{book?.name}</Table.Cell>
                        <Table.Cell>{book?.description}</Table.Cell>
                        <Table.Cell>{book?.quantity}</Table.Cell>
                        <TableCell>
                          <Button>DELETE</Button>
                          <Button>Edit</Button>
                        </TableCell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Layout>
    </div>
  );
};
export default BookList;
