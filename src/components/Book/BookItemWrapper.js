import React, {Component} from 'react';
import BookItem from './BookItem';

export default class BookItemWrapper extends Component {
    
    createNewBookingWrapper = bookInfo => {
        if(bookInfo) {
          this.props.createNewBooking(bookInfo);
        }
        console.log(bookInfo)
    };
    render() {
        return (
          <div className="book-wrapper">
            <BookItem createNewBooking={this.createNewBookingWrapper}/>
          </div>
        )
      }
}