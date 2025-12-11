module.exports = (req, res) => {
  console.log('✅ Запрос на путь:', req.url);
  
  const target = req.query.url || 'https://google.com';
  
  res.writeHead(302, {
    'Location': target,
    'Cache-Control': 'no-store'
  });
  res.end();
};
