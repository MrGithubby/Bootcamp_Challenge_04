let blogForm = document.querySelector('form');
let formUsername = document.querySelector('#username');
let formTitle = document.querySelector('#title');
let formContent = document.querySelector('#content');
let formObject = {
    username: "",
    title: "",
    content: ""
}

let formArray = []

blogForm.addEventListener('submit', function(event){
    event.preventDefault();
    let formObject = {
        username: "",
        title: "",
        content: ""
    }
    formObject.username = formUsername.value;
    formObject.title = formTitle.value;
    formObject.content = formContent.value;
    formArray.push(formObject);
    console.log(formObject.username);
    console.log(formArray)
    localStorage.setItem('formArray', JSON.stringify(formArray))
})