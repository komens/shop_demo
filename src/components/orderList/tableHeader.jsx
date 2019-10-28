import React from "react";

const TableHeader = ({ order }) => {
  return (
    <div className="table-header">
      <h5>订单编号：{order.id}</h5>
      <p>生成时间：{order.date}</p>
    </div>
  );
};

export default TableHeader;
