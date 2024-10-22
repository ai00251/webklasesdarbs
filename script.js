
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    document.querySelectorAll('.card').forEach(card => {
        card.classList.toggle('light-mode');
    });
    document.querySelectorAll('.card-button').forEach(button => {
        button.classList.toggle('light-mode');
    });
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    const modals = document.getElementsByClassName("modal");
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

document.querySelector('.dropdown-toggle').addEventListener('click', function(event) {
    event.preventDefault();
    const dropdown = this.nextElementSibling;
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

window.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.dropdown');
    if (!event.target.matches('.dropdown-toggle') && dropdown.style.display === "block") {
        dropdown.style.display = "none";
    }
});

document.getElementById('hamburger-menu').addEventListener('click', function() {
    const navbarItems = document.querySelector('.navbar ul');
    navbarItems.classList.toggle('active');
});



