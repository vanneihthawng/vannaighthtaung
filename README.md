# Van Neih Thawng — Personal Portfolio Website

A responsive and interactive personal portfolio website built with **HTML, CSS, and JavaScript** to showcase my **IT Support experience, technical skills, education, certifications, front-end projects, IT labs, and professional background**.

## 📌 About the Project

This portfolio website was created to provide a central place for recruiters, employers, and other professionals to learn about my technical background and view my projects.

The portfolio focuses on two areas:

* 🖥️ **IT Support / Help Desk**
* 🌐 **Front-End Development**

The project was built from scratch using **HTML5, CSS3, and Vanilla JavaScript** without a JavaScript framework.

---

## 🛠️ Technologies Used

### Front-End

* HTML5
* CSS3
* JavaScript

### Libraries & Services

* Font Awesome
* Boxicons
* Google Fonts
* Formspree
* GitHub Pages

### Development Tools

* Git
* GitHub
* Visual Studio Code
* Browser Developer Tools

---

## ✨ Features

### 🏠 Interactive Home Page

The home section introduces different professional roles using animated text:

* IT Support Specialist
* Front-End Developer
* Curious Learner
* Problem-Solver

It also provides quick access to my:

* GitHub
* LinkedIn
* Facebook
* Instagram
* YouTube

---

### 🌙 Dark / Light Mode

The portfolio includes a custom **dark and light theme switcher**.

Features include:

* Dark mode
* Light mode
* Theme-specific colors
* Theme-specific profile images
* Theme-specific logos
* Saved theme preferences

The selected theme is stored using:

```javascript
localStorage
```

This allows the browser to remember the selected theme after the page is refreshed.

---

### 📄 Interactive Resume Section

The resume is separated into multiple interactive tabs:

* Experience
* Education
* Training
* Certificates
* Skills

JavaScript dynamically displays the selected category without reloading the page.

---

## 💼 Experience

The website presents technical and professional experience including:

* IT Support training
* CompTIA A+ and Network+ training
* IT internship experience
* Front-End projects
* Academic IT projects
* Warehouse operations experience
* Volunteer teaching experience

---

## 🎓 Education

The education section presents:

* College education
* Computer Engineering / Information Technology studies
* Technical coursework
* High school education
* Academic honors

---

## 📚 Technical Training

Professional training displayed in the portfolio includes:

* CompTIA A+
* CompTIA Network+
* IT Support
* Help Desk Support
* System Administration
* HTML
* CSS
* JavaScript
* React
* Git
* Version Control
* UI/UX

---

## 🏆 Certifications

The portfolio contains a visual certification section with certificate images and verification links.

Certifications and training displayed include:

* Google IT Support Professional Certificate
* Meta Front-End Development Professional Certificate
* Problem Solving and Decision Making
* Time Management
* Leadership Foundation
* Teacher Training

---

## 🧰 Technical Skills

### IT Support

* IT Support
* Help Desk Support
* Technical Troubleshooting
* Windows 10 / 11
* Hardware Support
* Software Support
* Networking Fundamentals
* Active Directory
* VirtualBox
* System Administration

### Web Development

* HTML
* CSS
* JavaScript
* React
* Bootstrap
* Node.js
* Git
* GitHub

### Tools

* Browser Developer Tools
* Microsoft Office
* WordPress
* Joomla
* Drupal
* Adobe Photoshop
* Adobe Illustrator

### Professional Skills

* Problem Solving
* Decision Making
* Critical Thinking
* Analytical Skills
* Time Management
* Customer Communication

---

# 🚀 Projects

The project section is divided into two main categories:

1. **Front-End Projects**
2. **IT Support Projects**

---

## 🌐 Front-End Projects

### 01 — Grandma Restaurant

A responsive website for a fictional restaurant focused on semantic HTML, layout, and responsive web design.

**Technologies**

```text
HTML
CSS
```

---

### 02 — Disney Channel

A responsive recreation of a Disney Channel-style homepage.

**Technologies**

```text
HTML
CSS
```

---

### 03 — Lucky Shrub

A responsive homepage for a fictional landscaping company focused on modern layout and branding.

**Technologies**

```text
HTML
CSS
```

---

### 04 — Kurbungbel Portfolio

A responsive personal portfolio website developed to showcase achievements and projects.

**Technologies**

```text
HTML
CSS
JavaScript
```

---

### 05 — Personal Portfolio Website

My personal portfolio website created to showcase my:

* Skills
* Experience
* Certifications
* Education
* IT projects
* Front-End projects

**Technologies**

```text
HTML
CSS
JavaScript
```

---

# 🖥️ IT Support Projects

## 01 — Kali Linux Installation on VirtualBox

Installed and configured **Kali Linux on Oracle VirtualBox** and documented the complete installation process.

### Skills Practiced

* Virtual Machine Creation
* Linux Installation
* VirtualBox Configuration
* System Configuration
* Virtualization
* Technical Documentation
* Troubleshooting

---

## 02 — macOS Installation on VirtualBox

Installed and configured **macOS Big Sur on Oracle VirtualBox**.

The lab included:

* Host system preparation
* Virtual machine configuration
* Hyper-V configuration
* Compatibility patching
* macOS installation
* Troubleshooting
* Technical documentation
* Video walkthrough

### Skills Practiced

