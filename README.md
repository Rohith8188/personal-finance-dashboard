#  Personal Finance Dashboard

A full-stack expense management and visualization tool built using React, Spring Boot, and MySQL. This dashboard helps users track, filter, visualize, and export their daily expenses in an intuitive interface.

![dashboard preview](<img width="1440" alt="Screenshot 2025-04-08 at 12 31 39 PM" src="https://github.com/user-attachments/assets/b614c86b-3c2f-450e-b64b-930a5fbe97ed" />
)

---

##  Live Demo

- 🌐 **Frontend**: [https://your-site.netlify.app](https://your-site.netlify.app)
- 🔙 **Backend API**: [https://your-api.onrender.com/api/expenses](https://your-api.onrender.com/api/expenses)

---

##  Features

-  Add new expenses (title, amount, category, date)
-  Visualize data with pie and bar charts (by category and daily spend)
-  Dark mode toggle
-  Filter by category
-  Export all expenses to CSV
-  Responsive design with Material UI
-  Toast notifications for success/error

---

##  Tech Stack

**Frontend**:
- React
- Material UI
- Axios
- Recharts
- Toastify

**Backend**:
- Spring Boot
- MySQL
- Spring Data JPA
- RESTful APIs

---

##  Local Setup

###  Backend (Spring Boot)

```bash
cd backend/dashboard
./mvnw spring-boot:run
```
##  Frontend
```bash
cd frontend
npm install
npm start
```

##  API Endpoints

| Method | Endpoint         | Description        |
|--------|------------------|--------------------|
| GET    | `/api/expenses`  | Fetch all expenses |
| POST   | `/api/expenses`  | Add new expense    |

##  Screenshots

> *Below are example screenshots of the dashboard UI.*

###  Add Expense Form
![Add Expense Form](https://user-images.githubusercontent.com/your-github-id/add-expense-screenshot.png)

###  Charts & Visualizations
![Charts](https://user-images.githubusercontent.com/your-github-id/charts-screenshot.png)

> *(To add your own screenshots: take a full-page screenshot → upload to your GitHub issue → right-click → Copy image address → replace links above.)*

## 📬 Contact

**Rohith Sunny**  
👨‍💻 Full Stack Developer  
📍 [LinkedIn](https://www.linkedin.com/in/your-link/)  
🌐 [Portfolio](https://your-portfolio.com)  
📧 rohith.sunny@example.com
