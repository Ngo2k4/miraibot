module.exports.config = {
    name: "yaytext",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "DuyVuongUwU",
    description: "tαΊ‘o ra 1 text hay nΓ¨k",
    commandCategory: "font chα»―",
    cooldowns: 0
};
module.exports.run = async function({ api, event, args }) {
    const { threadID, messageID, senderID, body } = event;
    var content = args.join(" ").toLowerCase();;
    let msgtext = content.replace(/a/g, "π").replace(/αΊ‘/g, "πΜ£").replace(/Γ /g, "πΜ").replace(/αΊ£/g, "πΜ").replace(/Γ‘/g,"πΜ").replace(/αΊ―/g, "πΜΜ").replace(/αΊ±/g, "πΜΜ").replace(/Δ/g, "πΜ").replace(/q/g, "π").replace(/w/g, "π").replace(/e/g, "π").replace(/α»/g, "πΜΜ").replace(/αΊΏ/g, "πΜΜ").replace(/αΊΉ/g, "πΜ£").replace(/Γͺ/g, "πΜ").replace(/α»/g, "πΜΜ").replace(/r/g, "π").replace(/t/g, "π").replace(/α»΅/g, "πΜ£").replace(/y/g, "π").replace(/α»·/g, "πΜ").replace(/α»³/g, "πΜ").replace(/u/g, "π").replace(/α»§/g, "πΜ").replace(/ΓΉ/g, "πΜ").replace(/ΓΊ/g, "πΜ").replace(/α»₯/g, "πΜ£").replace(/i/g, "π").replace(/Γ­/g, "πΜ").replace(/Γ¬/g, "πΜ").replace(/α»/g, "πΜ£").replace(/o/g, "π").replace(/α»/g, "πΜ").replace(/Γ²/g, "πΜ").replace(/Γ³/g, "πΜ").replace(/Γ΄/g, "πΜ").replace(/α»/g, "πΜΜ").replace(/α»/g, "πΜΜ").replace(/α»/g, "πΜΜ").replace(/α»/g, "πΜΜ").replace(/p/g, "π").replace(/s/g, "π").replace(/d/g, "π").replace(/Δ/g, "Δ").replace(/f/g, "π").replace(/g/g, "π").replace(/h/g, "π").replace(/j/g, "π").replace(/k/g, "π").replace(/l/g, "π").replace(/z/g, "π").replace(/x/g, "π").replace(/c/g, "π").replace(/v/g, "π").replace(/b/g, "π").replace(/n/g, "π").replace(/m/g, "π");
    return api.sendMessage(msgtext, threadID,messageID);
}
