import React from 'react';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSort, selectSortObj, setCategoryId, setPageCount } from '../redux/slices/filterSlice';
import PizzaCard from '../components/PizzaCard';
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import Skeleton from '../components/PizzaCard/Skeleton';
import Pagination from '../components/Pagination';
import { fetchPizzas, selectPizzas } from '../redux/slices/pizzaSlice';
import { useAppDispach } from '../redux/store';

const HomePage: React.FC = () => {
  const sortType = useSelector(selectSort);
  const {categoryId, pageCount, searchValue} = useSelector(selectSortObj)
  const { items, status } = useSelector(selectPizzas);

  const dispatch = useAppDispach();
  const navigate = useNavigate();

  const onClickCategory = React.useCallback((id: number) => {
    dispatch(setCategoryId(id))
  }, []);

  const onChangePage = (page: number) => {
    dispatch(setPageCount(page));
  };

   const fetchData = async () => {

    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchPizzas({
      sortBy,
      order,
      category,
      search,
      pageCount: String(pageCount),
    }));
  };

  React.useEffect(() => {
     
    fetchData();
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, pageCount]);

  React.useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sortType,
      categoryId,
      pageCount
    });

    navigate(`?${queryString}`)
  }, [categoryId, sortType, pageCount])




  const pizzas = items.map((obj) => (<PizzaCard key={obj.id} {...obj} />));
  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort value={sortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div className='content__error-info'>
          <h2>Произошла ошибка 😧</h2>
          <p>К сожелению, не удалось получить питцы. Повторите попытку позже.</p>
        </div>
      ) : <div className="content__items">
        {status === 'loading' ? skeletons : pizzas}
      </div>
      }

      <Pagination value={pageCount} onChangePage={onChangePage} />
    </div >
  );
};

export default HomePage;
