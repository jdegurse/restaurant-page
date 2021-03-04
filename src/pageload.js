function pageLoad() {
    ////////    INNER HTML CONTENT    ////////
    const home_content = `
    
    `;

    const menu_content = `
    
    `;

    const contact_content = `
    
    `;



    ////////    CREATE HEADER    ////////
    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    const header_title = document.createElement('div');
    header_title.setAttribute('id', 'header-title');
    header_title.innerHTML = '<h1>Cheesecake<br>Cafe</h1>'
    header.appendChild(header_title);



    ////////    CREATE NAV    ////////
    const nav = document.createElement('div');
    nav.setAttribute('id', 'nav');

    const nav_home = document.createElement('button');
    nav_home.setAttribute('id', 'nav-home');
    nav_home.textContent = 'Home';

    const nav_menu = document.createElement('button');
    nav_menu.setAttribute('id', 'nav-menu');
    nav_menu.textContent = 'Menu';

    const nav_contact = document.createElement('button');
    nav_contact.setAttribute('id', 'nav-contact');
    nav_contact.textContent = 'Contact';

    nav.appendChild(nav_home);
    nav.appendChild(nav_menu);
    nav.appendChild(nav_contact);



    ////////    CREATE MAIN    ////////
    const main = document.createElement('div');
    main.setAttribute('id', 'main');

    ////////    CLEAR MAIN INNER HTML    ////////
    function clearMain() {
        main.innerHTML = '';
    }



    ////////    NAVIGATION CLICK FUNCTIONS    ////////
    function openHome() {
        nav_home.classList.add('active');
        nav_menu.classList.remove('active');
        nav_contact.classList.remove('active');
        clearMain();
        main.innerHTML = `
        <p>
        HOME
        </p>
        `
    }

    nav_home.addEventListener('click', openHome);

    nav_menu.addEventListener('click', function openMenu() {
        nav_home.classList.remove('active');
        nav_menu.classList.add('active');
        nav_contact.classList.remove('active');
        clearMain();
        main.innerHTML = `
        <p>
        MENU
        </p>
        `
    });

    nav_contact.addEventListener('click', function openContact() {
        nav_home.classList.remove('active');
        nav_menu.classList.remove('active');
        nav_contact.classList.add('active');
        clearMain();
        main.innerHTML = `
        <p>
        Contact Us!
        </p>
        `
    });



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
    content.appendChild(nav);
    content.appendChild(main);
    content.appendChild(footer);

    openHome();
}

export { pageLoad };