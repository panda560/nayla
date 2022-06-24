let handler = async m => m.reply(`
╭─「 RENT BOT 」
│
│ > Harga :
│• 5K / Minggu
│• 20K / Bulan
│• 30K / Permanent
│
│ > Pembayaran :
│• GOPAY : +6281273677810
│• XL & TELKOMSEL : +62 819-5929-3465 & 6281273677810
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^se(wa|wabot)$/i

module.exports = handler
