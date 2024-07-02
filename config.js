//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUdmYTl5L24wTk95K2M2K24wVFk4aklXUDJNZDJkNDZsajVkL1d4b0IxST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTh0UkhOSW5DSDlRNk5vVk1pUW8zMTZhVk1XVjVFaEJHUDUwTFBwVHRYbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSkhKUnI2T1JVclNCY3hraUozamhSQnBCZmxEQ1RYaGEzd29uV25nQUcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4UW81R2xaeGd1WVdnYzRud1J4NlgxZ2I1Tk12UWNpZkdFcGcwS0R4UVg0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFNK0ZFaGpRK0dqV0w5R2NwNU5tZHh2Wml6Z3VlWGRrRDMvamZJSkROVzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJmK2Rrc3hMUERUUkRoSzhIb3F6QWhrT0Y4clVjQkErS0ZmcUYxNHh2bnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkpPMnNlV3crcjQrU3JxMitmVnlTTTlKVXVIaEVKNWlER0pGSnBJV0NtWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3o3Y25GOFp2c29kNzROM1pJQzNNVENKOTREUzFoSW80VjloUFBYWHNsWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijd0aURRdUlDeXR4bFZTS0tVRFJmRGkrUHlKYWtZWG1XNVc0VnhQcFJPOHVFckoxTjI3TU5hSDdjdFFJU3crTzJEeXc4TWw4Z0VzV1hhanZiU2RjL0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzQsImFkdlNlY3JldEtleSI6ImhuTTZpS0o0VkRnK3F5ZVB0VTJwN253YzQrR3ErK3gvTDEzcm96endZems9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNDQ3ODg2ODk1MTM4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk2MDZDMTVEMjhCN0I0ODU0QUJFMjQ5RkFERDgxRkE5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk3ODUyODV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjQ0Nzg4Njg5NTEzOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGNzg5RTVCNTU4QjQwRTk5QzIxNjhEMzc5Qjk3MjIxRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5Nzg1Mjg2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJOZWNRZXg1aVJQS2RsbnEtU2ZVVGh3IiwicGhvbmVJZCI6IjNlYTQ1ZTBiLWI3YmEtNDhiZi05Y2ZmLTYxYTZjOWNjNTE1MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5dG9OZkhaNGhZd0txeVBSWkQxKzd0MzE1NGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWFGNjk2RWRRNTlwSktLd1c4OUEwREZPa3RJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhKTVExNE1CIiwibWUiOnsiaWQiOiI0NDc4ODY4OTUxMzg6N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBTlkgRkMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BpVnFkZ0NFTGl1aDdRR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkV4N1Q5UHJySUxZNWpKWk9na0E3cng0VWxSM1NueGlwaWJaQ3JORU1GU2M9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImUvOG1lcE9aRlRFeURHRFZ6RUVhYkVBNWQyQllETUFUeEpKK0JtRTluZVZteldlTGFGV3ZnYkFJU294eW8zUCtIbEg1R0ExcnpyL1pzVmprVXRRcENBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJsQTNvak9CUDZncXFJOEZVSGJDcDlOYzl2VnJmT1RWeDVjRmx0S0s3NTJMSlhsN1pjODVEZlZwUFcwTmZ6Y1NPUTBwdlpnS2hqOWJOcHlwMlhybWpEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjQ0Nzg4Njg5NTEzODo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJNZTAvVDY2eUMyT1l5V1RvSkFPNjhlRkpVZDBwOFlxWW0yUXF6UkRCVW4ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk3ODUyODMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR1NMIn0=";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "2349066528353";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg,https://telegra.ph/file/7275967ae7b5283fada69.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/7275967ae7b5283fada69.jpg,https://telegra.ph/file/c3049cd3ac77f371e119e.jpg,https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/85fe388fdd14930cf86a0.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©QUEEN_ANITA-V2`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_ANITA-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "2349066528353";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api.maher-zubair.tech";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
