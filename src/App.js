import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css"
import Header from "./components/Header/Header";
import AddAccount from "./components/Accounts/AddAccount/AddAccount";
import AccountsTable from "./components/Accounts/AccountsTable/AccountsTable";
import EditAccount from "./components/Accounts/EditAccounts/EditAccount";
import EditTable from "./components/Accounts/EditTable/EditTable";
import Home from "./components/Home/Home";
import Sidebar from "./components/Header/Sidebar/Sidebar";
import About from "./components/About/About";

class App extends Component {
    state = {
        accounts: [ 
            {
                id : "1",
                name : "Slaven",
                lastname: "Soldo",
                phone : "00 387 63 216 919",
                email: "slaven871@gmail.com"
            }
        ],
    };

    deleteAccount = (id) => {
        const accountsCopy = [...this.state.accounts];
        const newCopyAccounts = accountsCopy.filter((account) => account.id !== id);
        localStorage.data = JSON.stringify(newCopyAccounts);
        this.setState({ accounts: newCopyAccounts });
    };

    addNewAccountToState = (acc) => {
        localStorage.data = JSON.stringify([...this.state.accounts,acc])
        this.setState({
            accounts: [...this.state.accounts, acc],
        });
    };

    editAccount = (acc) => {
        const copyAccounts = [...this.state.accounts];
        let accountPosition = copyAccounts.map(account => account.id).indexOf(acc.id);
        copyAccounts[accountPosition] = acc;
        localStorage.data = JSON.stringify(copyAccounts);
        this.setState({ accounts: copyAccounts });
    }

    saveAccount = (account) => {
        localStorage.data = JSON.stringify([...this.state.accounts,account])
        this.setState({
            accounts: [...this.state.accounts, account],
        });
    }
    

    

    render() {
        return (
            <BrowserRouter>
                <Header />
                <Route path="/" exact>
                    <Home saveAccount={this.saveAccount} key={this.state.accounts.id}/>
                </Route>
                <Route path="/sidebar">
                    <Sidebar/>
                </Route>
                <Route path="/accounts" exact>
                    <AccountsTable accounts={this.state.accounts} />
                </Route>
                <Route path="/add">
                    <AddAccount addNewAccountToState={this.addNewAccountToState} />
                </Route>
                <Switch>
                    <Route path="/edit/:id">
                        <EditAccount accounts={this.state.accounts} editAccount={this.editAccount} />
                    </Route>
                    <Route path="/edit">
                        <EditTable
                            accounts={this.state.accounts}
                            deleteAccount={this.deleteAccount}
                        />
                    </Route>
                </Switch>
                <Route path="/about">
                    <About />
            </Route>
            </BrowserRouter>

        )
    }
}

export default App;