exports.handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method not allowed" }),
      };
    }

    const { customer, items, total, createdAt } = JSON.parse(event.body || "{}");

    if (!customer || !items || !items.length) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid order data" }),
      };
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing Telegram configuration" }),
      };
    }

    let message = `🧾 НОВЫЙ ЗАКАЗ\n\n`;
    message += `👤 Имя: ${customer.name || "-"}\n`;
    message += `📞 Телефон: ${customer.phone || "-"}\n`;
    message += `🚚 Тип: ${customer.orderType || "-"}\n`;

    if (customer.orderType === "delivery") {
      message += `📍 Адрес: ${customer.address || "-"}\n`;
    }

    message += `💬 Комментарий: ${customer.comment || "-"}\n`;
    message += `🕒 Время: ${createdAt || "-"}\n\n`;
    message += `📦 ЗАКАЗ:\n`;

    for (const item of items) {
      message += `- ${item.title} x${item.qty} — $${item.price}\n`;
    }

    message += `\n💰 Итого: $${total}`;

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      }
    );

    const telegramData = await telegramResponse.json();

    if (!telegramResponse.ok) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Telegram request failed",
          details: telegramData,
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Server error",
        details: error.message,
      }),
    };
  }
};