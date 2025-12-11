module.exports = (req, res) => {
    const userAgent = req.headers['user-agent'] || '';
    const isScanner = userAgent.includes('okhttp');
    
    console.log('🔍 User-Agent:', userAgent);
    console.log('🕐 Время:', new Date().toISOString());

    // Если это сканер — редиректим на тестовый внутренний адрес
    if (isScanner) {
        console.log('🚨 ОБНАРУЖЕН СКАНЕР!');
        // Цель 1: Проверка следования за редиректом (безопасный внешний адрес)
        const safeTarget = 'https://httpbin.org/status/200';
        
        const target = safeTarget;
        
        console.log('🎯 Редирект сканера на:', target);
        res.writeHead(302, {
            'Location': target,
            'Cache-Control': 'no-store'
        });
        return res.end();
    }

    // Для всех остальных — обычный редирект на Google
    const defaultTarget = 'https://google.com';
    res.writeHead(302, {
        'Location': defaultTarget,
        'Cache-Control': 'no-store'
    });
    res.end();
};
