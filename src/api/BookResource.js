export default {
    createBooking: (bookInfo) => fetch(
      "http://localhost:9090/api/bookings", {
        mode: 'cors',
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(bookInfo)
      })
  }
  