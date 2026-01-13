module.exports = (req, res) => {
    const webhookUrl = 'https://webhook.site/4f43c7e7-05e8-44c2-9a8f-c8ec7cbc8142';
    
    console.log('Время запроса:', new Date().toISOString());
    console.log('Путь:', req.url);
    console.log('User-Agent:', req.headers['user-agent'] || 'Не указан');
    
    res.writeHead(302, {
        'Location': webhookUrl,
        'Cache-Control': 'no-store, no-cache, max-age=0'
    });
    res.end();
};
