# 🎓 School Management System

A comprehensive, full-stack school management system built with modern technologies, featuring a premium UI/UX design, role-based authentication, and complete administrative capabilities.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Java](https://img.shields.io/badge/Java-17-orange.svg)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.1-brightgreen.svg)
![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![MySQL](https://img.shields.io/badge/MySQL-8.0-blue.svg)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Architecture](#-architecture)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Running the Application](#-running-the-application)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)
- [User Roles](#-user-roles)
- [Screenshots](#-screenshots)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

The School Management System is a modern, production-ready application designed to streamline educational institution management. It provides separate interfaces for students, teachers, and administrators with role-based access control, authentication, and comprehensive management features.

### Key Highlights

- **Premium UI/UX Design** - Beautiful gradients, animations, and glassmorphism effects
- **Role-Based System** - Separate dashboards for Students, Teachers, and Administrators
- **Comprehensive Features** - Student, teacher, class, subject, attendance, fee, and marks management
- **Secure Authentication** - Multi-role login with password recovery and admin approval
- **Fully Responsive** - Mobile-optimized design for all screen sizes
- **Modern Tech Stack** - Spring Boot backend with React frontend

---

## ✨ Features

### 🔐 Authentication & Authorization

- **Multi-Role Login System** - Student, Teacher, and Admin login
- **Separate Registration Flows** - Dedicated forms for students and teachers
- **Password Recovery** - Forgot password with email-based token reset
- **Admin Approval** - New registrations require admin approval before access
- **Secure Sessions** - Password strength validation and secure token handling
- **Admin Panel Access** - Dedicated admin login interface

### 👨‍🎓 Student Management

- **Student Registration** - Comprehensive student enrollment with personal details
- **Student Profiles** - View and manage student information
- **Class Assignment** - Assign students to specific classes
- **Student Dashboard** - Personalized student interface
- **Student Records** - Complete academic history and personal data

### 👨‍🏫 Teacher Management

- **Teacher Registration** - Professional teacher onboarding
- **Teacher Profiles** - Qualifications, subjects, and experience tracking
- **Subject Assignment** - Link teachers to their teaching subjects
- **Teacher Dashboard** - Dedicated teacher interface
- **Class Management** - Teachers can manage their assigned classes

### 🏫 Class & Subject Management

- **Class Creation** - Define grades, sections, and class details
- **Subject Management** - Create and manage academic subjects
- **Class-Subject Mapping** - Link subjects to specific classes
- **Teacher Assignment** - Assign teachers to classes and subjects

### 📊 Attendance & Marks

- **Attendance Tracking** - Record and monitor student attendance
- **Marks Management** - Enter and track student exam scores
- **Grade Calculation** - Automated grading system
- **Performance Reports** - View academic performance data

### 💰 Fee Management

- **Fee Structure** - Define fee categories and amounts
- **Fee Collection** - Track student fee payments
- **Payment History** - Complete payment records
- **Fee Reports** - Generate fee collection reports

### 📅 Timetable

- **Schedule Creation** - Create class timetables
- **Time Slot Management** - Define periods and timings
- **Subject Scheduling** - Assign subjects to time slots
- **Teacher Scheduling** - Link teachers to scheduled classes

### 🎨 Premium UI/UX

- **Gradient Backgrounds** - Beautiful color schemes with animated floating orbs
- **Glassmorphic Cards** - Modern card designs with backdrop blur
- **Smooth Animations** - Slide-up entrance, hover effects, and transitions
- **Password Strength Indicator** - Real-time visual feedback
- **Loading States** - Spinning animations for better UX
- **Alert Components** - Success, error, and info messages
- **Responsive Design** - Optimized for mobile, tablet, and desktop

---

## 🛠 Technology Stack

### Backend

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Java** | 17+ | Programming Language |
| **Spring Boot** | 3.2.1 | Backend Framework |
| **Spring Data JPA** | - | Data Access Layer |
| **Hibernate** | - | ORM Framework |
| **MySQL** | 8.0+ | Database |
| **Lombok** | - | Code Generation |
| **Maven** | - | Build Tool |

### Frontend

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 18.2.0 | UI Framework |
| **React Router DOM** | 6.22.3 | Client-Side Routing |
| **Vite** | 5.2.0 | Build Tool |
| **TailwindCSS** | 3.4.17 | CSS Framework |
| **CSS3** | - | Custom Styling |
| **JavaScript (ES6+)** | - | Programming Language |

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

---

## 🏗 Architecture

### System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     Client Browser                      │
│                   (React Frontend)                      │
└──────────────────────┬──────────────────────────────────┘
                       │ HTTP/REST
                       ↓
┌─────────────────────────────────────────────────────────┐
│                  Spring Boot Backend                    │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │
│  │ Controllers │→ │  Services   │→ │Repositories │    │
│  └─────────────┘  └─────────────┘  └─────────────┘    │
│                                            ↓            │
└────────────────────────────────────────────┼────────────┘
                                             │ JDBC
                                             ↓
                                    ┌─────────────────┐
                                    │  MySQL Database │
                                    └─────────────────┘
```

### Database Schema

The application uses the following main entities:

- **Student** - Student information and details
- **Teacher** - Teacher profiles and credentials
- **ClassRoom** - Class/grade definitions
- **Subject** - Academic subjects
- **Attendance** - Student attendance records
- **Mark** - Exam marks and grades
- **Fee** - Fee structure and payments
- **Timetable** - Class schedules

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

### Required Software

1. **Java Development Kit (JDK)** - Version 17 or higher
   ```bash
   java -version
   ```

2. **Node.js and npm** - Version 16+ recommended
   ```bash
   node -v
   npm -v
   ```

3. **MySQL Server** - Version 8.0 or higher
   ```bash
   mysql --version
   ```

4. **Maven** (Optional) - For building backend
   ```bash
   mvn -v
   ```

### Optional Tools

- **Git** - For version control
- **IntelliJ IDEA / Eclipse** - For backend development
- **VS Code** - For frontend development
- **MySQL Workbench** - For database management
- **Postman** - For API testing

---

## 📥 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/RAMAKRISHNA3488/School-management-System.git
cd School-management-System
```

### 2. Database Setup

#### Option A: Automatic Creation (Recommended)

The application will automatically create the database on first run if it doesn't exist.

#### Option B: Manual Creation

```sql
CREATE DATABASE school_db;
USE school_db;
```

### 3. Backend Setup

```bash
cd backend

# If using Maven Wrapper (Recommended)
# No installation needed, just run:
./mvnw clean install

# If using installed Maven
mvn clean install
```

### 4. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Optional: Clean install (if issues)
npm ci
```

---

## ⚙ Configuration

### Backend Configuration

Edit `backend/src/main/resources/application.properties`:

```properties
# Application Name
spring.application.name=school-management-system

# Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3305/school_db?createDatabaseIfNotExist=true&useSSL=false&allowPublicKeyRetrieval=true
spring.datasource.username=root
spring.datasource.password=system
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA / Hibernate
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=create
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect

# Server Port
server.port=8080
```

#### Important Configuration Notes:

- **Database Port**: Default is `3305` (change to `3306` if using standard MySQL port)
- **Database Name**: `school_db` (auto-created if not exists)
- **Username**: `root` (change to your MySQL username)
- **Password**: `system` (change to your MySQL password)
- **DDL Auto**: `create` - **WARNING**: Drops and recreates tables on every restart
  - Change to `update` for production to preserve data
  - Change to `validate` for production deployments

### Frontend Configuration

Edit `frontend/vite.config.js` if you need to change the dev server port:

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Change if needed
  },
})
```

### API Base URL

The frontend connects to backend at `http://localhost:8080/api`. If you change the backend port, update API calls accordingly.

---

## 🚀 Running the Application

### Development Mode

#### 1. Start MySQL Server

Ensure your MySQL server is running on the configured port.

#### 2. Start Backend Server

```bash
cd backend

# Using Maven Wrapper (Recommended)
./mvnw spring-boot:run

# Using installed Maven
mvn spring-boot:run

# Using IDE
# Open the project in IntelliJ IDEA or Eclipse
# Run SchoolManagementSystemApplication.java
```

**Backend will start on:** `http://localhost:8080`

#### 3. Start Frontend Development Server

```bash
cd frontend

# Start Vite dev server
npm run dev
```

**Frontend will start on:** `http://localhost:5173`

### Production Mode

#### Backend

```bash
cd backend

# Build JAR file
./mvnw clean package

# Run JAR
java -jar target/management-0.0.1-SNAPSHOT.jar
```

#### Frontend

```bash
cd frontend

# Build production bundle
npm run build

# Preview production build
npm run preview

# Deploy the 'dist' folder to your web server
```

---

## 📁 Project Structure

### Backend Structure

```
backend/
├── src/
│   └── main/
│       ├── java/com/school/management/
│       │   ├── SchoolManagementSystemApplication.java
│       │   ├── controller/
│       │   │   ├── AttendanceController.java
│       │   │   ├── AuthController.java
│       │   │   ├── ClassRoomController.java
│       │   │   ├── FeeController.java
│       │   │   ├── MarkController.java
│       │   │   ├── StudentController.java
│       │   │   ├── SubjectController.java
│       │   │   ├── TeacherController.java
│       │   │   └── TimetableController.java
│       │   ├── entity/
│       │   │   ├── Attendance.java
│       │   │   ├── ClassRoom.java
│       │   │   ├── Fee.java
│       │   │   ├── Mark.java
│       │   │   ├── Student.java
│       │   │   ├── Subject.java
│       │   │   ├── Teacher.java
│       │   │   └── Timetable.java
│       │   ├── repository/
│       │   │   ├── AttendanceRepository.java
│       │   │   ├── ClassRoomRepository.java
│       │   │   ├── FeeRepository.java
│       │   │   ├── MarkRepository.java
│       │   │   ├── StudentRepository.java
│       │   │   ├── SubjectRepository.java
│       │   │   ├── TeacherRepository.java
│       │   │   └── TimetableRepository.java
│       │   └── dto/
│       │       ├── AuthResponse.java
│       │       └── LoginRequest.java
│       └── resources/
│           └── application.properties
├── pom.xml
└── target/

```

### Frontend Structure

```
frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── Sidebar.jsx
│   ├── pages/
│   │   ├── admin/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── AdminLayout.jsx
│   │   │   ├── Students.jsx
│   │   │   ├── Teachers.jsx
│   │   │   └── Settings.jsx
│   │   ├── common/
│   │   │   ├── Welcome.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── AdminLogin.jsx
│   │   │   ├── StudentRegister.jsx
│   │   │   ├── TeacherRegister.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   │   └── ResetPassword.jsx
│   │   ├── student/
│   │   │   ├── StudentDashboard.jsx
│   │   │   ├── StudentLayout.jsx
│   │   │   └── StudentProfile.jsx
│   │   └── teacher/
│   │       ├── TeacherDashboard.jsx
│   │       ├── TeacherLayout.jsx
│   │       └── TeacherProfile.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── index.html
├── AUTH_README.md
├── AUTH_DOCUMENTATION.md
├── ADMIN_LOGIN_GUIDE.md
├── BEFORE_AFTER.md
├── SCREEN_FLOW.md
├── QUICK_START.md
└── SUMMARY.md
```

---

## 🔗 API Endpoints

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | User login (student/teacher) |
| POST | `/api/auth/admin/login` | Admin login |
| POST | `/api/auth/register/student` | Student registration |
| POST | `/api/auth/register/teacher` | Teacher registration |
| POST | `/api/auth/forgot-password` | Request password reset |
| POST | `/api/auth/reset-password` | Reset password with token |

### Student Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/students` | Get all students |
| GET | `/api/students/{id}` | Get student by ID |
| POST | `/api/students` | Create new student |
| PUT | `/api/students/{id}` | Update student |
| DELETE | `/api/students/{id}` | Delete student |

### Teacher Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/teachers` | Get all teachers |
| GET | `/api/teachers/{id}` | Get teacher by ID |
| POST | `/api/teachers` | Create new teacher |
| PUT | `/api/teachers/{id}` | Update teacher |
| DELETE | `/api/teachers/{id}` | Delete teacher |

### Class Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/classes` | Get all classes |
| GET | `/api/classes/{id}` | Get class by ID |
| POST | `/api/classes` | Create new class |
| PUT | `/api/classes/{id}` | Update class |
| DELETE | `/api/classes/{id}` | Delete class |

### Subject Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/subjects` | Get all subjects |
| GET | `/api/subjects/{id}` | Get subject by ID |
| POST | `/api/subjects` | Create new subject |
| PUT | `/api/subjects/{id}` | Update subject |
| DELETE | `/api/subjects/{id}` | Delete subject |

### Attendance Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/attendance` | Get all attendance records |
| GET | `/api/attendance/{id}` | Get attendance by ID |
| POST | `/api/attendance` | Create attendance record |
| PUT | `/api/attendance/{id}` | Update attendance |
| DELETE | `/api/attendance/{id}` | Delete attendance |

### Marks Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/marks` | Get all marks |
| GET | `/api/marks/{id}` | Get marks by ID |
| POST | `/api/marks` | Create marks record |
| PUT | `/api/marks/{id}` | Update marks |
| DELETE | `/api/marks/{id}` | Delete marks |

### Fee Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/fees` | Get all fees |
| GET | `/api/fees/{id}` | Get fee by ID |
| POST | `/api/fees` | Create fee record |
| PUT | `/api/fees/{id}` | Update fee |
| DELETE | `/api/fees/{id}` | Delete fee |

### Timetable Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/timetable` | Get all timetables |
| GET | `/api/timetable/{id}` | Get timetable by ID |
| POST | `/api/timetable` | Create timetable |
| PUT | `/api/timetable/{id}` | Update timetable |
| DELETE | `/api/timetable/{id}` | Delete timetable |

---

## 👥 User Roles

### 1. Administrator

**Access Level:** Full system access

**Capabilities:**
- Manage students (add, edit, delete)
- Manage teachers (add, edit, delete)
- Manage classes and subjects
- Approve new registrations
- View all reports and analytics
- Manage attendance records
- Manage fee structures
- Configure system settings
- Access admin panel

**Default Credentials:**
- **Username:** admin
- **Password:** admin

### 2. Teacher

**Access Level:** Limited to assigned classes

**Capabilities:**
- View assigned classes
- Mark student attendance
- Enter student marks
- View student profiles
- Update personal profile
- View timetable
- Generate class reports

### 3. Student

**Access Level:** Personal records only

**Capabilities:**
- View personal profile
- View attendance records
- View marks and grades
- View timetable
- View fee details
- Update password
- View announcements

---

## 📸 Screenshots

### Landing Page

**Premium welcome screen with role selection**

![Welcome Page](frontend/screenshots/welcome.png) *(if available)*

### Login Interface

**Multi-role login with beautiful gradient background**

![Login Page](frontend/screenshots/login.png) *(if available)*

### Admin Dashboard

**Comprehensive admin interface with statistics**

![Admin Dashboard](frontend/screenshots/admin-dashboard.png) *(if available)*

### Student Dashboard

**Student-centric interface with key information**

![Student Dashboard](frontend/screenshots/student-dashboard.png) *(if available)*

### Teacher Dashboard

**Teacher workspace with class management**

![Teacher Dashboard](frontend/screenshots/teacher-dashboard.png) *(if available)*

---

## 🧪 Testing

### Manual Testing

#### 1. Test Authentication Flow

```bash
# 1. Visit the application
http://localhost:5173

# 2. Test Welcome Page
- Click on "Student" role
- Click on "Teacher" role
- Click on "I Already Have an Account"

# 3. Test Registration
- Register as a student
- Register as a teacher
- Verify form validation

# 4. Test Login
- Login as admin (admin/admin)
- Login as student
- Login as teacher

# 5. Test Password Recovery
- Click "Forgot Password"
- Enter email
- Verify email sent message
```

#### 2. Test Admin Features

```bash
# Login as admin (admin/admin)
- Add new student
- Add new teacher
- Create class
- Create subject
- View all records
- Edit records
- Delete records
```

### API Testing with Postman

#### Test Login Endpoint

```json
POST http://localhost:8080/api/auth/login
Content-Type: application/json

{
  "email": "admin@school.com",
  "password": "admin",
  "role": "ADMIN"
}
```

#### Test Student Creation

```json
POST http://localhost:8080/api/students
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@student.com",
  "phone": "1234567890",
  "className": "Grade 10",
  "dateOfBirth": "2008-01-15"
}
```

---

## 🚢 Deployment

### Backend Deployment

#### Option 1: Traditional Deployment (JAR)

```bash
# Build the application
cd backend
./mvnw clean package

# Deploy JAR file to server
scp target/management-0.0.1-SNAPSHOT.jar user@server:/path/to/deploy

# Run on server
java -jar management-0.0.1-SNAPSHOT.jar
```

#### Option 2: Docker Deployment

Create `Dockerfile` in backend directory:

```dockerfile
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/management-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

Build and run:

```bash
docker build -t school-management-backend .
docker run -p 8080:8080 school-management-backend
```

### Frontend Deployment

#### Build Production Bundle

```bash
cd frontend
npm run build
```

#### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

#### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### Deploy to Traditional Server (Apache/Nginx)

```bash
# Copy dist folder to server
scp -r dist/* user@server:/var/www/html/school-management
```

---

## 🎓 Usage Guide

### Getting Started

1. **First Time Setup**
   - Start MySQL server
   - Configure database credentials in `application.properties`
   - Start backend server
   - Start frontend server

2. **Admin Access**
   - Navigate to `http://localhost:5173/admin/login`
   - Login with credentials: admin/admin
   - Configure system settings

3. **Creating Users**
   - Students and teachers can register through the registration pages
   - Admin must approve new registrations
   - Users can then login with their credentials

### Daily Operations

1. **Attendance Marking**
   - Teachers login to their dashboard
   - Navigate to their assigned class
   - Mark student attendance

2. **Marks Entry**
   - Teachers access the marks section
   - Select exam/assessment
   - Enter student marks

3. **Fee Management**
   - Admin defines fee structure
   - Students view fee details
   - Admin tracks payments

---

## 🎨 Design System

### Color Palette

```css
Primary Gradient: #667eea → #764ba2
Accent Gradient:  #f093fb → #f5576c
Success Gradient: #4facfe → #00f2fe
Success:          #10b981
Warning:          #f59e0b
Error:            #ef4444
```

### Animations

- **slideUp** - Page entrance (0.5s)
- **slideDown** - Alerts (0.3s)
- **float** - Background orbs (20s loop)
- **spin** - Loading spinners (0.6s)
- **Hover effects** - All interactive elements

### Typography

- **Headings** - Bold, gradient text
- **Body** - 0.95rem, readable
- **Labels** - 0.875rem, medium weight

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### How to Contribute

1. **Fork the Repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/School-management-System.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/YourFeatureName
   ```

3. **Make Your Changes**
   - Follow existing code style
   - Add comments where necessary
   - Update documentation

4. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add: Your feature description"
   ```

5. **Push to Your Fork**
   ```bash
   git push origin feature/YourFeatureName
   ```

6. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Describe your changes

### Contribution Guidelines

- Write clean, readable code
- Follow existing patterns and conventions
- Add comments for complex logic
- Update README if needed
- Test your changes thoroughly
- Follow commit message conventions

---

## 📝 Changelog

### Version 1.0.0 (Current)

#### Features Added
- ✅ Multi-role authentication system
- ✅ Student management module
- ✅ Teacher management module
- ✅ Class and subject management
- ✅ Attendance tracking
- ✅ Marks management
- ✅ Fee management
- ✅ Timetable functionality
- ✅ Admin dashboard
- ✅ Student dashboard
- ✅ Teacher dashboard
- ✅ Password recovery system
- ✅ Premium UI/UX design
- ✅ Responsive layout
- ✅ Form validations

#### Known Issues
- Email functionality for password reset requires SMTP configuration
- Real-time notifications not implemented
- File upload for profile pictures pending

---

## 🔮 Future Enhancements

### Planned Features

- [ ] Real-time notifications
- [ ] Email integration (SMTP)
- [ ] SMS notifications
- [ ] File upload (profile pictures, documents)
- [ ] Advanced reporting and analytics
- [ ] Parent portal
- [ ] Library management
- [ ] Hostel management
- [ ] Transport management
- [ ] Online exam system
- [ ] Video conferencing integration
- [ ] Mobile application (React Native)
- [ ] Progressive Web App (PWA)
- [ ] Multi-language support
- [ ] Dark mode
- [ ] CSV/Excel import/export
- [ ] Advanced search and filters
- [ ] Calendar integration
- [ ] Print-friendly reports
- [ ] Backup and restore

---

## 📞 Support

### Having Issues?

1. **Check Documentation**
   - [AUTH_README.md](frontend/AUTH_README.md) - Authentication guide
   - [SCREEN_FLOW.md](frontend/SCREEN_FLOW.md) - User flow diagrams
   - [QUICK_START.md](frontend/QUICK_START.md) - Quick testing guide

2. **Common Issues**

   **Database Connection Error:**
   ```
   Solution: Check MySQL is running and credentials are correct
   ```

   **Port Already in Use:**
   ```
   Solution: Change port in application.properties or vite.config.js
   ```

   **Frontend Not Loading:**
   ```
   Solution: Ensure backend is running and CORS is configured
   ```

3. **Contact**
   - Create an issue on GitHub
   - Email: support@schoolmanagement.com (if available)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### MIT License

```
Copyright (c) 2026 School Management System

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 Acknowledgments

- Spring Boot team for the excellent framework
- React team for the powerful UI library
- MySQL for the robust database system
- All contributors and testers
- Open source community

---

## 📊 Project Status

**Current Version:** 1.0.0  
**Status:** ✅ Production Ready  
**Last Updated:** January 2026  
**Maintained:** Yes

---

## 🎯 Quick Links

- **Live Demo:** [Coming Soon](#)
- **Documentation:** [See frontend docs](frontend/)
- **API Docs:** [See API section](#-api-endpoints)
- **Issues:** [GitHub Issues](https://github.com/RAMAKRISHNA3488/School-management-System/issues)
- **Discussions:** [GitHub Discussions](https://github.com/RAMAKRISHNA3488/School-management-System/discussions)

---

## 📈 Statistics

- **Total Files:** 50+
- **Lines of Code:** 5,000+
- **Components:** 20+
- **API Endpoints:** 40+
- **Database Tables:** 8

---

<div align="center">

**Made with ❤️ for Educational Institutions**

[⬆ Back to Top](#-school-management-system)

---

**⭐ Don't forget to star this repository if you found it helpful! ⭐**

</div>
