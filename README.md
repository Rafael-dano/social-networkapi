# Social Network API

## Description

This is a full-stack API for a social network web application built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**. The API allows users to share thoughts, add friends, react to thoughts, and manage their own friend list. It is designed to handle large amounts of unstructured data, typical of social networking platforms.

### Features
- **User Management**: Add, update, delete users, and manage their friends and thoughts.
- **Thoughts**: Share, update, delete thoughts, and react to them.
- **Friendship**: Add and remove friends from a user's friend list.
- **Reactions**: Add reactions to thoughts and remove them.

### Technologies Used:
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Insomnia/Postman** for API testing
- **JavaScript Date Object** for timestamp formatting (Optional: JavaScript date library)

---

## Installation

### Prerequisites:
Before running this application, ensure you have the following installed:
- **Node.js**: [Download Node.js](https://nodejs.org/)
- **MongoDB**: [Install MongoDB](https://www.mongodb.com/docs/manual/installation/)

### Steps to Install:
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <project_directory>
2. install dependencies 
    npm install
3. Set up environment variables:
    DB_URI=mongodb://localhost:27017/socialNetworkDB
4. Start server
    npm start
5. server will run

## Testing the API
To test the API routes, you can use Insomnia or Postman. Below is an overview of the routes you should test:

GET all users: http://localhost:3000/api/users
GET a single user: http://localhost:3000/api/users/:userId
POST to create a user: http://localhost:3000/api/users
PUT to update a user: http://localhost:3000/api/users/:userId
DELETE a user: http://localhost:3000/api/users/:userId
POST to add a friend: http://localhost:3000/api/users/:userId/friends/:friendId
DELETE to remove a friend: http://localhost:3000/api/users/:userId/friends/:friendId
POST to create a thought: http://localhost:3000/api/thoughts
PUT to update a thought: http://localhost:3000/api/thoughts/:thoughtId
DELETE a thought: http://localhost:3000/api/thoughts/:thoughtId
POST to add a reaction: http://localhost:3000/api/thoughts/:thoughtId/reactions
DELETE a reaction: http://localhost:3000/api/thoughts/:thoughtId/reactions/:reactionId


## License

This project is licensed under the MIT License - see the LICENSE file for details.

 ## Acknowledgements
Thanks to the instructors and course resources for guidance.
MongoDB for its powerful NoSQL database engine