//App view:
let navigation = true;
 
let style= `
✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨`;
let closeState =["MENU CLOSED.","APP CLOSED."];
let closeMessage=`
Thank you for using YIZA Library.

Didn't find what you were looking for?
Feel free to contact us at: sophieoyiza@gmail.com

Want to visit the library again?
Reload page.`;
let onCloseMenu =`
${closeState[0]}
${closeMessage}
  
`;
let onExitApp = `
${closeState[1]}
${closeMessage}

`;

const Menu = ()=> {
   while (navigation) {
       let menuItems = prompt(`
MAIN MENU: 
1️⃣ --> View book collection 
2️⃣ --> Borrow 
3️⃣ --> Return
4️⃣ --> Donate 
5️⃣ --> View your rented books
6️⃣ --> Close Menu ❌
   
       `);
   const showMenu = () => {
   
   let show = prompt(`
If you want to see the menu again, type 'yes' and press enter.

To exit the app, type 'exit' and press enter.
   `)
   if (show == "yes") {
       navigation = true;
   } else if (show == "exit") {
   
    console.log(onExitApp);
    console.log(style);
     navigation = false;
   }
   else  {
       navigation = false;
       let err =`⛔️ERROR:OOPs THAT'S NOT A VALID INPUT. TRY AGAIN 
       Hint: Reload App`
       console.error(err)
   }
   }

       switch (+menuItems) {
           case 1:
               library.displaycatalogueBooks();
               console.log(style);
               navigation = false;
               showMenu();
               break;
           case 2:
               library.lendBook();
               console.log(style);
               showMenu();
               break;
           case 3:
               library.returnBook();
               console.log(style);
               showMenu();
               break;
           case 4:
               library.donateBook();
               console.log(style);
               showMenu();
               break;
           case 5:
               library.displayRentedBooks();
               console.log(style);
               showMenu();
               break;
           case 6:
                navigation= false
               console.log(onCloseMenu);
               console.log(style);
               
       }
   }
}

