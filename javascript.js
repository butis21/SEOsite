document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('#Menu label');

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            const sectionId = this.innerText.trim().toLowerCase();
            const targetSection = document.getElementById(sectionId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
