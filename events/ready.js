  module.exports = async (client) => {
    console.log(`logando ${client.user.username}. Pronto pra ${client.guilds.cache.size} Servidores no total ${client.users.cache.size} usuários`);

    client.user.setActivity("r!help para ajuda ");
};