import React, { useState } from "react";

function ShowCustomerCallBack({ customer }) {
  return (
    <div>
      {customer.name} ({customer.phoneNumber})
    </div>
  );
}

function ShowCustomerList({ customerList }) {
  return (
    <div>
      {customerList.map((customer) => {
        return <ShowCustomerCallBack customer={customer} key={customer.id} />;
      })}
    </div>
  );
}

export default ShowCustomerList;
