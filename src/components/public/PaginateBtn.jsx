import React, { useEffect, useState } from "react";

const PaginateBtn = ({ totalPages }) => {
  const [pages, setPages] = useState([1,2,3])

  console.log(pages)
  return (
    <div className="btn-group">
      {
        pages.map(page => {
          <input type="radio" name="options" data-title={page.toString} className="btn" />
        })
      }

    </div>
  );
};

export default PaginateBtn;
