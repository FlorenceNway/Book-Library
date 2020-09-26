import React, { useState, useEffect } from 'react';
import { Button, Grid, Table, TableCell } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import Layout from '../../components/layout/Layout';
import { getAllBooks } from '../../service/book/bookAction';

const BookList = () => {
  const dispatch = useDispatch();
  const [books, setBooks] = useState();

  useEffect(() => {
    dispatch(getAllBooks);
  }, []);

  return (
    <div>
      <Layout>
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
                  <Table.Row>
                    <Table.Cell />
                    <Table.Cell />
                    <Table.Cell />
                    <Table.Cell />
                    <TableCell>
                      <Button>DELETE</Button>
                      <Button>Edit</Button>
                    </TableCell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    </div>
  );
};
export default BookList;
