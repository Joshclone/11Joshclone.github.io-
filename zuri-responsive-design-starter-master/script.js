function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

//close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if
        (!event.target.matches('.dropbtn')) {
        var dropdowns =
            document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.lenght; i++) {
            var openDropdown = dropdowns[i];
            if
                (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}