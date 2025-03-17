# Wobb Web App

## Overview
Wobb is a web application designed for influencers to browse and apply for brand campaigns. This repository contains the frontend code for the responsive Wobb homepage, developed using React.js, Shadcn UI components, and TailwindCSS. The app features an interactive layout with campaign cards, a navigation bar, and dynamic state management to handle user interactions.

## Tech Stack
- **Frontend**: React.js, TailwindCSS
- **UI Components**: Shadcn UI (Button, Card, Progress, Dialog, Badge)
- **State Management**: React useState Hook
- **JavaScript**: ES6+

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
   This will launch the app at [http://localhost:3000/](http://localhost:3000/) in your default web browser.

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
│   └── CampaignCard.js  # Individual campaign card with application flow.
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

## Screenshots
![Screenshot 1](path/to/screenshot1.png)
![Screenshot 2](path/to/screenshot2.png)

## Demo Video
Watch a demo walkthrough of the project here: [Demo Video](https://link-to-video)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Notes
- Replace `https://github.com/your-username/wobb-web-app.git` with the actual URL of your GitHub repository.
- Upload the screenshots to an accessible location (GitHub, Dropbox, etc.) and replace `path/to/screenshotX.png` with the appropriate URLs.
- Replace `https://link-to-video` with the URL of the demo video.
