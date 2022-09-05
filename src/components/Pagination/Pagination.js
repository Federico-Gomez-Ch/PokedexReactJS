import React from "react";
import "./Pagination.css";

const Pagination = (props) => {
  console.log(props);
  const { onLeftClick, onRightClick, page, totalPages } = props;
  return (
    <div className="pagination">
      <button onClick={onLeftClick}> Left </button>
      <div>
        {page} to {totalPages}
      </div>
      <button onClick={onRightClick}>Right</button>
    </div>
  );
};

export default Pagination;
