
export default function getTask() {
  try {
    const data = [
      {
        id: 1,
        name: "Setup project environment",
        description: "Initialize repository and setup development tools.",
        priority: "high",
        status: "notStarted",
        createdOn: "2024-12-10",
        image: null,
      },
      {
        id: 2,
        name: "Design homepage",
        description: "Create a responsive design for the homepage using Figma.",
        priority: "moderate",
        status: "inProgress",
        createdOn: "2024-12-11",
        image: null,
      },
      {
        id: 3,
        name: "Develop API endpoints",
        description:
          "Implement RESTful APIs for user management and authentication.",
        priority: "high",
        status: "completed",
        createdOn: "2024-12-12",
        image: null,
      },
      {
        id: 4,
        name: "Write documentation",
        description:
          "Prepare detailed documentation for the project setup and APIs.",
        priority: "low",
        status: "notStarted",
        createdOn: "2024-12-09",
        image: null,
      },
      {
        id: 5,
        name: "Perform testing",
        description:
          "Run unit and integration tests to ensure system reliability.",
        priority: "moderate",
        status: "inProgress",
        createdOn: "2024-12-13",
        image: null,
      },
      {
        id: 6,
        name: "Deploy to production",
        description: "Deploy the application to the production server.",
        priority: "high",
        status: "completed",
        createdOn: "2024-12-14",
        image: null,
      },
    ];

    return data;
  } catch (error) {
    return error;
  }
}
