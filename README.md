# 📸 KujtoTiranën API

A simple image upload and retrieval API built with **Node.js**, **Express**, **MongoDB**, **AWS S3**, and **Google Cloud Vision**.  
It allows users to upload photos, which are validated for safety, stored securely, and retrieved by location.

---

## 🚀 Getting Started

1. Install dependencies:

   ```bash
   npm install
   npm start
   ```

## 📍 API Endpoints

### 📤 POST `/api/v1/photos`

Upload a new photo.

#### ✅ Required Fields (`multipart/form-data`):

| Field            | Type   | Description                        |
| ---------------- | ------ | ---------------------------------- |
| `image`          | File   | The image file to upload           |
| `description`    | String | Description of the photo           |
| `locationFamily` | String | Category representing the location |
| `originYear`     | String | Year the photo was taken           |
| `firstName`      | String | First name of the uploader         |
| `lastName`       | String | Last name of the uploader          |
| `email`          | String | Email of the uploader              |

📌 **Photos are validated using Google Cloud Vision API to ensure no explicit content is uploaded.**

---

### 📥 GET `/api/v1/photos/:locationFamily`

Retrieve photos by location category.

#### 🔎 Optional Query Parameters:

| Parameter | Type   | Default | Description                |
| --------- | ------ | ------- | -------------------------- |
| `page`    | Number | `1`     | Page number for pagination |
| `limit`   | Number | `20`    | Number of results per page |

📌 **Results are sorted by `originYear` in ascending order.**

---

### ✅ Example Success Response:

```json
{
  "status": "Success",
  "currentPage": "",
  "totalPages": "",
  "results": "",
  "data": [
    {
      "url": "",
      "description": "",
      "year": "",
      "name": ""
    },
    {
      "url": "",
      "description": "",
      "year": "",
      "name": ""
    }
  ]
}
```

### ❌ Example 404 Response:

```json
{
  "status": "fail",
  "message": "No photos found for this location."
}
```

## 🛠 Obtaining Google Cloud Application Credentials

To get **Google Cloud Application Credentials** (a service account key) for your project, follow these steps:

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

   ## 🛠 Obtaining AWS Access Key ID and Secret Access Key

To obtain **AWS Access Key ID** and **Secret Access Key**, follow these steps:

1. **Log in to AWS Management Console**:

   - Visit [AWS Management Console](https://aws.amazon.com/console/).
   - Log in with your AWS account.

2. **Go to IAM (Identity and Access Management)**:

   - In the AWS Console, search for **IAM** and open the **IAM Dashboard**.

3. **Create a New User**:

   - On the left sidebar, go to **Users** and click **Add user**.
   - Enter a **User name** (e.g., `api-user`).
   - Choose **Programmatic access** to allow the user to access AWS through the API, CLI, or SDK.

4. **Set Permissions**:

   - You can attach policies directly to the user. For example, you might want to assign the policy `AmazonS3FullAccess` for S3 access or custom policies based on your use case.
   - Click **Next**.

5. **Review and Create**:

   - Review your settings and click **Create user**.
   - After creation, you will see a success screen with the **Access Key ID** and **Secret Access Key**.
   - **Download the `.csv`** or copy and save these credentials in a secure place.

6. **Add the Credentials to the `.env` File**:

   - In your `.env` file, add the following variables:

   ```env
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   ```

   ## 🛠 Obtaining MongoDB Cluster Connection String

To obtain a **MongoDB Atlas Cluster** connection string:

1. **Go to MongoDB Atlas**:

   - Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

2. **Create or Select a Project**:

   - Select an existing project or create a new one in MongoDB Atlas.

3. **Create a Cluster**:

   - Click **Build a Cluster** and follow the on-screen instructions.
   - You will need to choose your cloud provider, region, and cluster size.

4. **Create Database User**:

   - In your cluster's dashboard, navigate to **Database Access** and click **Add New Database User**.
   - Enter the **username** and **password** for your database user.
   - Make sure the user has proper permissions to read and write to the database.

5. **Get the Connection String**:
   - Go to the **Clusters** tab and click **Connect**.
   - Select **Connect Your Application** and choose your driver (e.g., Node.js).
   - Copy the connection string provided, and replace `<USERNAME>`, `<PASSWORD>`, `<CLUSTERNAME>`, `<PROJECT_NAME>`, and `<APP_NAME>` with your specific details.

---

## 🛠 Example `config.env` File Configuration

Here is an example `.env` configuration file that includes the **Google Cloud**, **AWS**, and **MongoDB** variables:

```env
PORT=8000
GOOGLE_APPLICATION_CREDENTIALS=path_to_your_service_account.json
DATABASE=mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTERNAME>.mongodb.net/<PROJECT_NAME>?retryWrites=true&w=majority&appName=<APP_NAME>
DATABASE_PASSWORD=your_database_password
AWS_ACCESS_KEY=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1
S3_BUCKET_NAME=your_s3_bucket_name
```
