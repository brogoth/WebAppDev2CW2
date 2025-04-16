
---

## Final TestReport.md

```markdown
# Test Report for Dance Organisation Booking System

## Overview
This document provides a summary of the manual tests performed on the Dance Organisation Booking System. It includes tests for public page accessibility, user authentication, and course management functionalities.

## Test Cases

### 1. Home Page
- **Test ID:** HP-01
- **Description:** Verify that the home page loads correctly with a hero section and an "About Us" section.
- **Steps:**
  1. Open the browser and navigate to [http://localhost:9000](http://localhost:9000).
  2. Observe the hero section with a background image and welcoming text.
  3. Check that the "About Us" section contains company information and a properly displayed image.
- **Expected Outcome:**  
  The home page displays the hero section, company information, and navigation links.
- **Result:** PASSED

### 2. Navigation & Role-Based Links
- **Test ID:** NAV-01
- **Description:** Verify the navigation bar updates based on user authentication and roles.
- **Steps:**
  1. Access the home page without logging in and confirm that "Login" and "Register" links are visible.
  2. Log in as a regular user and verify that "Logout" appears but the "Add Course" link is hidden.
  3. Log in as an organiser and verify that the "Add Course" link is visible.
- **Expected Outcome:**  
  The navigation bar correctly reflects the user's authentication state and role.
- **Result:** PASSED

### 3. User Authentication
#### a. Registration
- **Test ID:** AUTH-01
- **Description:** Test the registration flow.
- **Steps:**
  1. Navigate to the registration page.
  2. Enter a unique username and a valid password.
  3. Submit the form.
- **Expected Outcome:**  
  The system registers the new user and redirects to the home page with a welcome message.
- **Result:** PASSED

#### b. Login
- **Test ID:** AUTH-02
- **Description:** Test successful and unsuccessful login attempts.
- **Steps:**
  1. Log in with valid credentials; verify redirection to the home page with a welcome message.
  2. Attempt to log in with invalid credentials; verify that an error message is displayed.
- **Expected Outcome:**  
  Successful logins redirect correctly, and unsuccessful attempts show an appropriate error.
- **Result:** PASSED

#### c. Logout
- **Test ID:** AUTH-03
- **Description:** Test the logout functionality.
- **Steps:**
  1. Log in as any user.
  2. Click the "Logout" link.
- **Expected Outcome:**  
  The session is destroyed and the user is redirected to the home page.
- **Result:** PASSED

### 4. Course Management (Organiser Only)
#### a. Add New Course
- **Test ID:** CM-01
- **Description:** Test the creation of a new course.
- **Steps:**
  1. Log in as an organiser.
  2. Click the "Add Course" link.
  3. Fill in course details (e.g., Title: "Samba", Duration: "1 Hour", Description: "Learn how to samba like the pro's!").
  4. Submit the form.
- **Expected Outcome:**  
  The new course is created and visible on the courses list.
- **Result:** PASSED

#### b. Edit Course
- **Test ID:** CM-02
- **Description:** Test the editing functionality.
- **Steps:**
  1. As an organiser, click on an existing course to view its details.
  2. Click the "Edit Course" link.
  3. Modify some of the course details and submit the changes.
- **Expected Outcome:**  
  The course details are updated and correctly displayed on the course details page.
- **Result:** PASSED

#### c. Delete Course
- **Test ID:** CM-03
- **Description:** Test the deletion functionality.
- **Steps:**
  1. As an organiser, view the details of an existing course.
  2. Click the "Delete Course" button.
- **Expected Outcome:**  
  The course is removed from the courses list.
- **Result:** PASSED

### 5. Responsiveness & Accessibility
- **Test ID:** UI-01
- **Description:** Verify the application is responsive and text remains legible across devices.
- **Steps:**
  1. Resize the browser window or use the device toolbar in developer tools.
  2. Check that the layout adapts and is readable.
- **Expected Outcome:**  
  The UI adjusts smoothly for various screen sizes, and text overlays are legible due to proper contrast.
- **Result:** PASSED

## Summary
All core functionalities have been manually tested and are working as expected. The application meets the project requirements, and the design enhancements (including improved navigation, dynamic images, and responsive layout) contribute to a robust user experience.

The manual test report confirms that:
- Public pages load correctly.
- User authentication behaves as intended.
- Organiser-specific features (course creation, editing, and deletion) are working.
- The UI remains responsive and accessible on different devices.

This completes the test report for the Dance Organisation Booking System.
