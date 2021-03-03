console.log("This is working.")



////////    CREATE HEADER    ////////
const header = document.createElement('div');
header.setAttribute('id', 'header');
const header_title = document.createElement('div');
header_title.setAttribute('id', 'header-title');
header_title.innerHTML = '<h1>Cheesecake<br>Cafe</h1>'
header.appendChild(header_title);



////////    CREATE MAIN    ////////
const main = document.createElement('div');
main.setAttribute('id', 'main');
main.innerHTML = `
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
    enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
    in reprehenderit in voluptate velit esse cillum dolore eu 
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
    proident, sunt in culpa qui officia deserunt mollit anim id est 
    laborum.
    </p>
    `;



////////    CREATE FOORTER    ////////
const footer = document.createElement('div');
footer.setAttribute('id', 'footer');
footer.innerHTML = `
    <p>
    Created by 
    <a href="https://github.com/jdegurse">James DeGurse</a> 
    for the 
    <a href="http://theodinproject.com">Odin Project</a>
    </p>
    `;



////////    APPEND TO CONTENT    ////////
const content = document.getElementById('content');
content.appendChild(header);
content.appendChild(main);
content.appendChild(footer);