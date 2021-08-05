import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css';

const Pagination = ({ pageRangeDisplayed = 6, marginPagesDisplayed = 1, ...props }) => (
  <ReactPaginate
    pageRangeDisplayed={pageRangeDisplayed}
    marginPagesDisplayed={marginPagesDisplayed}
    containerClassName={styles.pagination}
    pageClassName={styles.paginationItem}
    pageLinkClassName={styles.paginationItemLink}
    breakClassName={styles.paginationItem}
    activeClassName={styles.paginationItemActive}
    disabledClassName={styles.paginationButtonDisabled}
    previousLabel={'Previous'}
    previousClassName={styles.paginationButton}
    nextLabel={'Next'}
    nextClassName={styles.paginationButton}
    initialPage={0}
    disableInitialCallback
    {...props}
  />
);

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  pageRangeDisplayed: PropTypes.number,
  marginPagesDisplayed: PropTypes.number,
  forcePage: PropTypes.number,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
