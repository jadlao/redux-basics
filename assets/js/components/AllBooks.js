import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openingInfoBook } from './../actions/allActions';

class AllBooks extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	clickedBtn = () => {};

	showAllBooks = () => {
		return this.props.booksData.map(book => {
			return (
				<div className="book-container" key={book.id}>
					<div
						onClick={this.props.openingInfoBook.bind(null, book)}
						className="book"
						style={{
							backgroundImage: `url('${book.coverURL}')`
						}}
					/>
				</div>
			);
		});
	};

	async test() {}
	render() {
		return <section className="all-books">{this.showAllBooks()}</section>;
	}
}
const mapStateToProps = state => {
	//console.log(state);
	return state;
};
export default connect(
	mapStateToProps,
	{
		openingInfoBook
	}
)(AllBooks);