```text
macOS
VirtualBox
Virtualization
System Configuration
Troubleshooting
Documentation
```

---

## 03 — IT Support Ticketing Cases

Created IT Support ticket cases representing common Help Desk incidents and troubleshooting workflows.

### Topics Covered

* Windows 10 / 11 troubleshooting
* Password resets
* User account issues
* DNS troubleshooting
* VPN troubleshooting
* Printer troubleshooting
* Peripheral troubleshooting
* Hardware troubleshooting
* Software troubleshooting
* Active Directory
* Technical documentation

Repository:

```text
https://github.com/vanneihthawng/IT-Support-Ticket-Case
```

---

# 🎞️ Custom Project Carousel

The Front-End and IT Support project sections contain custom JavaScript project sliders.

The carousel includes:

* Previous project navigation
* Next project navigation
* Project image switching
* Dynamic project descriptions
* Dynamic technology information
* Disabled first/last navigation buttons
* Responsive slide calculations
* Automatic adjustment after browser resize

Each project category maintains its own carousel state.

---

# 🧭 Navigation System

The website contains navigation for:

```text
Home
Resume
Projects
├── Front-End Projects
└── IT Support Projects
About
Contact
```

JavaScript controls section switching without requiring separate HTML pages.

On smaller screens, the navigation changes to a responsive hamburger menu.

---

# 🌎 English / Burmese Translation Effect

Selected text elements can be switched between **English and Burmese**.

A custom JavaScript text scrambling effect is used during translation.

The feature is implemented using a custom:

```javascript
TextScrambler
```

class together with:

```javascript
requestAnimationFrame()
```

to create the animation.

---

# 👤 About Section

The About section describes my background in:

* IT Support
* Computer troubleshooting
* Hardware support
* Software support
* Windows systems
* Networking
* Virtualization
* Technical documentation
* Front-End Development
* Continuous technical learning

The section also uses animated profile images that automatically change depending on the selected website theme.

---

# 📬 Contact Form

The portfolio includes a working contact form powered by **Formspree**.

Visitors can submit:

* Full Name
* Email Address
* Phone Number
* Email Subject
* Message

JavaScript sends the form asynchronously using:

```javascript
fetch()
```

The interface displays:

```text
✅ Success message when submission succeeds

⚠️ Error message when submission fails

⚠️ Network error message when connection fails
```

---

# ⚙️ JavaScript Functionality

JavaScript is used throughout the project for:

```text
Responsive mobile navigation
Page/section switching
Projects dropdown navigation
Resume tab switching
Project carousel navigation
Responsive carousel calculations
English/Burmese text scrambling
Dark/light mode switching
Theme persistence with localStorage
Contact-page navigation
Asynchronous contact form submission
Success and error handling
```

---

# 🎨 CSS Features

The project uses CSS for:

* CSS Custom Properties
* Flexbox
* CSS Grid
* Responsive layouts
* Media queries
* CSS animations
* Animated borders
* Responsive typography
* Hover effects
* Theme switching
* Project cards
* Certification cards
* Skill cards
* Mobile navigation
* Custom theme toggle
* Image transitions
* Responsive project carousel

### Responsive Breakpoints

```text
1200px
992px
810px
768px
600px
450px
400px
```

---

# 📂 Project Structure

```text
vannaighthtaung/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
├── image/
│   ├── logo-dark.png
│   ├── logo-light.png
│   ├── Favicon.png
│   ├── project1.png
│   ├── project2.png
│   ├── project3.png
│   ├── project4.png
│   ├── project5.png
│   └── IT project images
│
├── certificate/
│   └── Certificate images
│
└── pdf/
    ├── Certificates
    └── IT Documentation
```

---

# 💻 Run the Project Locally

## 1. Clone the Repository

```bash
git clone https://github.com/vanneihthawng/vannaighthtaung.git
```

## 2. Enter the Project Folder

```bash
cd vannaighthtaung
```

## 3. Open the Website

Open:

```text
index.html
```

in a web browser.

No package installation is required because the website uses:

```text
HTML
CSS
Vanilla JavaScript
```

You can also run the project using **VS Code Live Server**.

---

# 🧪 Skills Practiced

This project helped strengthen my experience with:

* Semantic HTML
* Responsive Web Design
* CSS Flexbox
* CSS Grid
* CSS Animations
* JavaScript DOM Manipulation
* JavaScript Event Listeners
* Dynamic UI State Management
* Responsive Navigation
* Custom JavaScript Carousels
* Local Storage
* Form Handling
* Async JavaScript
* Git
* GitHub
* GitHub Pages
* Technical Project Documentation

---

# 🔮 Future Improvements

Future improvements may include:

* Additional IT Support home labs
* Active Directory lab integration
* More troubleshooting ticket cases
* Additional Front-End projects
* Cybersecurity labs
* Improved accessibility
* Improved website performance
* Project filtering and searching
* Additional animations
* Better mobile optimization
* More technical certifications

---

# 👨‍💻 Author

## Van Neih Thawng

**IT Support | Help Desk | Desktop Support | Front-End Development**

GitHub:

```text
https://github.com/vanneihthawng
```

LinkedIn:

```text
https://www.linkedin.com/in/vanneihthawng/
```

---

# 📄 License

This project was created as a personal portfolio for **educational, professional development, and career presentation purposes**.
