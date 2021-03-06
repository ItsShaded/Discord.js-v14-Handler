module.exports = {
  token:
    process.env.TOKEN ||
    "DISCORD_BOT_TOKEN",
  embed: {
    color: "#2f3136",
    wrongcolor: "#2f3136",
    footertext: "Code by why#4148 [Shaded]",
    footericon:
      "https://images-ext-1.discordapp.net/external/C2xH2P5W4KM4F6wPxElhlzyVrZ5bjWl9_TPT-X_3hfs/%3Fsize%3D512/https/cdn.discordapp.com/avatars/894158815166095390/b3963f5de220e55d185c5b9d15648a82.webp?width=424&height=424",
  },
  emoji: {
    ERROR: "โ",
    SUCCESS: "โ",
    disabled: "๐ด",
    enabled: "๐ข",
    cleared: "๐งน",
    time: "โฒ๏ธ",
    search: "๐",
    ping: "๐",
    bot: "๐ค",
  },
  // others
  Global: false,
};
