module.exports = (req, res) => {
    console.log('🔍 ЗАПРОС ОТ СКАНЕРА:');
    console.log('Время:', new Date().toISOString());
    console.log('User-Agent:', req.headers['user-agent']);
    console.log('IP:', req.headers['x-forwarded-for'] || req.ip);
    console.log('URL:', req.url);
    
    const target = req.query.url || 'https://google.com';
    console.log('Редирект на:', target);
    
    res.writeHead(302, {
        'Location': target,
        'Cache-Control': 'no-store'
    });
    res.end();
};
