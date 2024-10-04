const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book: function(){}   old method
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
  },
};

lufthansa.book(239, "Mihir");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 255, "Jonas");

// Apply Method
const flightData = [583, "DB Cooper"];
book.apply(eurowings, flightData);

// Call method (new)
book.call(eurowings, ...flightData);

// bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
bookEW(679, "Yolo");
bookLH(97, "MM");
