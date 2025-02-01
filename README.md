# Faqs-Management-System

## Overview

This FAQ Management System allows users to create and manage Frequently Asked Questions (FAQs) with multilingual support. It uses Prisma ORM with a PostgreSQL database for storing FAQs and leverages LibreTranslate for automatic translations in Hindi and Bengali.

## Features

- **Multilingual Support**: Create FAQs in English and automatically translate them into Hindi and Bengali.
- **CRUD Operations**: Perform Create, Read operations for FAQ management.
- **Dockerized Setup**: Run the entire application using Docker for easy setup and deployment.
- **PostgreSQL Database**: All FAQ data is stored in a PostgreSQL database, managed with Prisma ORM.
- **Translation**: Use LibreTranslate for language translation (self-hosted for better control).

## Getting Started

Follow these steps to get the application running locally or in a Docker environment.

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/Rohan5050/faq-management-system.git
```

### 2. Install Dependencies

Run the following command to install all required dependencies:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project directory and configure it with the following settings:

```bash
DATABASE_URL=your-postgresql-connection-string
LIBRETRANSLATE_URL=http://localhost:5000
```

### 4. Run the Application Locally

Ensure the PostgreSQL Database is running. Start the application using:

```bash
npm run dev
```

### 5. Use Docker to Run the Entire Stack

Build and start services:

```bash
docker-compose up --build
```

### 6. Access the Application

The application will be available at [http://localhost:8080](http://localhost:8080).

## API Routes

The application exposes the following API routes for managing FAQs:

- `GET /api/faqs`: Fetch FAQs in English.
- `GET /api/faqs/?lang=hi`: Fetch FAQs in Hindi.
- `GET /api/faqs/?lang=bn`: Fetch FAQs in Bengali.
- `POST /api/faqs`: Create a new FAQ(Stores Faq in the Database).
