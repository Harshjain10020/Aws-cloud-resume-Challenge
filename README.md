# Harsh Jain's AWS Cloud Resume Challenge

Welcome to the repository for my personal portfolio website, built as part of the **AWS Cloud Resume Challenge**.  
This project showcases my skills in **cloud computing, serverless architecture, CI/CD, and modern web development**.  

🌐 **Live Website:** [cloud-resume.jainharsh.tech](https://cloud-resume.jainharsh.tech/)

---

## 🚀 Project Overview
The Cloud Resume Challenge is a hands-on project designed to build and deploy a personal resume website using a wide range of AWS services.  
The primary goal is to create a fully **serverless, scalable, and automated portfolio**.  

This repository documents:
- The **architecture**
- The **technologies used**
- The **evolution** of the project (from Vanilla JS to React)

---

## ✨ Core Features
- **Static Website Hosting:** Amazon S3 for frontend hosting.  
- **Global Content Delivery:** Amazon CloudFront as CDN with HTTPS.  
- **Serverless API:** AWS Lambda + API Gateway powering a real-time visitor counter.  
- **NoSQL Database:** Amazon DynamoDB stores visitor count.  
- **Automated Deployments:** GitHub Actions deploy on every push to `main`.  

---

## 🏗️ Architecture Diagram
```mermaid
graph TD
    subgraph "Frontend Layer"
        User[👨‍💻 User] -->|1. Requests domain| Route53[🌐 Route 53]
        Route53 -->|2. Routes traffic| CloudFront[☁️ CloudFront]
        CloudFront -->|3. Serves static React app| S3[📦 S3 Bucket]
    end

    subgraph "Backend Layer (Visitor Counter API)"
        User -- API Call -->|4. GET Request| APIGateway[🔗 API Gateway]
        APIGateway -->|5. Invoke| Lambda[λ AWS Lambda]
        Lambda -->|6. Update & retrieve| DynamoDB[🗄️ DynamoDB]
    end

    DynamoDB --> Lambda
    Lambda --> APIGateway
    APIGateway -->|7. Response| User
