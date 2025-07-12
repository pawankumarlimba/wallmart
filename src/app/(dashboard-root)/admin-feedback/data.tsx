export type RequestType = "All"|"Feature Request" | "Bug Report" | "Idea" | "Archive";

export interface RequestData {
  id: number; // Unique identifier for each request
  name: string;
  messageCount: number;
  feedback: string;
  email: string;
  type: RequestType;
  likes: number;
  dislikes: number;
}

export const requestDataArray: RequestData[] = [
  { id:1,
    name: "John Doe",
    messageCount: 5,
    feedback: "Filter by tags in payments page please.",
    email: "john.doe@example.com",
    type: "Idea",
    likes: 999,
    dislikes: 1000,
  },
  {
    id:2,
    name: "Jane Smith",
    messageCount: 2,
    feedback: "Fix upload functionality for files.",
    email: "jane.smith@example.com",
    type: "Bug Report",
    likes: 456,
    dislikes: 10,
  },
  {
    id:3,
    name: "Alice Johnson",
    messageCount: 10,
    feedback: "Adding a dark mode would be amazing!",
    email: "alice.johnson@example.com",
    type: "Idea",
    likes: 789,
    dislikes: 2,
  },
  {
    id:4,
    name: "Bob Brown",
    messageCount: 1,
    feedback: "Archiving old data to clear storage.",
    email: "bob.brown@example.com",
    type: "Archive",
    likes: 300,
    dislikes: 5,
  },
  {
    id:5,
    name: "Emma Wilson",
    messageCount: 3,
    feedback: "The search functionality could be faster.",
    email: "emma.wilson@example.com",
    type: "Feature Request",
    likes: 400,
    dislikes: 12,
  },
  {
    id:6,
    name: "Chris Lee",
    messageCount: 4,
    feedback: "Improve the dashboard's responsiveness.",
    email: "chris.lee@example.com",
    type: "Feature Request",
    likes: 350,
    dislikes: 7,
  },
  {
    id:7,
    name: "Sophia Green",
    messageCount: 6,
    feedback: "Add multi-language support for the application.",
    email: "sophia.green@example.com",
    type: "Idea",
    likes: 420,
    dislikes: 15,
  },
  {
    id:8,
    name: "James White",
    messageCount: 7,
    feedback: "Fix broken links on the homepage.",
    email: "james.white@example.com",
    type: "Bug Report",
    likes: 320,
    dislikes: 9,
  },
  {
    id:9,
    name: "Lily Brown",
    messageCount: 9,
    feedback: "Enable offline mode for the app.",
    email: "lily.brown@example.com",
    type: "Feature Request",
    likes: 500,
    dislikes: 4,
  },
  {
    id:10,
    name: "Daniel Black",
    messageCount: 8,
    feedback: "Improve the security of user accounts.",
    email: "daniel.black@example.com",
    type: "Bug Report",
    likes: 410,
    dislikes: 6,
  },
];