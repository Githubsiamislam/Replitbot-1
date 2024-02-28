const messages = [
  "তোর নানিরে চুদি মাদারছোদ ম্যাসেজ দিসনা🐸",
  "তোর নানিরে দিনে রাইতে চুদি🐸",
  "তুই বোকাচোদা নাম্বাদ ওয়ান🐸",
  "তোর নানিরে উপতা কইরা চুদি বানচোদ🐸",
  "তোর নানির কচি পম পম আহ🐸",
  "তোর নানির গুদ কালো ছি আগে বলবিনা Mc",
  "এটা কোনো কথা তোর নানির জালা আমি মিটামু বেডা🐸",
  "দোস্ত তোর নানিডা কিন্তু সেই ১ রাত দেনা রে🐸",
  "তোর নানিরে চুদে মেরে ফেল্লো সিয়াম🐸",
  "বিরক্ত করিসনাতো এখন তোর নানিরে চুদতেসি আবাল কোথাকার🐸",
  "তোর নানিরে দিনে রাতে বিকেলে খালে ডালে পুকুরে চুদি🐸",
  "এতো কথা বলিসনা মাদারছোদ আমার নুনি খা🐸",
  "তোর নামিটা ব্রান্ডের মাল ছিলো রে দোস্ত🐸",
  "তোর নানিকে শাক সবজি খাওয়াবি বুজলি আমি কিন্তু এবার তোর নানির বাসা গিয়ে তোর নানিরে চুদবো🐸",
  "ইল বিল ছিল তোর নানির গোয়ায় তিল",
  "চুপ থাক বোকাচোদা",
  
 
];


const targetUserIds = ["", "", "USER_UID_3"];

module.exports = {
  config: {
    name: "fwar",
    aliases: [],
    version: "1.0",
    author: "Siam",
    countDown: 5,
    role: 0,
    shortDescription: "",
    longDescription: "",
    category: "test",
    guide: {
      vi: "",
      en: "{p}fwar",
    },
  },

  onStart: async function ({ api, event }) {
    
  },

  onChat: async function ({ api, event }) {
   
    if (targetUserIds.includes(event.senderID.toString())) {
     
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];

      
      await api.sendMessage({
        body: randomMessage,
        attachment: null,
        mentions: [],
      }, event.threadID, event.messageID);
    }
  },
};
