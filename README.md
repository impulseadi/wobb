# Wobb Web App

## Overview
Wobb is a web application designed for influencers to browse and apply for brand campaigns. This repository contains the frontend code for the responsive Wobb homepage, developed using React.js, Shadcn UI components, and TailwindCSS. The app features an interactive layout with campaign cards, a navigation bar, and dynamic state management to handle user interactions.

## Live Link
[Wobb Web App](https://wobb-611j.vercel.app/)

## Tech Stack
- **Frontend**: React.js, TailwindCSS
- **UI Components**: Shadcn UI (Button, Card, Progress, Dialog, Badge)
- **State Management**: React useState Hook
- **JavaScript**: ES6+

## Screenshots
### Navbar
![Screenshot 2025-03-17 221404](https://github.com/user-attachments/assets/7c72a18b-4d71-449f-8452-90f3d621863a)
### Cards Section
![Screenshot 2025-03-17 221414](https://github.com/user-attachments/assets/12bd5712-0199-4d4f-bf75-6f5a2f848a05)
### Frontend of Web App
![Screenshot 2025-03-17 221438](https://github.com/user-attachments/assets/243736c1-319d-4bf3-b28d-cc2361d70020)
### Dialog section after Apply Now
![Screenshot 2025-03-17 221453](https://github.com/user-attachments/assets/23d73bc9-869d-4d62-9014-e349b9d2f92d)

## Prerequisites
Before running the project locally, ensure you have the following installed:
- **Node.js (version 14 or above)**
  - Install Node.js from [here](https://nodejs.org/)
- **npm (Node Package Manager)**
  - npm comes pre-installed with Node.js.
- **Git**
  - Download and install Git from [here](https://git-scm.com/).

## Setup and Installation
Follow these steps to set up the project on your local machine:

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/wobb-web-app.git
   cd wobb-web-app
   ```

2. **Install dependencies**
   Run the following command to install the necessary npm packages:
   ```bash
   npm install
   ```
   This will install all the required libraries, including React, TailwindCSS, and Shadcn UI.

3. **Start the development server**
   To run the project locally, use the following command:
   ```bash
   npm start
   ```
   This will launch the app at [http://localhost:5173/](http://localhost:5173/) in your default web browser.

## Commands
- **Install Dependencies:**
  ```bash
  npm install
  ```

- **Run Locally:**
  ```bash
  npm start
  ```

- **Build for Production:**
  ```bash
  npm run build
  ```

## Used Libraries and Components
- **React**: The main library for building the UI.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Shadcn UI**: For pre-built UI components such as:
  - Button
  - Card
  - Progress
  - Dialog
  - Badge

## Component Structure
The app is structured as follows:
```
src/
├── components/
│   ├── Navbar.js        # The top navigation bar.
│   ├── Footer.js        # The footer section of the homepage.
│   ├── CampaignsList.js # List of campaign cards.
│   ├── CampaignCard.js  # Individual campaign card with application flow.
│   └── ui/
│       ├── card.jsx     # Shadcn Card component.
│       ├── badge.jsx     # Shadcn Badge component.
│       ├── button.jsx    # Shadcn Button component.
│       ├── progress.jsx  # Shadcn Progress component.
│       ├──-dialog.jsx    # Shadcn Dialog component.
├── App.js               # Main application file that ties everything together.
└── index.js             # Entry point of the app.
```

## State Management
- `useState` hook is used to manage local component state, such as the application status of a campaign.
- Dynamic updates are triggered in components like the `CampaignCard` (e.g., applying for a campaign).

## Shadcn Components
- **Card**: Used to display individual campaigns with dynamic details such as brand name, description, and hiring status.
- **Button**: Interactive elements for actions like "Apply Now."
- **Progress**: Shows the hiring progress for each campaign.
- **Dialog**: A confirmation dialog when a user applies for a campaign.
- **Badge**: Displays campaign labels or voucher information.

## Demo Video
Watch a demo walkthrough of the project here: [Demo Video](https://drive.google.com/file/d/1urGuArKY0BPohjBxDQf6Gaxnmv57V5Ch/view?usp=sharing)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

