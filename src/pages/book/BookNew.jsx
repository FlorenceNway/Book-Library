import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Segment, Header, Form, Button } from 'semantic-ui-react';
import Layout from '../../components/layout/Layout';
import { createBook } from '../../service/book/bookAction';

const BookNew = () => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [quantity, setQuantity] = useState();
  const dispatch = useDispatch();
  const bookReducer = useSelector((state) => state.bookReducer);

  const { isPending } = bookReducer;

  const onFormSubmit = () => {
    // console.log({ name, description });
    dispatch(createBook({ name, description, quantity }));
  };

  return (
    <div>
      <Layout goBack title="New Book">
        <Grid centered>
          <Grid.Row>
            <Grid.Column computer={8}>
              <Segment padded="very">
                <Header>Book New</Header>
                <Form onSubmit={onFormSubmit}>
                  <Form.Field>
                    <label> Name</label>
                    <input
                      placeholder="Name"
                      name="name"
                      onChange={(event) => setName(event.target.value)}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Description</label>
                    <input
                      placeholder="description.. "
                      name="description"
                      onChange={(event) => setDescription(event.target.value)}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Quantity</label>
                    <input
                      type="number"
                      placeholder="quantity.. "
                      name="quantity"
                      onChange={(event) => setQuantity(event.target.value)}
                    />
                  </Form.Field>
                  <Button
                    type="submit"
                    loading={isPending}
                    disabled={isPending}
                  >
                    Submit
                  </Button>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    </div>
  );
};
export default BookNew;
