import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllBooks from './AllBooks';
import MyList from './MyList';
import { openingMyList } from './../actions/allActions';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<div
				id="approot"
				className={this.props.globalState.popupOpen ? 'popupOpen' : ''}
			>
				<div className="container">
					<div
						onClick={this.props.openingMyList}
						className={`open-list 
							${this.props.globalState.listOpen == true ? 'open' : 'closed'}`}
					>
						<i className="fas fa-bars" />
					</div>
					<AllBooks />
				</div>
				<MyList />
			</div>
		);
	}
}

const mapStateToProps = state => {
	//console.log(state);
	return state;
};
export default connect(
	mapStateToProps,
	{
		openingMyList
	}
)(App);
