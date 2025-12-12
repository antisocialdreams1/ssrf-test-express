module.exports = (req, res) => {
    console.log('Время запроса:', new Date().toISOString());
    // Редирект на AWS Metadata Service
    res.writeHead(302, { 'Location': 'http://169.254.169.254/latest/meta-data/' });
    res.end();
};
