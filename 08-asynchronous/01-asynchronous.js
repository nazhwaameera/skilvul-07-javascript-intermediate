// 1. Apa itu synchronous? Synchronous (sync), merupakan mode default dalam proses eksekusi perintah kode.
// 2. Apa itu asynchronous? Asynchronous hasil eksekusi atau output tidak selalu berdasarkan urutan kode, tetapi berdasarkan waktu proses. Eksekusi dengan asynchronous tidak akan membloking atau menunggu suatu perintah sampai selesai. Daripada menunggu, asynchronous akan mengeksekusi perintah selanjutnya.
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser? Dapat
// 4. Apa hasil yang akan tercetak pada baris kode dibawah? first log: 1 - first log: 5; second log: 6
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi Karena variable i dideklarasi sebagai variabel global dan sudah diubah di first log pertama
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (let i = 1; i <= 5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}