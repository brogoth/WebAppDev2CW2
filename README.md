# WebAppDev2CW2
# Dance Organisation Booking System

## Project Overview
The Dance Organisation Booking System is a web application created to help a local dance organization manage and book dance courses. The system features two primary user interfaces:  
- A **public interface** where visitors can view available courses and learn about the organization.  
- An **organiser interface** that allows authorised users to create, edit, and delete course entries.

This project demonstrates a modular MVC architecture, RESTful routing, session-based authentication, robust error handling, and a modern, responsive UI built with Bootstrap and dynamic images from Unsplash.

## Features

### Public Interface
- **Home Page:**  
  - A visually appealing hero section with a dynamic background image and overlay for readability.
  - An "About Us" section featuring background information about the dance organization and a responsive image.
- **Course Listings:**  
  - Displays available courses with title, duration, and brief descriptions.
- **Course Details:**  
  - Detailed information for each course, including class schedules (if any) and organiser controls when logged in as an organiser.

### Organiser Interface
- **User Authentication:**  
  - Registration, login, and logout functionalities with secure password hashing (bcrypt).
  - Role-based access control that shows organiser-specific options (e.g., "Add Course").
- **Course Management:**  
  - **Add Course:** Organisers can create new courses by providing a title, duration, and description.
  - **Edit Course:** Update existing course details.
  - **Delete Course:** Remove courses from the system.

### UI/UX Enhancements
- **Responsive Design:**  
  - The application is built with Bootstrap 5 to ensure a responsive and modern look across devices.
- **Dynamic Images:**  
  - Background images and the About Us image are sourced dynamically from Unsplash with fallback styling.
- **User-Friendly Navigation:**  
  - Conditional navigation elements adjust based on user authentication status and role.

## Technology Stack
- **Backend:** Node.js with Express
- **Database:** NeDB (a lightweight, file-based database)
- **Templating Engine:** Mustache
- **Authentication:** Session-based using express-session and bcrypt for password hashing
- **UI Framework:** Bootstrap 5 (via CDN)
- **Version Control:** Git

## Installation & Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/brogoth/WebAppDev2CW2
   cd dance-org-booking

2. **Install Dependencies:**
   ```bash
   Copy
   npm install
3. **Start the Server:**
   ```bash
   Copy
   npm start
4. **Access the Application:**
 Open your web browser and navigate to http://localhost:9000.
5. **Organiser**
Login as Organiser to create classes, or register to view 
 Username: Organiser
 Password: 123456789
### Test Report Summary

- **Home Page:** PASSED – Displays hero section, dynamic background image, and About Us content.
- **Navigation & Role-Based Links:** PASSED – Navigation correctly reflects the user's authentication and organiser status.
- **User Authentication:**  
  - Registration: PASSED  
  - Login: PASSED  
  - Logout: PASSED
- **Course Management:**  
  - Add Course: PASSED  
  - Edit Course: PASSED  
  - Delete Course: PASSED
- **Responsiveness & Accessibility:** PASSED – The UI adapts to various screen sizes, and text remains legible.

## Known Issues & Future Enhancements

- **Database Security:**  
  NeDB and its dependencies have known vulnerabilities. For a production system, a more secure database (e.g., MongoDB) is recommended.
- **UI/UX Improvements:**  
  Further enhancements such as refined animations, improved typography, and custom branding could elevate the visual appeal.
- **Automated Testing:**  
  Currently, testing is manual; adding automated tests with frameworks like Mocha/Chai would improve robustness and maintainability.
- **Feature Extensions:**  
  Future versions may include class scheduling within courses, user profile management, and search/filter options for courses.

## Deployment & Demonstration

- **Local Deployment:**  
  Follow the setup instructions above to run the project locally.
- **Demonstration Video:**  
  A demonstration video showcasing all core functionalities (home page, authentication, course management, responsiveness) is included in the submission package.
- **Version Control:**  
  The Git commit history reflects the development progress and improvements made throughout the project lifecycle.

## Author

- **Name:** Ross Inglis
- **Email:** Ringli300@caledonian.ac.uk
