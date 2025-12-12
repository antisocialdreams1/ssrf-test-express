module.exports = (req, res) => {
    // 1. Просто логируем факт запроса
    console.log('📨 Запрос от сканера? User-Agent:', req.headers['user-agent']);
    console.log('Время:', new Date().toISOString());
    console.log('Путь:', req.url);
    
    // 2. Чистый редирект на вебхук БЕЗ параметров
    const webhookUrl = 'https://ВАШ_ВЕБХУК.pipedream.net';
    // Только чистый URL, ничего лишнего!
    
    console.log('🎯 Редирект на:', webhookUrl);
    
    // 3. Отправляем редирект 302
    res.writeHead(302, {
        'Location': webhookUrl,
        'Cache-Control': 'no-store'
    });
    res.end();
};
