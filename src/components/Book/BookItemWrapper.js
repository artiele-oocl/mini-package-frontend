import React, {Component} from 'react';
import BookItem from './BookItem';

export default class BookItemWrapper extends Component {
    
    createNewBooking = bookInfo => {
        if(bookInfo) {
          this.props.createNewBooking(bookInfo);
        }
    };
    render() {
        return (
          <div className="book-wrapper">
            <BookItem createNewBooking={this.createNewBooking}/>
          </div>
        )
      }
}