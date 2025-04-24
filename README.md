# mqtt-realm

## Instructions to run the server and client

### Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager) installed

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/ramnkl16/mqtt-realm.git
   cd mqtt-realm
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

### Running the server

1. Start the server:
   ```sh
   npm start
   ```

2. The server will be running at `http://localhost:3000`.

### Running the client

1. Open a new terminal and navigate to the project directory.

2. Run the client:
   ```sh
   node client.js
   ```

## Instructions to test the CRUD operations

### Create

1. Send a POST request to `http://localhost:3000/create` with the following JSON body:
   ```json
   {
     "name": "Sample Name"
   }
   ```

### Read

1. Send a GET request to `http://localhost:3000/read`.

### Update

1. Send a PUT request to `http://localhost:3000/update` with the following JSON body:
   ```json
   {
     "id": "ObjectId",
     "name": "Updated Name"
   }
   ```

### Delete

1. Send a DELETE request to `http://localhost:3000/delete` with the following JSON body:
   ```json
   {
     "id": "ObjectId"
   }
   ```
