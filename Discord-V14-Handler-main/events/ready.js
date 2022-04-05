const client = require("../index");

client.on("ready", async () => {
  console.log(`${client.user.username} Is Online`);
  client.user.setActivity({
    name: `@${client.user.username} /help | Code by why#4148 [Shaded]`,
    type: "PLAYING",
  });
});
