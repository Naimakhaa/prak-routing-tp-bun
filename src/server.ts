import http from 'http';

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    // Set header agar output berupa JSON
    res.setHeader("Content-Type", "application/json");

    // Routing manual
    if (url === "/" && method === "GET") {
        res.writeHead(200);
        res.end(JSON.stringify({ message: "selamat datang di halaman home" }));
    } 
    else if (url === "/about" && method === "GET") {
        res.writeHead(200);
        res.end(JSON.stringify({ message: "Halaman About" }));
    } 
    else if (url?.startsWith("/users/") && method === "GET") {
        // Mengambil ID dari URL (misal: /users/123 -> "123")
        const id = url.split("/")[2]; 
        res.writeHead(200);
        res.end(JSON.stringify({ message: `User ID: ${id}` }));
    } 
    // PERBAIKAN: else tidak menggunakan tanda kurung ()
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "Router tidak ditemukan" }));
    }
});

server.listen(3000, () => {
    console.log("Server berjalan di http://localhost:3000");
});