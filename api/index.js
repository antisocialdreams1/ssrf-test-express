module.exports = (req, res) => {
    console.log('============================');
    console.log('Время:', new Date().toISOString());

    // Полный URL
    console.log('URL:', req.url);

    // Query string в виде объекта
    console.log('Query params:', req.query);

    // Headers
    console.log('User-Agent:', req.headers['user-agent']);
    console.log('Referer:', req.headers['referer']);
    console.log('Origin:', req.headers['origin']);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('OK');
};
