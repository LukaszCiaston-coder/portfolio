window.onload = function () {
    let spanNode = document.querySelector('.home__multiple');
    let words = ['Web Designer', 'Web Deweloper', 'Web Master'];
    let i = 0;
    setInterval(function () {
        spanNode.textContent = words[i];
        i = (i + 1) % words.length;
    }, 2000);
}
 


