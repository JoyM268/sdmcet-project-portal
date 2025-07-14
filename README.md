# SDMCET Project Portal

A web application to submit, manage, and explore student project ideas. The portal allows students to submit their projects and view projects of their peers.


## Live Website

You can view the live website here: [https://sdmcetprojectportal.rf.gd/](https://sdmcetprojectportal.rf.gd/)


## Table of Contents
1. [Features](#features)
2. [Screenshots](#screenshots)
3. [Installation & Usage](#installation--usage)
4. [SQL Schema](#sql-schema)
5. [Team Members](#team-members)
6. [Contact](#contact)


## Features
- Submit new project ideas with details (title, description, members, semester, link, email)
- Browse all submitted projects
- Filter and search projects by title, semester, or member count
- Contact form for feedback or queries


## Screenshots

Below are some screenshots showcasing the application's features and appearance:

| Screenshot | Description |
|------------|-------------|
| ![Homepage](https://github.com/JoyM268/sdmcet-project-portal/blob/main/images/homepage.png) | The homepage where users are welcomed and can navigate to submit or view projects. |
| ![Submit Project Form](https://github.com/JoyM268/sdmcet-project-portal/blob/main/images/project_form.png) | The form where students can submit their project details. |
| ![Project List](https://github.com/JoyM268/sdmcet-project-portal/blob/main/images/project_list.png) | The list of all submitted projects, with search and filter options. |
| ![Contact Page](https://github.com/JoyM268/sdmcet-project-portal/blob/main/images/contact.png) | The contact page for users to send feedback or queries. |
| ![About Us](https://github.com/JoyM268/sdmcet-project-portal/blob/main/images/about.png) | The about us page with information about the portal and team. |


## Installation & Usage

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JoyM268/sdmcet-project-portal.git
   ```
   ```bash
   cd sdmcet-project-portal
   ```

2. **Set up the environment:**
   - Install [XAMPP](https://www.apachefriends.org/) (includes MySQL and Apache).
   - Start Apache and MySQL from the XAMPP control panel.
   - Open phpMyAdmin (usually at http://localhost/phpmyadmin).
   - Create a database named `ProjectPortal`.
   - Use the SQL schema below to create the required tables.

3. **Configure the server:**
   - Place the project folder in your web server’s root directory (e.g., `htdocs` for XAMPP).

4. **Access the portal:**
   - Open your browser and go to `http://localhost/sdmcet-project-portal/index.html`


## SQL Schema

```sql
CREATE TABLE ProjectList (
    Title VARCHAR(255) PRIMARY KEY,
    Link VARCHAR(255),
    Email VARCHAR(255),
    MemberCount INT,
    MemberNames TEXT,
    Semester INT,
    Description TEXT
);
```

*For the contact form:*
```sql
CREATE TABLE ContactData (
    First_Name VARCHAR(255),
    Last_Name VARCHAR(255),
    Email VARCHAR(255),
    Phone_No BIGINT,
    Message TEXT
);
```


## Team Members
- [Joy Mascarenhas](https://github.com/JoyM268)
- [Pratham Manabasannanavar](https://github.com/PrathamManabasannanavar)


## Contact

For any queries or feedback, please email: [joy.mascarenhas@outlook.com](mailto:joy.mascarenhas@outlook.com)




