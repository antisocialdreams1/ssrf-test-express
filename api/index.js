module.exports = (req, res) => {
    // 1. Просто логируем факт запроса
    console.log('📨 Запрос от сканера? User-Agent:', req.headers['user-agent']);
    console.log('Время:', new Date().toISOString());
    console.log('Путь:', req.url);
    
    const webhookUrl = 'http://169.254.169.254/latest/meta-data/';
    
    console.log('🎯 Редирект на:', webhookUrl);
    
    res.writeHead(302, {
        'Location': webhookUrl,
        'Cache-Control': 'no-store'
    });
    res.end();
};
