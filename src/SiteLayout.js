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

class SiteLayout extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

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
                        <HeaderTabs ripple activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })}>
                            <Tab>Поступления</Tab>
                            <Tab>Списания</Tab>
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
                                    {this.state.activeTab === 0 ? <PaymentsTable title={"Дата поступления"}/> : <PaymentsTable title={"Дата списания"}/>}
                                </Cell>
                                <Cell col={12}>
                                    <Form/>
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
