let featureMenu = document.getElementById('feature');
let companyMenu = document.getElementById('company');
let dropdownOne = document.getElementById('dropdown1');
let dropdownTwo = document.getElementById('dropdown2');
let bodyPag = document.querySelector('body');

featureMenu.addEventListener('click', function() {
    if (dropdownOne.classList.contains('active')) {
        dropdownOne.classList.remove('active');
        featureMenu.classList.remove('active');
    } else {
        dropdownOne.classList.add('active');
        featureMenu.classList.add('active');
    }
});
companyMenu.addEventListener('click', function() {
    if (dropdownTwo.classList.contains('active')) {
        dropdownTwo.classList.remove('active');
        companyMenu.classList.remove('active');
    } else {
        dropdownTwo.classList.add('active');
        companyMenu.classList.add('active');
    }
});
bodyPag.addEventListener('click', function(e) {
    if (!e.target.matches('.nav_item_container a')) {
        dropdownOne.classList.remove('active');
        featureMenu.classList.remove('active');

    }
    if (!e.target.matches('.nav_item_container a')) {
        dropdownTwo.classList.remove('active');
        companyMenu.classList.remove('active');

    }
});