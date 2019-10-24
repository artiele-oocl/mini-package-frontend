import { connect } from 'react-redux'
import BookItemWrapper from './BookItemWrapper';
import BookResource from '../../api/BookResource';

const mapStateToProps = state => ({
});

const mapDispatchToProps =  dispatch => ({
    createNewBooking: bookInfo => {
      const bookItem = {
        packageNumber: bookInfo.inputPackageNumber,
        pickupTime: bookInfo.inputPickupTime
      };
      BookResource.createBooking(bookItem)
        .then(res => res.json())
        .then(({packageNumber, pickupTime}) => {
          dispatch({
            type: 'ADD_TODO',
            payload: {packageNumber, pickupTime}
          })
        })
    }
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BookItemWrapper)
  