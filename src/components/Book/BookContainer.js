import { connect } from 'react-redux'
import BookItemWrapper from './BookItemWrapper';

const mapStateToProps = state => ({
});

const mapDispatchToProps =  dispatch => ({
    createNewBooking: bookInfo => {
      const bookItem = {
        packageNumber: bookInfo.inputPackageNumber,
        pickupTime: bookInfo.inputPickupTime
      };
    //   console.log(bookItem)
    //   TodoResource.createTodo(newTodoItem)
    //     .then(res => res.json())
    //     .then(({id, status, content}) => {
    //       dispatch({
    //         type: 'ADD_TODO',
    //         payload: {id, status, content}
    //       })
    //     })
    }
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BookItemWrapper)
  