
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

