import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
import React from 'react';

type PaginationProps = {
  value: number;
  onChangePage: (page: number) => void;
}

const Pagination: React.FC <PaginationProps> = ({onChangePage, value}) => {

  return (
    <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={(e) => onChangePage(e.selected + 1 )}
    pageRangeDisplayed={4}
    pageCount={3}
    forcePage={value - 1} 
  />
  );
}
 
export default Pagination;