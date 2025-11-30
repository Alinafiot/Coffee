document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".header-bottom");
    const menuLinks = document.querySelectorAll(".menu a");

    burger.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("active");
        document.body.classList.toggle("menu-open");
    });

    // Закриття при кліку поза меню
    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !burger.contains(event.target)) {
            menu.classList.remove("active");
            document.body.classList.remove("menu-open");
        }
    });

    // Закриття при кліку на пункт меню
    menuLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // відміняємо стандартну поведінку
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth", // плавний скрол
                    block: "start"      // позиція на початку секції
                });
            }

            menu.classList.remove("active");
            document.body.classList.remove("menu-open");
        });
    });
});
