const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.onscroll = () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    scrollTopBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };