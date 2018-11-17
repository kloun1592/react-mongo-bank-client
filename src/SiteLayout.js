import {Component} from "react";
import {
    Button,
    Cell,
    Content,
    Grid,
    Header,
    HeaderRow,
    HeaderTabs,
    Layout,
    Menu,
    MenuItem,
    Tab,
    Textfield
} from "react-mdl";

import PaymentsTable from "./PaymentsTable";
import Form from './Form';
import React from "react";
import AboutCompaniesPeople from './AboutCompaniesPeople';
import { BrowserRouter as Router, Route, Link, IndexRoute, Switch } from "react-router-dom";
import Page404 from './Page404';

class SiteLayout extends Component {

    render() {
        return (
            <div className="main-container" style={{}}>

                <Layout fixedHeader>

                    <Header>
                        <HeaderRow title="ООО 'Шпунтик'">
                            <Textfield className="search-field" accent
                                       value=""

                                       label="Search2"
                                       expandable
                                       expandableIcon="search"
                            />
                        </HeaderRow>
                        <HeaderTabs ripple>
                            <Link to="/receipts" className="link-tab">Поступления</Link>
                            <Link to="/withdrawals" className="link-tab">Списания</Link>
                            <Link to="/info" className="link-tab">О компании</Link>
                            <Button className="header-button" id="create-payment-button" raised accent ripple>Создать</Button>
                            <Menu target="create-payment-button" align="right">
                                <MenuItem>Платёж в рублях</MenuItem>
                                <MenuItem>Счёт на оплату</MenuItem>
                            </Menu>
                        </HeaderTabs>
                    </Header>


                    <Content>
                        <div className="main-content">
                            <Grid>
                                <Cell col={12} phone={4}>
                                    <Switch>
                                        <Route exact path="/receipts" component={() => <PaymentsTable title={"Дата поступления"}  />}/>
                                        <Route exact path="/withdrawals" component={() => <PaymentsTable title={"Дата списания"} />}/>
                                        <Route exact path="/info" component={AboutCompaniesPeople} />
                                        <Route component={Page404}/>
                                    </Switch>
                                </Cell>
                                <Cell col={12}>
                                </Cell>
                            </Grid>
                        </div>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default SiteLayout;
