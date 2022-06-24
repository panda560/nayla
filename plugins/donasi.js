let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *Telkomsel:* [+6281273677810]
┣➥ *Xl:* [+6281959293465]
┣➥ *Gopay:* [+6281273677810]
┣➥ *Saweria:* []
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6281273677810*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
