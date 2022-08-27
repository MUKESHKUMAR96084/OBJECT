function addPrice(amount){
    this.price = amount; 
   }
   function book(title, author){
    this.title = title; 
    Number.author = author;
    this.addPrice = addPrice; // Assign that method as property.
   }
   var myBook = new book("Perl", "Mohtashim");
 myBook.addPrice(100);
 console.log("Book title is : " + myBook.title );
 console.log("Book author is : " + Number.author);
 console.log("Book price is : " + myBook.price);