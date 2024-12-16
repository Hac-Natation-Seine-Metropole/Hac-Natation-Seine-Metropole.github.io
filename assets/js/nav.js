import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';



fetch('nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#nav-placeholder");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})




