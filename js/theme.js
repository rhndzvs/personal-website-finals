// Immediately apply theme when DOM starts loading
document.addEventListener('DOMContentLoaded', () => {
    const darkModeIcon = document.querySelector('#darkMode-icon');
    
    // Apply theme immediately
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        if (darkModeIcon) {
            darkModeIcon.classList.add('bx-sun');
        }
    }
});
