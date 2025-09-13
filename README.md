Harsh Jain's AWS Cloud Resume Challenge
Welcome to the repository for my personal portfolio website, built as part of the AWS Cloud Resume Challenge. This project showcases my skills in cloud computing, serverless architecture, CI/CD, and modern web development.
Visit the live website: https://cloud-resume.jainharsh.tech/
Project Overview
The Cloud Resume Challenge is a hands-on project designed to build and deploy a personal resume website using a wide range of AWS services. The primary goal is to create a fully serverless, scalable, and automated portfolio. This repository documents the architecture, the technologies used, and the evolution of the project.
Core Features
Static Website Hosting: The portfolio is hosted as a static website on Amazon S3.
Global Content Delivery: Amazon CloudFront serves as the Content Delivery Network (CDN) to ensure low-latency access for users worldwide and provides HTTPS security.
Serverless API: A serverless API built with AWS Lambda and API Gateway powers a real-time visitor counter.
NoSQL Database: Amazon DynamoDB is used as a highly scalable, serverless database to store and retrieve the visitor count.
Automated Deployments: A CI/CD pipeline using GitHub Actions automatically builds and deploys the frontend to S3 upon every push to the main branch.
Architecture Diagram
The application follows a decoupled, serverless architecture. The diagram below illustrates the flow of data from the user to the various AWS services.
graph TD
    subgraph "Frontend Layer"
        User[👨‍💻 User] -->|1. Requests domain| Route53[🌐 AWS Route 53]
        Route53 -->|2. Routes traffic| CloudFront[☁️ AWS CloudFront]
        CloudFront -->|3. Serves static React app| S3[📦 AWS S3 Bucket]
    end

    subgraph "Backend Layer (Visitor Counter API)"
        User -- API Call -->|4. GET Request| APIGateway[🔗 AWS API Gateway]
        APIGateway -->|5. Invokes function| Lambda[λ AWS Lambda]
        Lambda -->|6. Updates & retrieves count| DynamoDB[🗄️ AWS DynamoDB]
    end

    DynamoDB -->|Returns count| Lambda
    Lambda -->|Returns count| APIGateway
    APIGateway -->|7. Returns count to user| User


Flow Description:
A user visits cloud-resume.jainharsh.tech.
Route 53 routes the traffic to the CloudFront distribution.
CloudFront serves the static website content (React App) from the S3 bucket.
The React app makes an API call to API Gateway to fetch the visitor count.
API Gateway triggers the Lambda function.
The Lambda function (written in Python) communicates with the DynamoDB table to read and increment the visitor count.
The updated count is returned through the API to the frontend and displayed to the user.
Project Evolution: From Vanilla JS to React
This project has undergone two major iterations, demonstrating an evolution in frontend development practices while maintaining a consistent and robust backend.
Version 1: The Original (HTML, CSS, JavaScript)
The initial version of the website was built with core web technologies:
HTML5: For the structure and content.
CSS3: For styling and layout.
Vanilla JavaScript: For interactivity and fetching the visitor count from the API.
This version established the core cloud infrastructure and proved the viability of the serverless backend. It was simple, fast, and effective.
Version 2: The Upgrade (React & Vite)
To enhance the developer experience and create a more maintainable and modern frontend, the project was migrated to React.
React: A component-based architecture was implemented, making the UI easier to manage, update, and scale.
Vite: The project uses Vite as its build tool, providing a significantly faster development server and an optimized build process.
JSX: The code was refactored from separate HTML and JS files into reusable React components using JSX.
This migration to a modern framework demonstrates the ability to adapt and refactor a project while leveraging the power of a decoupled backend, which remained unchanged during the frontend upgrade.
CI/CD Pipeline with GitHub Actions
The deployment of the frontend is fully automated using GitHub Actions.
Trigger: A git push to the main branch triggers the workflow.
Build: The workflow checks out the code and runs npm run build to compile the React application into static files in the dist directory.
Deploy: The contents of the dist directory are synced to the S3 bucket using the AWS CLI.
Invalidate Cache: An invalidation is created for the CloudFront distribution to ensure that the latest version of the website is served to all users immediately.
This automation eliminates manual deployment steps, reduces the risk of human error, and ensures a fast and reliable release process.
Challenges and Learning Outcomes
IAM Roles & Permissions: Configuring the correct IAM permissions for Lambda to access DynamoDB and for GitHub Actions to access S3 and CloudFront was a critical learning experience in AWS security.
CORS (Cross-Origin Resource Sharing): Properly configuring CORS on the API Gateway was essential to allow the frontend to make requests to the backend API.
Frontend Evolution: Migrating from a traditional HTML/CSS/JS stack to a modern React build pipeline highlighted the benefits of component-based architecture and modern tooling.
Infrastructure as Code (IaC) Principles: While the infrastructure was initially configured manually via the AWS Console, the project design follows principles that would make it easy to manage with IaC tools like AWS SAM or Terraform in the future.
Future Improvements
Implement IaC: Define the entire cloud infrastructure as code using AWS SAM or Terraform for better version control and reproducibility.
Add Backend Tests: Implement unit and integration tests for the Python Lambda function.
Enhance the UI/UX: Add more animations, transitions, and refine the mobile responsiveness further.
Thank you for visiting my project repository!
