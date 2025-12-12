module.exports = (req, res) => {
    // 1. Просто логируем факт запроса
    console.log('📨 Запрос от сканера? User-Agent:', req.headers['user-agent']);
    console.log('Время:', new Date().toISOString());
    console.log('Путь:', req.url);
    
    const webhookUrl = 'https://webhook.site/a83dc435-713d-4591-8dbf-2c46d3405492';
    
    console.log('🎯 Редирект на:', webhookUrl);
    
    res.writeHead(302, {
        'Location': webhookUrl,
        'Cache-Control': 'no-store'
    });
    res.end();
};
