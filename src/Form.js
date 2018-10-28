import {Component} from "react";
import {Button, Textfield} from "react-mdl";
import React from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {login: '', password: ''};

        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        alert(`${this.state.login}, добро пожаловать!`);
        event.preventDefault();
    }

    onPasswordChange(event){
        this.setState({password: event.target.value});
    }

    onLoginChange(event) {
        this.setState({login: event.target.value});
    }

    render() {
        return (
            <form className="payment-in-rubles" onSubmit={this.onSubmit}>
                <div>
                    <Textfield
                        type="text"
                        name="login"
                        value={this.state.login}
                        pattern="/^[А-Яа-яA-Za-z0-9\s_-]+$/u"
                        error="Недопустимый формат!"
                        label="Наименование контрагента/получателя/ФИО"
                        floatingLabel
                        style={{width: '200px'}}
                        onChange={this.onLoginChange}
                    />
                </div>
                <div>
                    <Textfield
                        type="text"
                        name="inn"
                        pattern="-?[0-9]*(\.[0-9]+)?"
                        error="Недопустимый формат!"
                        label="ИНН контрагента/получателя"
                        floatingLabel
                        style={{width: '200px'}}
                    />
                </div>
                <div>
                    <Textfield
                        type="text"
                        name="inn"
                        pattern="-?[0-9]*(\.[0-9]+)?"
                        error="Недопустимый формат!"
                        label="КПП контрагента/получателя"
                        floatingLabel
                        style={{width: '200px'}}
                    />
                </div>
                <div>
                    <Textfield
                        type="text"
                        name="inn"
                        pattern="-?[0-9]*(\.[0-9]+)?"
                        error="Недопустимый формат!"
                        label="Счёт получателя"
                        floatingLabel
                        style={{width: '200px'}}
                    />
                </div>
                <div>
                    <Textfield
                        type="text"
                        name="inn"
                        pattern="-?[0-9]*(\.[0-9]+)?"
                        error="Недопустимый формат!"
                        label="БИК банка получателя"
                        floatingLabel
                        style={{width: '200px'}}
                    />
                </div>
                <div>
                    <Textfield
                        type="text"
                        name="inn"
                        pattern="-?[0-9]*(\.[0-9]+)?"
                        error="Недопустимый формат!"
                        label="Счет списания"
                        floatingLabel
                        style={{width: '200px'}}
                    />
                </div>
                <div>
                    <Textfield
                        type="text"
                        name="inn"
                        label="Назначение платежа"
                        floatingLabel
                        style={{width: '200px'}}
                    />
                </div>
                <div>
                    <Textfield
                        type="text"
                        name="inn"
                        label="Номер платежного поручения"
                        floatingLabel
                        style={{width: '200px'}}
                    />
                </div>
                <Button raised accent ripple type="submit" value="Submit">Отправить</Button>
            </form>
        );
    }
}

export default Form;
