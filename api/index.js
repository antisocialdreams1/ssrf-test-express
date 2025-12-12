module.exports = (req, res) => {

    console.log('🔍 ВХОДЯЩИЙ ЗАПРОС:');
    console.log('Время:', new Date().toISOString());
    console.log('Путь:', req.url);
    console.log('User-Agent:', req.headers['user-agent'] || 'Не указан');
    console.log('IP:', req.headers['x-forwarded-for'] || req.ip);
    
    const webhookUrl = 'https://webhook.site/a83dc435-713d-4591-8dbf-2c46d3405492';
    
   
    const params = new URLSearchParams({
        t: Date.now(), 
        p: req.url,   
        ua: req.headers['user-agent'] || 'none',
        ip: req.headers['x-forwarded-for'] || req.ip
    });
    
    const targetUrl = `${webhookUrl}?${params.toString()}`;
    
    console.log('🎯 Редирект на вебхук:', targetUrl);
    
    res.writeHead(302, {
        'Location': targetUrl,
        'Cache-Control': 'no-store, no-cache, must-revalidate'
    });
    res.end();
};
