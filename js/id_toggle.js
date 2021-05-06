window.onclick = function(event) {
    openCloseDropdown(event)

}

function openCloseDropdown(event) {
    if (!event.target.matches('.item-click')) {
        // 
        // Close dropdown when click out of dropdown menu
        // console.log('sdsd');


        // closeAllDropdown()
    } else {
        var toggle = event.target.dataset.toggle
        var content = document.getElementById(toggle)
        if (content.classList.contains('show_hidden')) {
            closeAllDropdown();
        } else {
            closeAllDropdown()
            content.classList.add('show_hidden')
        }
    }
}

function closeAllDropdown() {
    var dropdowns = document.getElementsByClassName('show_hidden')
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove('show_hidden')
    }
}