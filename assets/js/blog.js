let blogSection = document.querySelector("#blog-section");
let blogEntries = document.querySelector(".blog-entries");

const formArray = JSON.parse(localStorage.getItem('formArray'));

for(let i = 0; i < formArray.length; i++){
    let blogUsername = document.createElement("p");
    blogUsername.classList.add('blog-username');
    blogUsername.textContent = formArray[i]['username'];

    let blogTitle = document.createElement("h2");
    blogUsername.classList.add('blog-username');
    blogTitle.textContent = formArray[i]['title'];

    let blogContent = document.createElement("p");
    blogUsername.classList.add('blog-username');
    blogContent.textContent = formArray[i]['content'];

    blogEntries.append(blogUsername, blogTitle, blogContent);
}

blogSection.append(blogEntries);


console.log(formArray.length)