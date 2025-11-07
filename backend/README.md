# 📸 KujtoTiranën API

A simple image upload and retrieval API built with **Node.js**, **Express**, **MongoDB**, **AWS S3**, and **Google Cloud Vision**.  
It allows users to upload photos, which are validated for safety, stored securely, and retrieved by location.

---
## 🚀 Getting Started

1. Install *dependencies* (also watch the video "Manual sesi ta hapesh faqen.mp4"):
   _for backend_
   cd backend
   npm install
   npm start
   
   _for frontend_
   cd backend
   npm install
   npm start
   ```

## 🛠 Obtaining Google Cloud Application Credentials

Since we're using the **Cloud Vision API** in our project, we need to authenticate our application with Google Cloud. This requires setting up **Google Application Credentials** so the API can access and analyze images securely. Follow the steps below to connect your project and enable image processing.

To get **Google Cloud Application Credentials** (a service account key) for your project:

1. **Go to the Google Cloud Console**:

   - Visit [Google Cloud Console](https://console.cloud.google.com/).

2. **Create or Select a Project**:

   - In the top bar, select an existing project or create a new one.

3. **Navigate to IAM & Admin**:

   - In the left sidebar, go to **IAM & Admin** > **Service Accounts**.

4. **Create a Service Account**:

   - Click **Create Service Account** at the top.
   - Provide a name and description for the service account (e.g., "API Service Account").
   - Assign it a role (for example, **Project > Owner** or a specific role depending on your needs).
   - Click **Create**.

5. **Create and Download the Key**:

   - After creating the service account, click on it in the list.
   - Go to the **Keys** tab, then click **Add Key** > **Create New Key**.
   - Select **JSON** as the key type and click **Create**.
   - A `.json` file will be downloaded to your computer. This is the **Google Application Credentials** file.

6. **Set the Path to the Credentials**:

   - Place the downloaded `.json` file in a secure location.
   - Set the path to this file in your `.env` file like so:

   ```env
   GOOGLE_APPLICATION_CREDENTIALS=path_to_your_service_account.json
   ```


