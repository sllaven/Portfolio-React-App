import React from "react";
import Account from "../Account/Account";

const EditTable = ({accounts, deleteAccount}) => {

  const allAccounts = accounts.map(account => {
    return(
      <Account account={account} edit={true} deleteAccount={deleteAccount} key={account.id}/>
    )
  })
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <h3 className="display-4 m-4">Edit Accounts</h3>
          <div className="row">
            <div className="col-10 offset-1">
              <table className="table table-striped table-light">
                <thead className="thead-light">
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Lastname</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Action</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{allAccounts}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTable;