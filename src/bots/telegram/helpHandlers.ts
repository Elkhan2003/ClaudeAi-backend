import TelegramBot from 'node-telegram-bot-api';

export const handleHelpContact = async (
	bot: TelegramBot,
	msg: TelegramBot.Message
) => {
	const chatId = msg.chat.id;
	await helpContact(bot, chatId);
};

const helpContact = async (bot: TelegramBot, chatId: number) => {
	try {
		const helpContactInfo = `
Привет! Если у вас есть вопросы или вы хотите связаться со мной, вот мои контактные данные:

🌐 Веб-сайт: [ElchoDev](https://elcho.dev)
📧 Email: boss.armsport@gmail.com
📱 Telegram: [@Elcho911](https://t.me/elcho911)
📘 GitHub: [Elkhan2003](https://github.com/Elkhan2003)
		`.trim();
		await bot.sendMessage(chatId, helpContactInfo, { parse_mode: 'Markdown' });
	} catch (error) {
		console.error('Ошибка получения информации о чате:', error);
		await bot.sendMessage(chatId, 'Не удалось получить информацию о чате.');
	}
};
