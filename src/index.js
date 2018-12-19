
window.addEventListener('DOMContentLoaded', () => {
    
    'use strict';
    
    let calc = require('./parts/calc'),
        works = require('./parts/works'),
        tabs = require('./parts/tabs'),
        modals = require('./parts/modals');

 

    calc();
    works();
    tabs();
    modals();

});