module.exports = (req, res) => {
    const webhookUrl = 'https://webhook.site/0e5cb0c8-c658-4ebb-8ff2-b452a80313ac';
    
    console.log('Время запроса:', new Date().toISOString());
    console.log('Путь:', req.url);
    console.log('User-Agent:', req.headers['user-agent'] || 'Не указан');
    
    res.writeHead(302, {
        'Location': webhookUrl,
        'Cache-Control': 'no-store, no-cache, max-age=0'
    });
    res.end();
};
