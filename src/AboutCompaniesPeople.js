import {Component} from "react";
import {Card, CardTitle, CardText, CardActions, IconButton, Button, CardMenu} from "react-mdl";
import React from "react";

class AboutCompaniesPeople extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

     componentDidMount() {
        this.getList();
      }

    getList = () => {
        fetch('/api/persons')
        .then(res => res.json())
        .then(list => this.setState({ list }))
      }

	render() {

		const { list } = this.state;

		return (
			<Card shadow={0} style={{width: '512px', margin: 'auto'}}>
			    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Ген. директор компании</CardTitle>
			    <CardText>
				    Имя: {typeof this.state.list[0] != 'undefined' ? this.state.list[0]['name'] : ''}
				    <br/>
				    Фамилия: {typeof this.state.list[0] != 'undefined' ? this.state.list[0]['surname'] : ''}
				    <br/>
				    Отчество: {typeof this.state.list[0] != 'undefined' ? this.state.list[0]['patronymic'] : ''}
			    </CardText>
			    <CardMenu style={{color: '#fff'}}>
			        <IconButton name="share" />
			    </CardMenu>
			</Card>
		);
	}
}


export default AboutCompaniesPeople;