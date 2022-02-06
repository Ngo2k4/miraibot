/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/

module.exports.config = {
    name: "hitbut",
    version: "2.2.7",
    hasPermssion: 0,
    credits: "ProCoderMew",
    description: "",
    commandCategory: "tạo ảnh",
    usages: "[@tag]",
    cooldowns: 5,
    dependencies: {
        "axios": "",
        "fs-extra": "",
        "path": "",
        "jimp": ""
    },
    envConfig: {
        APIKEY: ""
    }
};

module.exports.onLoad = async() => {
    const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
    const dirMaterial = __dirname + `/cache/canvas/`;
    const path = resolve(__dirname, 'cache/canvas', 'hit_butt.png');
    if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://raw.githubusercontent.com/ProCoderMew/Module-Miraiv2/Mew/data/hitbutt.png", path);
}

async function makeImage({ one, two }) {
    const { APIKEY } = global.configModule.hitbutt;
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"]; 
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "cache", "canvas");

    let hit_butt_img = await jimp.read(__root + "/hit_butt.png");
    let pathImg = __root + `/hit_butt_${one}_${two}.png`;

    try {
        var avatarOne = (await axios.get(`https://meewmeew.info/avatar/${one}?apiey=${APIKEY}`)).data;    
        var avatarTwo = (await axios.get(`https://meewmeew.info/avatar/${two}?apiey=${APIKEY}`)).data;
        var circleOne = await jimp.read(await circle(Buffer.from(avatarOne, 'utf-8')));
        var circleTwo = await jimp.read(await circle(Buffer.from(avatarTwo, 'utf-8')));        
    } catch {
        let raw = await hit_butt_img.getBufferAsync("image/png");    
        fs.writeFileSync(pathImg, raw);
        return pathImg;
    }    
    hit_butt_img.resize(500, 500).composite(circleOne.resize(130, 130), 225, 5).composite(circleTwo.resize(120, 120), 352, 220);
    
    let raw = await hit_butt_img.getBufferAsync("image/png");    
    fs.writeFileSync(pathImg, raw);
    return pathImg;
}
async function circle(image) {
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}

module.exports.run = async function ({ event, api }) {    
    const fs = global.nodemodule["fs-extra"];
    const { threadID, messageID, senderID } = event;
    const mention = Object.keys(event.mentions);
    if (!mention[0]) return api.sendMessage("Vui lòng tag 1 người.", threadID, messageID);
    else {
        const one = senderID, two = mention[0];
        return makeImage({ one, two }).then(path => api.sendMessage({ body: "Hư nè.. ", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
}
