module.exports = (req, res) => {
    const webhookUrl = 'https://webhook.site/68ce6e00-0e8c-46d9-9efb-a8aa8bd9fffe';
    
    console.log('Время запроса:', new Date().toISOString());
    console.log('Путь:', req.url);
    console.log('User-Agent:', req.headers['user-agent'] || 'Не указан');
    
    res.writeHead(302, {
        'Location': webhookUrl,
        'Cache-Control': 'no-store, no-cache, max-age=0'
    });
    res.end();
};
