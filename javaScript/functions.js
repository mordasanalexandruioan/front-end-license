let eventMenuClick = e => {
    let obj = e.target;
    let button = document.querySelector('button');

    if (obj.tagName == "SPAN" && button.className == "menuButton closed") {
        let b = obj.parentNode;
        b.classList.remove("closed");
        b.classList.add("opened");
    } else if (obj.tagName == "SPAN" && button.className == "menuButton opened") {
        let b = obj.parentNode;
        b.classList.remove("opened");
        b.classList.add("closed");
    }
}