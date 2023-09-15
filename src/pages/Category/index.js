import Header from 'components/Header';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function index() {
  const categoryName = useParams();
  // const category = useSelector((state) =>
  //   state.categories.find((category) => category.id === categoryName)
  // );
  return (
    <div>
      <Header
        title={category.name ? category.name : ''}
        description={category.description ? category.description : ''}
        image={category.header ? category.header : ''}
      />
    </div>
  );
}

export default index;
