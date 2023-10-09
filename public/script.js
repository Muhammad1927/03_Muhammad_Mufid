document.addEventListener("DOMContentLoaded", () => {
  const dataForm = document.getElementById("dataForm");
  const namaInput = document.getElementById("nama");
  const listData = document.getElementById("list-data");
  let idCounter = 0; // Menambahkan variabel untuk nomor urut ID

  dataForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nama = namaInput.value;
    idCounter++; // Menambahkan nomor urut ID
    const id = idCounter.toString().padStart(5, "0"); // Mengonversi ke string dengan panjang 5 karakter
    const tanggalInput = new Date().toLocaleString(); // Mengambil waktu lokal

    // Menambahkan data ke dalam tabel
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${id}</td><td>${nama}</td><td>${tanggalInput}</td>`;
    listData.appendChild(newRow);

    // Mengirim data ke server (gunakan fetch seperti yang telah Anda lakukan)
    try {
      const response = await fetch("/absen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, nama, tanggalInput }),
      });

      if (response.status === 200) {
        // Jika berhasil, reset input
        namaInput.value = "";
      } else {
        alert("Terjadi kesalahan saat mengirim data ke server.");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      alert("Terjadi kesalahan saat mengirim data ke server.");
    }
  });
});
