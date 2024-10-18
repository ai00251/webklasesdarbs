
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    document.querySelectorAll('.card').forEach(card => {
        card.classList.toggle('light-mode');
    });
    document.querySelectorAll('.card-button').forEach(button => {
        button.classList.toggle('light-mode');
    });
});

