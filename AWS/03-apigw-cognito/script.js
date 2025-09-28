// ------------------- CONFIG -------------------
const CONFIG = {
    region: "us-east-1", // your region
    clientId: "YOUR_APP_CLIENT_ID",
    domain: "your-domain.auth.us-east-1.amazoncognito.com",
    redirectUri: "http://localhost:8000/callback.html",
    apiEndpoint: "https://your-api.execute-api.us-east-1.amazonaws.com/prod/test"
  };
  // ----------------------------------------------
  
  // Redirect user to Hosted UI
  function redirectToLogin() {
    const loginUrl =
      `https://${CONFIG.domain}/login?` +
      `client_id=${CONFIG.clientId}` +
      `&response_type=code` +
      `&scope=email+openid+profile` +
      `&redirect_uri=${encodeURIComponent(CONFIG.redirectUri)}`;
  
    window.location.href = loginUrl;
  }
  
  // Handle Cognito redirect and exchange code for tokens
  function handleCallback() {
    const code = new URLSearchParams(window.location.search).get("code");
    const resultDiv = document.getElementById("result");
  
    if (!code) {
      resultDiv.innerHTML = "<p>Error: No authorization code found.</p>";
      return;
    }
  
    const tokenUrl = `https://${CONFIG.domain}/oauth2/token`;
    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("client_id", CONFIG.clientId);
    params.append("code", code);
    params.append("redirect_uri", CONFIG.redirectUri);
  
    fetch(tokenUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params
    })
      .then(res => res.json())
      .then(data => {
        if (data.id_token) {
          sessionStorage.setItem("id_token", data.id_token);
          resultDiv.innerHTML = "<p>Login successful! Fetching API...</p>";
          callApi();
        } else {
          resultDiv.innerHTML = `<p>Error retrieving token: ${JSON.stringify(data)}</p>`;
        }
      })
      .catch(err => {
        resultDiv.innerHTML = `<p>Token exchange failed: ${err}</p>`;
      });
  }
  
  // Call API Gateway endpoint with Authorization header
  function callApi() {
    const token = sessionStorage.getItem("id_token");
    const resultDiv = document.getElementById("result");
  
    fetch(CONFIG.apiEndpoint, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        resultDiv.innerHTML = `<h3>API Response:</h3><pre>${JSON.stringify(data, null, 2)}</pre>`;
      })
      .catch(err => {
        resultDiv.innerHTML = `<p>API call failed: ${err}</p>`;
      });
  }
  