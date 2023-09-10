import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="pagination">
      <button
        type="button"
        className="pagination-previous"
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <button
        type="button"
        className="pagination-next"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

export default Pagination;
