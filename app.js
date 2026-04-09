        // Año actual en el footer
        document.getElementById('year').textContent = new Date().getFullYear();

        // Toggle para menú móvil
        const btn = document.getElementById('mobile-menu-button');
        const menu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Cerrar el menú móvil al hacer clic en un enlace
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });