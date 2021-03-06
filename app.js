//Book Constructor - the book params

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constractor - will have method as ad the book, show error message and more

function UI() {}

//we create addbook function using prototype, with a book param
UI.prototype.addBookToList = function (book) {
  //console.log(book);

  //creating a variable named list, getting it from html
  const list = document.querySelector("#book-list");

  //create a element, tr
  const row = document.createElement("tr");
  console.log(row);

  //insert cols, we use string literals, and we can use book.title because we passd the book to prototype method
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td> <a href="#" class="delete">X</a></td>
    `;

  //we need to append the row to list, to see it in borwser
  list.appendChild(row);
};

//delete books
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}


//clear fileds

UI.prototype.clearFields = function () {
  // we get the value and are setting them to nothing, to clear fields
  const title = (document.getElementById("title").value = "");
  const author = (document.getElementById("author").value = "");
  const isbn = (document.getElementById("isbn").value = "");
};

// Show alert

UI.prototype.showAlert = function (msg, className) {
  // Create a div
  const div = document.createElement("div");

  //add classes
  div.className = ` alert ${className}`;

  //add text
  div.appendChild(document.createTextNode(msg));

  //get parent elemet
  const container = document.querySelector(".container");
  //get form
  const form = document.querySelector("#book-form");

  //the first is what we wanna insert == div, second, where we gonna insert, insert before the form
  container.insertBefore(div, form);

  // we want it to dispear after 3 sec
  setTimeout(() => {
    //after 3 second we want to remove the class
    document.querySelector('.error').remove();
  },2000);
};

//Event Listners
document.getElementById("book-form").addEventListener("submit", function (e) {
  e.preventDefault();
  /* We we submit we want the fields of the input value, so we create variables to get them, getting the form values */
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  /* console.log(title, author, isbn); */

  /* we want to create a new instance, so we pass in the title, author isbn */
  const book = new Book(title, author, isbn);
  //console.log(book);

  /* Instanstiate UI */
  const ui = new UI();
  //  console.log(ui); // we have addbooktolist in the proto. It's part of UI protoType

  //Validate

  if (title === "" || author === "" || isbn === "") {
    //error alert

    ui.showAlert("Please fill in all fields", "error");
  } else {
    /* Add book to list, and we pass in the book object */
    ui.addBookToList(book);

    //show success alert
    ui.showAlert("Book Added!", "success");
    //Clear fields
    ui.clearFields();
  }
});


//Event Listner for delete

document.getElementById('book-list').addEventListener('click', (e) => {

    e.preventDefault();
    
    const ui =  new UI();

    ui.deleteBook(e.target)

    //show messeage 

    ui.showAlert('Book Deleted!', 'success')
})