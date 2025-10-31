const employees = [
    {
      "id": 1,
      "email": "alice@example.com",
      "password": "123",
      "tasks": [
        { "title": "Prepare Sales Report", "description": "Compile Q3 sales data and summarize performance.", "date": "2025-10-25", "category": "Reports", "active": false, "newTask": false, "completed": true, "failed": false },
        { "title": "Team Meeting", "description": "Attend weekly sync with the sales team.", "date": "2025-10-27", "category": "Meetings", "active": true, "newTask": true, "completed": false, "failed": false },
        { "title": "Client Follow-up", "description": "Call client about the new product proposal.", "date": "2025-10-29", "category": "Client Relations", "active": false, "newTask": false, "completed": false, "failed": true },
        { "title": "Market Research", "description": "Gather insights on competitor pricing.", "date": "2025-10-30", "category": "Research", "active": true, "newTask": false, "completed": false, "failed": false }
      ]
    },
    {
      "id": 2,
      "email": "bob@example.com",
      "password": "123",
      "tasks": [
        { "title": "Code Review", "description": "Review new pull requests on GitHub.", "date": "2025-10-26", "category": "Development", "active": true, "newTask": false, "completed": false, "failed": false },
        { "title": "API Documentation", "description": "Update API documentation for version 2.0.", "date": "2025-10-28", "category": "Documentation", "active": false, "newTask": false, "completed": true, "failed": false },
        { "title": "Fix Login Bug", "description": "Resolve the authentication issue reported by QA.", "date": "2025-10-29", "category": "Bug Fix", "active": true, "newTask": true, "completed": false, "failed": false },
        { "title": "Database Backup", "description": "Perform full backup of production DB.", "date": "2025-10-30", "category": "Maintenance", "active": false, "newTask": false, "completed": false, "failed": true }
      ]
    },
    {
      "id": 3,
      "email": "carol@example.com",
      "password": "123",
      "tasks": [
        { "title": "Social Media Campaign", "description": "Launch Diwali promotional posts.", "date": "2025-10-23", "category": "Marketing", "active": false, "newTask": false, "completed": true, "failed": false },
        { "title": "Design Banner", "description": "Create banner for landing page update.", "date": "2025-10-26", "category": "Design", "active": true, "newTask": false, "completed": false, "failed": false },
        { "title": "Ad Analytics", "description": "Analyze click-through rates of latest campaign.", "date": "2025-10-28", "category": "Analytics", "active": false, "newTask": true, "completed": false, "failed": false }
      ]
    },
    {
      "id": 4,
      "email": "david@example.com",
      "password": "123",
      "tasks": [
        { "title": "Test Payment Gateway", "description": "Verify Stripe integration works on staging.", "date": "2025-10-25", "category": "QA", "active": true, "newTask": true, "completed": false, "failed": false },
        { "title": "Optimize Queries", "description": "Improve response time of dashboard APIs.", "date": "2025-10-26", "category": "Database", "active": false, "newTask": false, "completed": true, "failed": false },
        { "title": "Monitor Uptime", "description": "Track system uptime over the weekend.", "date": "2025-10-27", "category": "Monitoring", "active": false, "newTask": false, "completed": false, "failed": false },
        { "title": "Security Audit", "description": "Run vulnerability scan for all endpoints.", "date": "2025-10-30", "category": "Security", "active": true, "newTask": false, "completed": false, "failed": false },
        { "title": "Server Cleanup", "description": "Remove unused Docker images.", "date": "2025-10-31", "category": "Maintenance", "active": false, "newTask": false, "completed": false, "failed": true }
      ]
    },
    {
      "id": 5,
      "email": "eve@example.com",
      "password": "123",
      "tasks": [
        { "title": "Customer Feedback", "description": "Compile user feedback from support tickets.", "date": "2025-10-24", "category": "Support", "active": false, "newTask": false, "completed": true, "failed": false },
        { "title": "Product Demo", "description": "Prepare demo slides for client presentation.", "date": "2025-10-27", "category": "Sales", "active": true, "newTask": true, "completed": false, "failed": false },
        { "title": "Training Session", "description": "Host onboarding training for new hires.", "date": "2025-10-29", "category": "HR", "active": false, "newTask": false, "completed": false, "failed": true },
        { "title": "Prepare Newsletter", "description": "Write content for November company newsletter.", "date": "2025-10-30", "category": "Content", "active": true, "newTask": false, "completed": false, "failed": false },
        { "title": "Website Update", "description": "Add new team member bios to About page.", "date": "2025-10-31", "category": "Web", "active": false, "newTask": false, "completed": true, "failed": false }
      ]
    }
  ];
  
  const admin = [
    { "id": 100, "email": "admin@example.com", "password": "123" }
  ];
  


  export const setLocalStorage = () => {
       localStorage.setItem('employees', JSON.stringify(employees))
       localStorage.setItem('admin', JSON.stringify(admin))


  }

  export const getLocalStorage = () => {

    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    console.log(employees, admin);
    
  }