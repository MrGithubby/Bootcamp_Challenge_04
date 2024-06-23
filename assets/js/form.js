const blogForm = document.querySelector('form');

let formObject = {
    username: "",
    title: "",
    content: ""
}

blogForm.addEventListener('submit', function(event){
    event.preventDefault();
    let formUsername = document.querySelector('#username');
    let formTitle = document.querySelector('#title');
    let formContent = document.querySelector('#content');

    let formArray = JSON.parse(localStorage.getItem('formArray')) || [];

    formObject.username = formUsername.value;
    formObject.title = formTitle.value;
    formObject.content = formContent.value;
    formArray.push(formObject);
    console.log(formObject.username);
    console.log(formArray);
    localStorage.setItem('formArray', JSON.stringify(formArray));
    window.location.href = "blog.html";
    console.log(formArray)
})
