{/* <script src="https://apis.google.com/js/api.js"></script>
<script> */}
/**
 * Sample JavaScript code for analyticsdata.properties.batchRunReports
 * See instructions for running APIs Explorer code samples locally:
 * https://developers.google.com/explorer-help/code-samples#javascript
 */

function authenticate() {
  return gapi.auth2.getAuthInstance()
    .signIn({ scope: "https://www.googleapis.com/auth/analytics https://www.googleapis.com/auth/analytics.readonly" })
    .then(function () { console.log("Sign-in successful"); },
      function (err) { console.error("Error signing in", err); });
}
function loadClient() {
  gapi.client.setApiKey("YOUR_API_KEY");
  return gapi.client.load("https://analyticsdata.googleapis.com/$discovery/rest?version=v1beta")
    .then(function () { console.log("GAPI client loaded for API"); },
      function (err) { console.error("Error loading GAPI client for API", err); });
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
  return gapi.client.analyticsdata.properties.batchRunReports({
    "property": "properties/361831890",
    "resource": {
      "requests": [
        {
          "dimensions": [
            {
              "name": "city"
            }
          ],
          "dateRanges": [
            {
              "startDate": "2023-04-01",
              "endDate": "2023-04-04"
            }
          ]
        }
      ]
    }
  })
    .then(function (response) {
      // Handle the results here (response.result has the parsed body).
      console.log("Response", response);
    },
      function (err) { console.error("Execute error", err); });
}
gapi.load("client:auth2", function () {
  gapi.auth2.init({ client_id: "YOUR_CLIENT_ID" });
});
// </script>
// <button onclick="authenticate().then(loadClient)">authorize and load</button>
// <button onclick="execute()">execute</button>
