require('dotenv').config();
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const axios = require('axios');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});

client.once('ready', () => {
  console.log(`✅ Connecté en tant que ${client.user.tag}`);
});

client.on('messageReactionAdd', async (reaction, user) => {
  try {
    if (reaction.partial) await reaction.fetch();
    if (reaction.message.partial) await reaction.message.fetch();

    const payload = {
      username: user.username,
      userId: user.id,
      emoji: reaction.emoji.name,
      messageId: reaction.message.id,
      messageContent: reaction.message.content,
      channelId: reaction.message.channel.id,
      guildId: reaction.message.guild.id,
    };

    console.log('📩 Réaction détectée, envoi à n8n');

    await axios.post(process.env.N8N_WEBHOOK_URL, payload);
  } catch (error) {
    console.log('❌ Erreur lors de l’envoi à n8n');
  }
});

client.login(process.env.DISCORD_TOKEN);

