// ==UserScript==
// @name        Etsy Cleaner
// @namespace   https://github.com/cjuarez/Greasemonkey
// @include      http://www.etsy.com/search/*
// @author       Celso Juarez
// @description Hides "Sponsored" results from Etsy search page
// @version     1.0
// ==/UserScript==

var pr = document.querySelector('#primary'),
    sp = document.querySelector('.s2'),
    re = document.querySelector('#related-searches'),
    sh = document.querySelector('.shop-query-link');
if (pr) {
    if (sp) {
        pr.removeChild(sp);
    }
    if (re) {
        pr.removeChild(re);
    }
    if (sh) {
        pr.removeChild(sh);
    }
}