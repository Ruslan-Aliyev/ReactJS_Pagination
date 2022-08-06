import './App.css';
import React, { useEffect, useState } from 'react';
import Pagination from "react-js-pagination";
import 'bootstrap/dist/css/bootstrap.min.css';

// https://www.npmjs.com/package/react-js-pagination
// https://medium.com/@kumarkaushik1580/pagination-in-react-js-using-react-js-pagination-library-689668b4b9db

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 10;
  const totalRecords = 40;

  const handlePageChange = (pageNumber) => {
    console.log(pageNumber);
    // Call AJAX
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App">
      <div className='page-pagination'>
        <Pagination
          prevPageText='Prev'
          nextPageText='Next'
          firstPageText='First'
          lastPageText='Last'
          activePage={currentPage}
          itemsCountPerPage={recordPerPage}
          totalItemsCount={totalRecords}
          onChange={handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    </div>
  );
}

export default App;
