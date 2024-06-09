function handleMenuDisplay() {
    if (window.innerWidth <= 480) {
        document.getElementById('menu-click').style.display = "flex";
    } else {
        document.getElementById('menu-click').style.display = "none";
    }
}

handleMenuDisplay();
window.addEventListener('resize', function() {
    if(document.getElementById('menu-drop').classList.contains("hide")){
        handleMenuDisplay();
    }else if(document.getElementById('menu-drop').classList.contains("show") && window.innerWidth > 480){
        document.getElementById('close-click').style.display = "none";
        document.getElementById('menu-drop').classList.add("hide");
        document.getElementById('menu-drop').classList.remove("show");
    }
});

function disableScroll(){
    document.body.classList.add("stop-scrolling");
}

function enableScroll(){
    document.body.classList.remove("stop-scrolling");
}

function openSlideMenu(){
    document.getElementById('menu-drop').classList.add("show");
    document.getElementById('menu-drop').classList.remove("hide");
    document.getElementById('menu-click').style.display = "none";
    document.getElementById('close-click').style.display = "flex";
    disableScroll();
}

function closeSlideMenu(){
    document.getElementById('menu-drop').classList.add("hide");
    document.getElementById('menu-drop').classList.remove("show");
    document.getElementById('menu-click').style.display = "flex";
    document.getElementById('close-click').style.display = "none";
    enableScroll();
}

function backButton(){
    window.history.back();
}