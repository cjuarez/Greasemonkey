// ==UserScript==
// @name        Etsy Cleaner
// @namespace   https://github.com/cjuarez/Greasemonkey
// @include      http://www.etsy.com/search/*
// @author       Celso Juarez
// @description Hides "Sponsored", "Featured" and "Related" items in Etsy
// @version     1.0
// ==/UserScript==

var pr = document.querySelector('#primary'),
    sp = document.querySelector('.s2'),
    re = document.querySelector('#related-searches'),
    sh = document.querySelector('.shop-query-link'),
    ft = document.querySelectorAll('[id*=featured], [class*=featured]');
if (!pr) {
    pr = document.querySelector('.primary');
}
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
    if (ft.length > 0) {
        for (var i = 0; i < ft.length; i++) {
            pr.removeChild(ft.item(i));
        }
    }
}