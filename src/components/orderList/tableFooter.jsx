import React from "react";

const TableFooter = ({ order }) => (
  <div className="table-footer">
    <p>
      合计：<span>￥ {order.count}</span>
    </p>
  </div>
);

export default TableFooter;
