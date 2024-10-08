# Collaborative Presentation Software

## Project Description

This project is a collaborative presentation software similar to PowerPoint, allowing multiple users to work together to create and edit presentations in real-time. The software is designed to facilitate seamless collaboration without the need for user registration or authentication, making it easy for users to join and start working immediately.

## Key Features

### No Registration or Authentication
- **Easy Access**: Users can enter the app by simply providing a nickname, with no need for sign-ups or logins.
- **Immediate Participation**: Once inside, users can see a list of available presentations to join.

### Presentation Creation and Roles
- **Create or Join**: Any user can create a new presentation or join an existing one.
- **Special Privileges for Creators**:
  - **User List**: The creator can view a list of all connected users.
  - **Role Assignment**: The creator can assign roles to others:
    - **Editors**: Can edit slides.
    - **Viewers**: Can only view the slides.

### Collaborative Editing in Real-Time
- **Simultaneous Editing**: Multiple editors can work on the same presentation at the same time.
- **Slide Management**: Only the presentation creator can add or remove slides.
- **Instant Updates**: Changes made by any editor appear instantly using WebSockets for real-time updates.
- **Viewer Experience**: Viewers see updates as they happen but cannot make changes themselves.

### Persistent Storage of Edits
- **Permanent Saving**: All created or edited content on the slides is saved permanently.
- **Consistent Experience**: Users joining the presentation later will see all previous work.

### Dynamic Slide Layout
- **Responsive Design**: The slide area adjusts to the window size, leaving space for toolbars, slide navigation, and user lists.
- **Rich Content Support**: Slides support elements like movable and editable text blocks, possibly with Markdown formatting.

### Beyond the Basics (To Make the Project Stand Out)
- **Presentation Gallery**:
  - **Pagination**: For easy navigation.
  - **Filterable and Searchable**: To quickly find presentations.
  - **Two Views**: Table View (default) and Tile View (compact and visual).

- **Tool Panel**:
  - **Variety of Tools**: For slide creation (text, shapes, images, etc.) with contextual settings.
  - **Undo/Redo**: Essential for editing convenience.

- **Status Indicators**:
  - **Editing Status**: Display who is currently editing the slide or the last person to edit it, along with a timestamp.

- **Statistics**:
  - **Detailed Information**: Show details like the number of slides, number of text objects, memory usage, etc.

- **Editing Features**:
  - **Element Manipulation**: Users can move, rotate, scale, change layering (z-index), and delete elements.

- **Slide Management**:
  - **Auto-Numbering**: Slides should support auto-numbering.
  - **Drag-and-Drop**: For reordering slides.
  - **Renaming**: Ability to rename slides.

### Additional Considerations
- **Professional Feel**: The project should behave like professional software (e.g., Google Slides or PowerPoint).
- **Smooth Collaboration**: Real-time collaboration must be smooth and seamless.
- **Good UI/UX Design**: Ensure the app feels polished, responsive, and user-friendly.

By incorporating intuitive design, advanced editing capabilities, and real-time collaboration, this project aims to deliver a complete and professional experience for users.

## Used Technologies

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **React Router**: For handling routing in the application.
- **Axios**: For making HTTP requests to the backend.
- **Bootstrap**: For responsive design and styling.
- **Socket.io-client**: For real-time communication with the server.

### Backend
- **Node.js**: A JavaScript runtime for building the server-side application.
- **Express**: A web application framework for Node.js.
- **Socket.io**: For real-time communication between the server and clients.
- **MySQL**: A relational database management system for storing presentation data.
- **Sequelize**: An ORM for Node.js to interact with the MySQL database.
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **Dotenv**: For loading environment variables from a `.env` file.

### Development Tools
- **Create React App**: A tool to set up a modern web app by running one command.
- **ESLint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **Prettier**: An opinionated code formatter.
- **Jest**: A testing framework for JavaScript.

### Deployment
- **Render**: A cloud platform for deploying the application.
- **Heroku**: Another cloud platform for deploying the application.
- **Docker**: For containerizing the application.

By leveraging these technologies, the project ensures a robust, scalable, and maintainable codebase, providing a seamless and professional user experience.