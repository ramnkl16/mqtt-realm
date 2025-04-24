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

## Note on Deprecated Dependencies

The following dependencies have been deprecated and replaced with newer versions:

- `har-validator@5.1.5`: This library is no longer supported.
- `glob@7.2.3`: Glob versions prior to v9 are no longer supported.
- `uuid@3.4.0`: Please upgrade to version 7 or higher. Older versions may use Math.random() in certain circumstances, which is known to be problematic. See https://v8.dev/blog/math-random for details.
- `request@2.88.2`: Request has been deprecated, see https://github.com/request/request/issues/3142.
- `node-domexception@1.0.0`: Use your platform's native DOMException instead.
- `realm@10.24.0`: This version uses Atlas Device Sync, please install `realm@community` and read https://github.com/realm/realm-js/blob/main/DEPRECATION.md for more information.
