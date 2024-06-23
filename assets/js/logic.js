let darkModeStatus = localStorage.getItem('darkMode') || "";
const darkModeButton = document.querySelector('#dark-mode-button');
const enableDarkMode = function(){
    document.body.classList.add('dark-mode');       // 1. Add the class to the body
    localStorage.setItem('darkMode', 'enabled');    // 2. Update darkMode in localStorage
}; 
const disableDarkMode = function(){
    document.body.classList.remove('dark-mode');       // 1. Remove the class from the body
    localStorage.setItem('darkMode', 'null');    // 2. Update darkMode in localStorage
} ;
// If the user already visited and enabled darkMode... Enable Dark Mode
if (darkModeStatus === 'enabled') {
    enableDarkMode();
};

// Click to Change Dark Mode Settings
darkModeButton.addEventListener('click',function(){
    darkMode = localStorage.getItem('darkMode'); 
    if (darkModeStatus !== 'enabled'){
        enableDarkMode();
    }
    else{
        disableDarkMode();
    }
    darkModeStatus = localStorage.getItem('darkMode'); // Refresh the status again after toggling   
    console.log(darkModeStatus)
});