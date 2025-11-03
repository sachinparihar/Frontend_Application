
const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "aarav@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1,
      "totalTasks": 4
    },
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Prepare Sales Report",
        "taskDescription": "Compile Q3 sales data and summarize performance.",
        "taskDate": "2025-10-25",
        "category": "Reports"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Team Meeting",
        "taskDescription": "Attend weekly sync with the sales team.",
        "taskDate": "2025-10-27",
        "category": "Meetings"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Client Follow-up",
        "taskDescription": "Call client about the new product proposal.",
        "taskDate": "2025-10-29",
        "category": "Client Relations"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Market Research",
        "taskDescription": "Gather insights on competitor pricing.",
        "taskDate": "2025-10-30",
        "category": "Research"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Rohan",
    "email": "rohan@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1,
      "totalTasks": 4
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Code Review",
        "taskDescription": "Review new pull requests on GitHub.",
        "taskDate": "2025-10-26",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "API Documentation",
        "taskDescription": "Update API documentation for version 2.0.",
        "taskDate": "2025-10-28",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix Login Bug",
        "taskDescription": "Resolve the authentication issue reported by QA.",
        "taskDate": "2025-10-29",
        "category": "Bug Fix"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Database Backup",
        "taskDescription": "Perform full backup of production DB.",
        "taskDate": "2025-10-30",
        "category": "Maintenance"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Isha",
    "email": "isha@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0,
      "totalTasks": 3
    },
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Social Media Campaign",
        "taskDescription": "Launch Diwali promotional posts.",
        "taskDate": "2025-10-23",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Design Banner",
        "taskDescription": "Create banner for landing page update.",
        "taskDate": "2025-10-26",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Ad Analytics",
        "taskDescription": "Analyze click-through rates of latest campaign.",
        "taskDate": "2025-10-28",
        "category": "Analytics"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Vikram",
    "email": "vikram@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1,
      "totalTasks": 5
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Test Payment Gateway",
        "taskDescription": "Verify Stripe integration works on staging.",
        "taskDate": "2025-10-25",
        "category": "QA"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Optimize Queries",
        "taskDescription": "Improve response time of dashboard APIs.",
        "taskDate": "2025-10-26",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Monitor Uptime",
        "taskDescription": "Track system uptime over the weekend.",
        "taskDate": "2025-10-27",
        "category": "Monitoring"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Security Audit",
        "taskDescription": "Run vulnerability scan for all endpoints.",
        "taskDate": "2025-10-30",
        "category": "Security"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Server Cleanup",
        "taskDescription": "Remove unused Docker images.",
        "taskDate": "2025-10-31",
        "category": "Maintenance"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Priya",
    "email": "priya@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 2,
      "failed": 1,
      "totalTasks": 5
    },
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Customer Feedback",
        "taskDescription": "Compile user feedback from support tickets.",
        "taskDate": "2025-10-24",
        "category": "Support"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Product Demo",
        "taskDescription": "Prepare demo slides for client presentation.",
        "taskDate": "2025-10-27",
        "category": "Sales"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Training Session",
        "taskDescription": "Host onboarding training for new hires.",
        "taskDate": "2025-10-29",
        "category": "HR"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Newsletter",
        "taskDescription": "Write content for November company newsletter.",
        "taskDate": "2025-10-30",
        "category": "Content"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Website Update",
        "taskDescription": "Add new team member bios to About page.",
        "taskDate": "2025-10-31",
        "category": "Web"
      }
    ]
  }
];

  
  const admin = [
    { "id": 100, "email": "admin@example.com", "name": "Admin", "password": "123" }
  ];
  


  export const setLocalStorage = () => {
       localStorage.setItem('employees', JSON.stringify(employees))
       localStorage.setItem('admin', JSON.stringify(admin))


  }

  export const getLocalStorage = () => {

    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return {employees, admin}    
  }