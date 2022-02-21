const {
  displayBooks,
  checkForBook,
  removeBookFromSectionList,
  displayRentedBooks,
  addBackToOriginalList,
  updateRentalList,
  addBook,
  rentedBooks,
} = require("./index.js");

let bookSection, bookToBeRented, rentalNumber;

describe("\nTests to display books available in a library section", () => {
  test("Check if displayBooks returns an array of books if section is within range", () => {
    //Assumes that the sections are only two. They can be found in the librarySections array declared in the bookLendingService
    bookSection = 1; //Science section

    expect(displayBooks(bookSection)).toStrictEqual([
      "MATHEMATICS",
      "PHYSICS",
      "CHEMISTRY",
    ]);
  });

  test("Check if displayBooks returns an error message if section is out of range", () => {
    bookSection = 3; //Unavailable library section
    expect(displayBooks(bookSection)).toBe("Section Unavailable.");
  });
});

describe("\nTests for what happens if a book is about to be rented using its serial number", () => {
  test("Return true if the serial number exist", () => {
    //Serial number  = bookToBeRented.
    //Serial Number = Index + 1. Where the index is that of the book to be rented found in a given section
    bookToBeRented = 2;
    bookSection = 1; //Science section
    let bookCheck = checkForBook(bookSection, bookToBeRented);

    expect(bookCheck).toBeTruthy();
    rentedBooks.pop(); //remove added book from the rentedBooks array.
  });

  test("Return false if the serial number does not exist", () => {
    //Here the science library section has only three books.
    bookToBeRented = 4;
    bookSection = 1; //Science section
    expect(checkForBook(bookSection, bookToBeRented)).toBeFalsy();
  });

  test("Check if a rented book has been added to the rental list", () => {
    bookToBeRented = 2; //Serial number for DRAWING
    bookSection = 2; //Arts section
    checkForBook(bookSection, bookToBeRented);

    expect(rentedBooks).toContain("DRAWING");
    rentedBooks.pop();
  });

  test("Show an error when an empty rental list is to be accessed", () => {
    expect(displayRentedBooks()).toBe(
      "You haven't rented any book. Please view our library to borrow a book today."
    );
  });

  test("Check if a rented book has been removed from its library section", () => {
    bookToBeRented = 2;
    bookSection = 1;

    checkForBook(bookToBeRented);
    let remainingBooks = removeBookFromSectionList(bookSection, bookToBeRented);

    expect(remainingBooks).not.toContain("PHYSICS");
    rentedBooks.pop();
  });

  test("Return rental list if not empty", () => {
    bookToBeRented = 1;
    bookSection = 1;

    checkForBook(bookSection, bookToBeRented);
    expect(displayRentedBooks()).toStrictEqual(["MATHEMATICS"]);
    rentedBooks.pop();
  });
});

describe("\nTests for methods to return books", () => {
  test("Test rental list is empty", () => {
    expect(rentedBooks.length).toBe(0);
  });

  test("Test to return a book available in a rental list to its borrowed section", () => {
    bookToBeRented = 1;
    bookSection = 2;
    rentalNumber = 1;

    checkForBook(bookSection, bookToBeRented);
    let remainingBooks = removeBookFromSectionList(bookSection, bookToBeRented);
    expect(remainingBooks).not.toContain("PHILOSOPHY");

    let addBookMessage = addBackToOriginalList(bookSection, rentalNumber);
    expect(addBookMessage).toBe(
      "You have returned PHILOSOPHY. Hope it was a nice read?"
    );

    remainingBooks = displayBooks(bookSection);
    expect(remainingBooks).toContain("PHILOSOPHY");

    rentedBooks.pop();
  });

  test("Update the rental list after return to section", () => {
    //Assuming bookToBeRented is "MATHEMATICS" with index number 1;
    //Rental Number = Index + 1. Where the index is the position of the book in the rentedBooks array.
    bookToBeRented = 1;
    bookSection = 1; //Science section
    rentalNumber = 1;

    //Rent the book and check
    checkForBook(bookSection, bookToBeRented);
    expect(rentedBooks).toContain("MATHEMATICS");

    //Return the same rented book and check if rental list was updated
    removeBookFromSectionList(bookSection, bookToBeRented);
    addBackToOriginalList(bookSection, rentalNumber);
    updateRentalList(rentalNumber, rentedBooks);
    expect(rentedBooks).not.toContain("MATHEMATICS");
  });

  test("Return an error when an empty rental list is to be updated or if rental number is below or above rental list range", () => {
    //Assumes that no book has been rented. Hence, the length of rentedBooks array is 0 (Zero).
    rentalNumber = -2;

    expect(updateRentalList(rentalNumber, rentedBooks)).toBe(
      "INVALID INPUT or EMPTY RENTAL LIST."
    );

    rentalNumber = 10;
    expect(updateRentalList(rentalNumber, rentedBooks)).toBe(
      "INVALID INPUT or EMPTY RENTAL LIST."
    );
  });
});

describe("\nTests to add book to a section.", () => {
  test("Check if a new book was added to a given section", () => {
    //Assumes the book "biology" is to be added to a the science section
    let donateBook = "biology";
    bookSection = 1; //Science Section

    let newSectionBooks = addBook(bookSection, donateBook);
    expect(newSectionBooks).toContain("BIOLOGY");
  });

  test("Throw an error message if an empty string was supplied as the new book title", () => {
    //Assumes that an empty string is supplied as a book title
    let donateBook = "";
    bookSection = 1; //Science Section

    let newSectionBooks = addBook(bookSection, donateBook);
    expect(newSectionBooks).toBe("Please input a valid name.");
  });

  test("Check if a new book was added to an invalid section", () => {
    //Assumes that the sections are only two
    let donateBook = "biology";
    bookSection = 3;

    let newSectionBooks = addBook(bookSection, donateBook);
    expect(newSectionBooks).toBe(
      "Error!\nWRONG INPUT or INVALID SECTION.\nTry again.\n\n"
    );
  });
});