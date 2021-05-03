
//Book Constructor - the book params

function Book (title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constractor - will have method as ad the book, show error message and more


function UI() {}



//Event Listners 
document.getElementById('book-form').addEventListener('submit', function(e){
    e.preventDefault()
    /* We we submit we want the fields of the input value, so we create variables to get them, getting the form values */
    const title = document.getElementById('title').value, 
          author = document.getElementById('author').value, 
          isbn = document.getElementById('isbn').value
          
          /* console.log(title, author, isbn); */

          /* we want to create a new instance, so we pass in the title, author isbn */
          const book = new Book(title, author, isbn)

          console.log(book);

    
})