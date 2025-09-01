
# Hello World Cognito App

A simple static website demonstrating AWS Cognito login, logout, and session handling flow.  
It uses `python3 -m http.server` for local hosting and basic HTML pages for navigation.

## 🚀 Features
- Static HTML pages for **login**, **logged-in**, and **logged-out** states
- Easily customizable **AWS Cognito hosted UI URL** for authentication
- Lightweight local server using Python


## Services Used
- Amazon Cognito User Pool

## Setup

1. Integrating with AWS Cognito
    - Create a Cognito User Pool and App Client.
    - In your Cognito user pool, enable the Hosted UI.
    - Get the URL from the Cognito console.
    - Replace the placeholder links in each file: index.html → update the href for "Sign In or Register".
    - logged_out.html → update the href for "Log In Back".
    - logged_in.html → update the "Log Out" link.

2. Start a local server:
   ```bash
   python3 -m http.server 8000
3. Open your browser and visit: http://localhost:8000


## 📂 Project Structure
```text
01-congito-basic-login/
├── index.html # Landing page (Login/Register link)
├── logged_in.html # Page after successful login
├── logged_out.html # Page after logout
└── README.md