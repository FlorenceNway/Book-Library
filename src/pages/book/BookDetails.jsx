import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Layout from '../../components/layout/Layout';

const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.bookReducer?.data);
  console.log(books[id]);
  return <Layout>Details</Layout>;
};

export default BookDetails;
