
window.addEventListener('DOMContentLoaded', () => {
    
    'use strict';
    
    let calc = require('./parts/calc'),
        works = require('./parts/works'),
        tabs = require('./parts/tabs'),
        modals = require('./parts/modals'),
        timer = require('./parts/timer');

 

    calc();
    works();
    tabs();
    modals();
    timer();

});