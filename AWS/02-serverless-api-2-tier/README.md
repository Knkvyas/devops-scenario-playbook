# Build an Authentication/Login System on AWS with React.js

This repository accompanies the **“Build an Authentication/Login System on AWS with React.js”**. It shows how to build a complete register and login flow using AWS services and a React frontend.

---

##  Video Overview

The tutorial covers:

1. **Part 1** – Setting up AWS authentication backend, including:
   - API Gateway Methods
   - Lambda as backend and implementing sign-up and sign-in flows.
   - Store the User info in Dynamodb

2. **Part 2** – React integration:
   - Bootstrapping the React app.
   - Upload it to Static S3 Bucket
   - Handling registration, login, and protected routes.

---

##  Getting Started

### Prerequisites
- Node.js and npm
- AWS account
- AWS CLI configured locally

### Setup Steps

#### 1. Cognito Configuration (Part 1)
- Create a **user pool** in AWS Cognito.
- Create an **app client** and configure allowed callback/logout URLs.
- (Optional) Set up a **domain** for the Cognito Hosted UI.

#### 2. React App Setup (Part 2)
```bash
npx create-react-app my-auth-app
cd my-auth-app
npm install aws-amplify @aws-amplify/ui-react

