
const loginLink = document.querySelector('.auth-links a[href="iniciar_sesion.html"]');
const loginModal = document.getElementById('loginModal');
const closeModal = document.querySelector('.modal .close');

loginLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    loginModal.style.display = 'flex';
});

closeModal.addEventListener('click', function() {
    loginModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
});
