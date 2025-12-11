module.exports = (req, res) => {
    // ВАЖНО: Для проверки Let's Encrypt он обращается к пути /.well-known/acme-challenge/
    // Разрешаем доступ к этому пути без редиректа
    if (req.url.startsWith('/.well-known/acme-challenge/')) {
        res.writeHead(200);
        res.end('Let\'s Encrypt verification');
        return;
    }

    console.log('🔍 Запрос на путь:', req.url);
    const target = req.query.url || 'https://google.com';
    
    // ВРЕМЕННО: для всех остальных запросов тоже не делаем редирект, а просто отвечаем
    // Это нужно только для получения сертификата!
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Server is in setup mode. Redirects disabled for SSL certificate generation.');
    
    // ПОЗЖЕ вернёте редирект:
    // res.writeHead(302, {
    //   'Location': target,
    //   'Cache-Control': 'no-store'
    // });
    // res.end();
};
