window.onload = function(){
    let p = document.querySelector('#id_p');
    p.style.color = '#F000FF';
    p.style.backgroundColor = "#fff989"

    let links = p.getElementsByTagName('a');
    alert(links[0].href);
}