//library collections
let library = ( () =>{
   let libCatalogue = [];
   let catalogue;
   let lent = true;
   let rentalNumber;
   let allRentedBooks = [];
   let bookID;
   

   libCatalogue.push(Finance = {
       Books: [
           "Against the Gods",
           "Permission Marketing",
           "Mastering Sales",
           "Accounting"
           ],
       ID: "Finance 🏦",
   });

   libCatalogue.push(Technology = {
       Books: [
           "Data Structures",
           "Programming for dummies",
           "Discrete Mathematics,",
           "Artificial Intelligence"
       ],
       ID: "Technology 👩‍💻",
   });
   libCatalogue.push(Medical = {
       Books: [
           "Nursing Diagnosis",
           "Family Medicine",
       ],
       ID: "Medical 🏥",
   });
   libCatalogue.push(SciFi = {
       Books: [
           "She who became the sun",
           "ZRT",
       ],
       ID: "SciFi 🧑‍🔬",
   });
   libCatalogue.push(Arts = {
       Books: [
           "Americana",
           "Iya Ore",
           "The Art of War",
       ],
       ID: "Arts 🎨",
   });
   libCatalogue.push(Romance = {
       Books: [
           "Black heat",
           "Home for Mel",
           "Switch",
           "Chasing Red"
       ],
       ID: "Romance 👩‍❤️‍👨",
   });

// all books
   let allBooks = function allBooks() {
       catalogue = +prompt(`
Choose a category:
1--> Finance 🏦
2--> Technology 👩‍💻
3--> Medical 🏥
4--> SciFi 🧑‍🔬
5--> Arts 🎨
6--> Romance 👩‍❤️‍👨
        `);
       if (catalogue >= 1 && catalogue <= 6) {
           console.log(`
   Books in  ${libCatalogue[catalogue - 1].ID }:    
           `);
           
           for (let i = 0; i < libCatalogue[catalogue - 1].Books.length; i++) {
               console.log(`${(i + 1)}: ${libCatalogue[catalogue - 1].Books[i]}`);
           }
           lent = true;
       } else {
           console.log("We currently do not have that category");
           lent = false;
       }
   }
   // user borrows a book
   let lend = {
       lendBook() {
           allBooks();
           if (lent) {
               lend.getSN();
               lend.checkBook();
               lend.moveToRenetedList();
           }
       },

       getSN() {
           rentBook = +prompt(`
You can borrow a book by typing the number of the book you want to borrow.
           `);
       },

       checkBook() {
           if ((rentBook >= 1) && (rentBook <= libCatalogue[catalogue - 1].Books.length)) {
               validation = true;
               allRentedBooks.push(libCatalogue[catalogue - 1].Books[rentBook - 1]);
           } else {
               console.error(`
⛔️ERROR:The number you entered is invalid.
Please try again.`)
               validation = false;
           }
       },
       // remove book from catalogue list
       moveToRenetedList() {
           if (validation) {
               console.log(`
The book you borrowed is ${libCatalogue[catalogue - 1].Books[rentBook - 1]}
The book has been added to your rented books list.
`);
         libCatalogue[catalogue - 1].Books.splice((rentBook - 1), 1);
           }
       },
//view rented books
       displayRentedBooks() {
           if (!Array.isArray(allRentedBooks) || !allRentedBooks.length) {
               console.log(`You currently do not have any books 
in your "rented books list".

You can borrow a book and it will reflect here`);
           } else {
               console.log(`Here are your Rented Books:`);
               for (let i = 0; i < (allRentedBooks.length); i++) {
                   console.log(`${(i + 1)}: ${allRentedBooks[i]}`);
               }
           }
       }

   };

//user returns a book
   let returnBook = {
       returnBook() {
           if (allRentedBooks.length) {
               lend.displayRentedBooks();
               returnBook.getBookNumber();
               returnBook.addBackToOriginalList();
               returnBook.updateRentalList();
           } else {
               console.log(`You haven't borrowed any books,
there is nothing to return`);
           }
       },

       getBookNumber() {
           if (allRentedBooks.length) {
               rentalNumber = +prompt(`
Enter the rental number of the book you want to return.
HINT: Rental number should be greater than 0 not more than ${allRentedBooks.length}`);
           }
       },
       addBackToOriginalList() {
           if ((rentalNumber > 0) && (rentalNumber <= allRentedBooks.length)) {
               let returncatalogue = +prompt(`
Which catalogue do you want to return your book to?

1--> Finance 🏦
2--> Technology 👩‍💻
3--> Medical 🏥
4--> SciFi  🧑‍🔬
5--> Arts 🎨
6--> Romance 👩‍❤️‍👨`);

               if ((returncatalogue > 0) && (returncatalogue <= 6)) {
                   libCatalogue[returncatalogue - 1].Books.push(allRentedBooks[rentalNumber - 1]);
                   console.log(`
 ${allRentedBooks[rentalNumber - 1]} has been successfully returned.
 Thanks!
       `);
               } else {
                   console.error("⛔️ERROR:The catalogue you entered doesn't exist.");
               }
           } else {
               console.warn("⚠️ No books returned.");
           }
       },

       updateRentalList() {
           if ((rentalNumber <= allRentedBooks.length) && (rentalNumber > 0)) {
               rentalNumber -= 1;
               allRentedBooks.splice(rentalNumber, 1);
           } else {
               console.error(`
⛔️ERROR:Nothing to update. Invalid input`);
           }
       },
   };

   let userDonate = {
       addBook() {
           let donatecatalogue = +prompt(`
To which catalogue do you want to donate a book?

1--> Finance 🏦
2--> Technology 👩‍💻
3--> Medical 🏥
4--> SciFi  🧑‍🔬
5--> Arts 🎨
6--> Romance 👩‍❤️‍👨
               `);
           if ((donatecatalogue >= 1) && (donatecatalogue <= 6)) {
               donateBook = prompt(`
Kindly type the name of the book you want to donate and press enter`);

               if (donateBook) {
                   libCatalogue[donatecatalogue - 1].Books.push(donateBook);
                   console.log(`
We have added ${donateBook} to the ${libCatalogue[donatecatalogue - 1].ID} catalogue.
Thank you for your donation.
                   `)
               } else {
                   console.error(`
⛔️ERROR:
Invalid input.
Hint: You can't submit an empty field.`);
               }

           } else {
               console.error(`
⛔️ERROR: The catalogue you entered doesn't exist.`
               )
           }
       },
   };

   return {
       displaycatalogueBooks: allBooks,
       donateBook: userDonate.addBook,
       lendBook: lend.lendBook,
       displayRentedBooks: lend.displayRentedBooks,
       returnBook: returnBook.returnBook,
   };

})();
//user actions:

let userActivity =  () => {
   let aboutLib = `
⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅
⚅                                            ⚅
⚅ YIZA Library 📖                             ⚅
⚅ Readers hub with the best book collections  ⚅
⚅                                            ⚅
⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅⚅`
let welcome = `🙋‍♀️
Welcome to YIZA Library.
Type your name and press enter to get started:
`
   var userName = prompt(`
   ${aboutLib}

   ${welcome}
   
   `);
   
   if (userName) {
     console.log(`
✨Hello ${userName}!✨

To begin choose any of the options in the menu by inputing it's corresponding number.

E.g: To view collections, type 1 and press enter`);
       Menu();
   } else {
       console.error("⛔️ Oops that's not a valid input. Try Again");
   }
};
userActivity();