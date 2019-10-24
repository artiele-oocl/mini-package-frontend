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
          <div className="todo-wrapper">
            <TodoInput onNewTodoAdded={this.addNewTodo}/>
            <Todos todos={this.props.todos} patchStatus={this.patchStatus}/>
            <BookItem createNewBooking={this.createNewBooking}/>
          </div>
        )
      }
}