function handleMenuDisplay() {
    if (window.innerWidth <= 480) {
        document.getElementById('menu-click').style.display = "flex";
    } else {
        document.getElementById('menu-click').style.display = "none";
    }
}

handleMenuDisplay();
window.addEventListener('resize', function() {
    if(document.getElementById('menu-drop').style.display != "flex"){
        handleMenuDisplay();
    }else if(document.getElementById('menu-drop').style.display == "flex" && window.innerWidth > 480){
        document.getElementById('close-click').style.display = "none";
        document.getElementById('menu-drop').style.display = "none";
    }
});

function disableScroll(){
    document.body.classList.add("stop-scrolling");
}

function enableScroll(){
    document.body.classList.remove("stop-scrolling");
}

function openSlideMenu(){
    document.getElementById('menu-drop').style.display = "flex";
    document.getElementById('menu-click').style.display = "none";
    document.getElementById('close-click').style.display = "flex";
    disableScroll();
}

function closeSlideMenu(){
    document.getElementById('menu-drop').style.display = "none";
    document.getElementById('menu-click').style.display = "flex";
    document.getElementById('close-click').style.display = "none";
    enableScroll();
}

function backButton(){
    window.history.back();
}