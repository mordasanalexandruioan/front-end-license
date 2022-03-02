let eventMenuClick = e => {
    let obj = e.target;
    let button = document.querySelector('button');
    let header = document.querySelector('header');

    if (obj.tagName == "SPAN" && button.className == "menuButton closed" && header.className == "closed") {
        let b = obj.parentNode;
        header.className = "opened";
        b.classList.remove("closed");
        b.classList.add("opened");
    } else if (obj.tagName == "BUTTON" && obj.className == "menuButton closed") {
        header.className = "opened";
        obj.classList.remove("closed");
        obj.classList.add("opened");
    } else if (obj.tagName == "SPAN" && button.className == "menuButton opened") {
        let b = obj.parentNode;
        header.className = "closed";
        b.classList.remove("opened");
        b.classList.add("closed");
    } else if (obj.tagName == "BUTTON" && obj.className == "menuButton opened") {
        header.className = "closed";
        obj.classList.remove("opened");
        obj.classList.add("closed");
    }
}


//map location