/** Simple constructor to demonstrate the observer design pattern */
function Observer() {
    const subscribers = {};
  
    this.subscibe = function (event, cb) {
      if (subscribers[event]) {
        return subscribers[event].push(cb);
      }
  
      subscribers[event] = [cb];
      return subscribers[event].length;
    };
  
    this.publish = function (event, ...args) {
      if (!subscribers[event]) {
        return false;
      }
  
      const subs = subscribers[event];
  
      if (subs.length < 0) {
        return false;
      }
  
      subs.forEach((subscriber) => {
        return subscriber(...args);
      });
  
      return true;
    };
  
    this.unsubscribe = function (event, cb) {
      if (!subscribers[event]) {
        return false;
      }
      subs = subscribers[event];
  
      if (subs.length < 0) {
        return false;
      }
  
      subs.forEach((func, index) => {
        if (func === cb) {
          console.log(
            "Observer found. Unsubscribing this observer for this event ..."
          );
          return subscribers[event].splice(index, 1);
        }
      });
  
      return true;
    };
  }
  
  
  const addbook = (bookname, arr) => {
    const newbook = { bookname, available: true };
    return arr.push(newbook);
  };
  
  
  const lendbook = (bookname, arr) => {
    let a;
    arr.map((book) => {
      if (book.bookname === bookname) {
        console.log(`${book.bookname} found in books, renting ...`);
        book.available = false;
        return (a = book);
      }
    });
    return a;
  };
  
  
  const bookdetails = (type, arr) => {
    if (type === "full") {
      return arr.length;
    } else if (type === "rented") {
      const rentedBooks = arr.filter((book) => {
        return book.available === false;
      });
  
      return rentedBooks.length;
    } else if (type === "available") {
      const availableBooks = arr.filter((book) => {
        return book.available === true;
      });
  
      return availableBooks.length;
    } else {
      throw new TypeError("Passed parameter type is not recognised");
    }
  };
  
  module.exports = Observer;
  module.exports =addbook;
  module.exports =lendbook;
  module.exports = bookdetails;
  
  