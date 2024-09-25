function truncateText(text, maxSentences) {
    // Pisahkan teks menjadi kalimat menggunakan regex
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];

    // Ambil maksimal jumlah kalimat yang diizinkan
    const truncated = sentences.slice(0, maxSentences).join(' ').trim();

    // Tambahkan titik akhir jika teks asli lebih panjang dari potongan
    return sentences.length > maxSentences ? truncated + '...' : truncated;
}
