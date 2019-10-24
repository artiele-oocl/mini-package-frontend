import { connect } from 'react-redux'
import BookItemWrapper from './BookItemWrapper';
import BookResource from '../../api/BookResource';

const mapStateToProps = state => ({
});

const mapDispatchToProps =  dispatch => ({
    createNewBooking: bookInfo => {
      const bookItem = {
        packageNumber: bookInfo.inputPackageNumber,
        pickUptime: bookInfo.inputPickupTime
      };
      BookResource.createBooking(bookItem)
        .then(res => res.json())
        .then(({packageNumber, pickUptime}) => {
          dispatch({
            type: 'ADD_TODO',
            payload: {packageNumber, pickUptime}
          })
        })
    }
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BookItemWrapper)
  