 import $ from 'jquery';
 export function getQueryVariable(variable) {
     const query = window.location.search.substring(1);
     const vars = query.split('&');
     for (var i = 0; i < vars.length; i++) {
         const pair = vars[i].split('=');
         if (decodeURIComponent(pair[0]) == variable) {
             return decodeURIComponent(pair[1]);
         }
     }
     return undefined;
 }
 export function forcePosition(location) {
     const items = document.getElementById('navigation').childNodes;
     items.forEach(item => {
         const text = item.childNodes[0].textContent.toLowerCase();
         if (item.id == "n_drop") {
             if ("shop" == location) item.childNodes[0].setAttribute('class', 'nav-link regular active');
             else item.childNodes[0].setAttribute('class', 'nav-link regular');
         }
         if (text == location) item.setAttribute('class', 'nav-item regular active');
         else item.setAttribute('class', 'nav-item regular');
         window.scrollTo(0, 0);
     });
 }