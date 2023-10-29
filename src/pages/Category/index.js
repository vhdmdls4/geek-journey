import Header from 'components/Header';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import style from './Category.module.scss';
import Item from 'components/Item';
import { itemsFilteredSelector } from 'store/reducers/items';

function CategoryPage() {
  const { categoryName } = useParams();

  const items = useSelector((state) => {
    return itemsFilteredSelector(state, categoryName);
  });

  return (
    <div>
      <Header />
      <div className={style.items}>
        {items?.map((item, index) => (
          <Item key={index} {...item}>
            {item.title}
          </Item>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
