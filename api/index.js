module.exports = (req, res) => {
    const webhookUrl = 'https://webhook.site/a83dc435-713d-4591-8dbf-2c46d3405492';
    
    console.log('Время запроса:', new Date().toISOString());
    console.log('Путь:', req.url);
    console.log('User-Agent:', req.headers['user-agent'] || 'Не указан');
    
    // Редирект 302 на вебхук
    res.writeHead(302, {
        'Location': webhookUrl,
        'Cache-Control': 'no-store, no-cache, max-age=0'
    });
    res.end();
};
