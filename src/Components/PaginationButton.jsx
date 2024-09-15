import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ReactPaginate from "react-paginate";

const PaginationButton = ({ setCurrentPage, CurrentPage }) => {
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  return (
    <div className=" my-10">
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-green-200 text-black ">
            <BsChevronRight />
          </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={20}
        previousLabel={
          <span className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-green-200 text-black">
            <BsChevronLeft />
          </span>
        }
        containerClassName="flex items-center justify-center space-x-4 lg:space-x-5"
        pageClassName=" border-solid border-green-200  hover:bg-green-600 flex h-10 w-10 items-center justify-center rounded-md cursor-pointer "
        activeClassName="bg-green-600 text-white"
      />
    </div>
  );
};

export default PaginationButton;
