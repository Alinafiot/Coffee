document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu-buttons");
    const links = document.querySelectorAll(".menu-buttons a");

    if (!burger || !menu) return;

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

    // Плавний скрол і закриття меню при кліку на пункт
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const section = document.getElementById(targetId);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

            menu.classList.remove("active");
            document.body.classList.remove("menu-open");
        });
    });
});
