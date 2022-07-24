import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `👋Hallo Ganteng/Cantik\n\n*ʙᴏᴛ ʙʏ ᴅᴀғʏⁱⁿᶜ*`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
const message = {
            document: { url: thumb },
            jpegThumbnail: await (await fetch(thumb)).buffer(), fileName: global.wm, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: titlebot,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: '🌸 GROUP OFC',
                        url: sgc
                    }
                },
                {
                    urlButton: {
                        displayText: '📞 Author',
                        url: 'https://wa.me/6288215689772',
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '📜MENU',
                        id: '.m'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '📊BOT INFO',
                        id: '.botinfo'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '💬 HALLO BOT',
                        id: '.salken'
                    }
                },
            ]
        }
        conn.sendMessage(m.chat, message)
conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: 'Yaw? ada apa kak?', sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

handler.register = true
handler.exp = 3

export default handler