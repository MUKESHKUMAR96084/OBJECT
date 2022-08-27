var book = new Object(); // Create the object
 book.subject = "Perl"; // Assign properties to the object
 this.author = "Mohtashim";
 console.log("Book name is : " + book.subject);
 console.log("Book author is : " + this.author);
 function yourbook(title,author)//demonstrates how to create an object with a User-Defined Function.
 {
    Number.mukesh = title; 
    Number.kumar = author;
}
var myBook = new yourbook("physics", "math");
console.log("Book title is : " + Number.mukesh);
console.log("Book author is : " + Number.kumar);