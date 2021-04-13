import React, { Component } from "react";
import AccountsTable from "./AccountsTable/AccountsTable";
import AddAccount from "./AddAccount/AddAccount";


class Accounts extends Component {

    state = {
        accounts: [
          {
            id: 1,
            name: "Slaven",
            lastname: "Soldo",
            phone: "11-11-11-11",
            email: "slaven@gmail.com",
          },
          {
            id: 2,
            name: "Lana",
            lastname: "Soldo",
            phone: "22-22-22-22",
            email: "lana@gmail.com",
          },
        ],
      };
    
      deleteAccount = (id) => {
        const accountsCopy = [...this.state.accounts];
        const newCopyAccounts = accountsCopy.filter((account) => account.id !== id);
        this.setState({ accounts: newCopyAccounts });
      };
    
      addNewAccountToState = (acc) => {
        this.setState({
          accounts: [...this.state.accounts, acc],
        });
      };
    
      editAccount = (acc) => {
        const copyAccounts = [...this.state.accounts];
        let accountPosition = copyAccounts.map(account => account.id).indexOf(acc.id);
        copyAccounts[accountPosition] = acc;
        this.setState({accounts : copyAccounts});
      }
    render() {
        return (
            <>
                
                <AccountsTable accounts={this.state.accounts} />
                <AddAccount addNewAccountToState={this.addNewAccountToState} />
            </>

        )
    }
}

export default Accounts;