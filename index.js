const myLibrary = [];

const newBookFormButton = document.querySelector('#new-book-form-button');
newBookFormButton.addEventListener('click', displayNewBookForm)
const newBookForm = document.querySelector('#new-book-form')
const newBookSubmitButton = document.querySelector('#new-book-submit-button');
const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');
const pagesInput = document.querySelector('#pages-input');
const readInput = document.querySelectorAll('input[name="read-input"]');
const bookTableBody = document.querySelector('#book-table-body');

function displayNewBookForm() {
    newBookForm.classList.toggle('hidden')
}


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}


function addBookToLibrary() {
    let titleText = titleInput.value;
    let authorText = authorInput.value;
    let pagesText = pagesInput.value;
    let readText = Array.from(readInput).filter(elem => elem.checked)[0].value;
    let book = new Book(titleText, authorText, pagesText, readText);
    myLibrary.push(book);
    addBookToList(titleText, authorText, pagesText, readText);
}


function makeRow() {
    let tr = document.createElement('tr');
    bookTableBody.append(tr);
    return tr;
}

function makeRowCell(cellValue, classValue, tagName = 'td') {
    let element = document.createElement(tagName);
    element.textContent = cellValue;
    element.setAttribute('class', classValue)
    return element;
}

function deleteBook() {
    this.closest('tr').remove();
    let rowIndex = this.parentElement.sectionRowIndex;
    myLibrary.splice(rowIndex, 1);
}


function addBookToList(titleText, authorText, pagesText, readText) {
    let tr = makeRow();
    let titleCell = makeRowCell(titleText, 'title-cell');
    let authorCell = makeRowCell(authorText, 'author-cell');
    let pagesCell = makeRowCell(pagesText, 'pages-cell');
    let readCell = makeRowCell(readText, 'read-cell');
    let deleteCell = makeRowCell('', 'delete-cell')
    let deleteButton = makeRowCell('x', 'delete-button', 'button');
    deleteCell.append(deleteButton);
    deleteButton.addEventListener('click', deleteBook)

    tr.append(titleCell, authorCell, pagesCell, readCell, deleteCell);
}

newBookSubmitButton.addEventListener('click', addBookToLibrary);