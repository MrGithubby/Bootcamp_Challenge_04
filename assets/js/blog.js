let blogSection = document.querySelector("#blog-section");
let blogEntries = document.querySelector(".blog-entries");

const formArray = JSON.parse(localStorage.getItem('formArray'));

for(let i = 0; i < formArray.length; i++){
    let entryCard = document.createElement('div')
    entryCard.className = "entryCard"

    let blogUsername = document.createElement("p");
    blogUsername.classList.add('blog-username');
    blogUsername.textContent = formArray[i]['username'];

    let blogTitle = document.createElement("p");
    blogTitle.classList.add('blog-title');
    blogTitle.textContent = formArray[i]['title'];

    let blogContent = document.createElement("p");
    blogContent.classList.add('blog-content');
    blogContent.textContent = formArray[i]['content'];
    
    entryCard.append(blogTitle, blogContent, blogUsername);
    blogEntries.append(entryCard);
}

blogSection.append(blogEntries);


console.log(formArray.length)