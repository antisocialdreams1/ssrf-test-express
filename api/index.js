module.exports = (req, res) => {
    const webhookUrl = 'https://webhook.site/f2322547-2586-480c-b2c0-f85d2554053c';
    
    console.log('Время запроса:', new Date().toISOString());
    console.log('Путь:', req.url);
    console.log('User-Agent:', req.headers['user-agent'] || 'Не указан');
    
    res.writeHead(302, {
        'Location': webhookUrl,
        'Cache-Control': 'no-store, no-cache, max-age=0'
    });
    res.end();
};
