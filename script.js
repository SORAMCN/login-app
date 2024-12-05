const hiddenUrl = "https://taphoalive.com/sellsatarbotbyphong/login.do";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "password123") {
        // Sembunyikan halaman login dan tampilkan halaman jumpscare
        document.getElementById("loginPage").style.display = "none";
        const jumpscarePage = document.getElementById("jumpscarePage");
        jumpscarePage.style.display = "flex";

        const video = document.getElementById("jumpscareVideo");
        video.play(); // Putar video

        // Tunggu hingga video selesai, lalu redirect
        video.addEventListener("ended", () => {
            window.location.href = hiddenUrl;
        });
    } else {
        // Tampilkan pesan error
        document.getElementById("error").style.display = "block";
        document.getElementById("error").textContent = "Nama pengguna atau kata sandi salah tolol!";
    }
});
