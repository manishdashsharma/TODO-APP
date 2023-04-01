## TODO APPLICATION
## Introduction 
This backend service serves as the TODO application Backend.
## TODO service features
- Add tasks
- Get tasks
- Update tasks
- Delete tasks
## Installation Guide
- Clone this repository [here](https://github.com/manishdashsharma/TODO-APP.git).
- Run `npm install` to install dependencies.
## Usage 
- Run `npm start` to start the application.
- Connect to the API using postman on port `5000`.
## API Endpoints
- Base URL: 
    - Locally - `localhost:5000` 
    - Deployed - `https://todoapi-34w8.onrender.com/`

|HTTP Verbs| Endpoints|Action|
|----------|----------|------|
|GET|/|To check the server status|
|GET|/todos|To retrive all the tasks|
|POST|/add|To add tasks|
|PUT|/update|To update the tasks|
|DELETE|/delete|To delete the task|

## Endpoints Definition(Request - Response)
- _GET_ `/todos`
    - list of all tasks

    Response `200 : sucess` and `500 : error`

- _POST_ to `/add`

    Request Body 
    ```json
    "text": "<task>"
    ```
    Response - 201
    ```json
    {
        "iSucess": true,
        "INFO": "Inserted Successfully",
        "data": {
            "text": "<task>",
            "_id": "<document_id>",
            "__v": 0
        }
    }
    ```
    Response - 500 
    ```js
    error
    ```
- _PUT_ to `/update`

    Request Body 
    ```json
    "_id": "<document_id>",
    "text": "<task>"
    ```
    Response - 201
    ```json
    {
        "iSucess": true,
        "INFO": "Updated Successfully",
        "data": {
            "text": "<task>",
            "_id": "<document_id>",
            "__v": 0
        }
    }
    ```
    Response - 500 
    ```js
    error
    ```
- _DELETE to `/delete`

    Request Body
    ```json
    "_id": "<document_id>"
    ```
    Response - 204
    ```json
    {
        "iSucess": true,
        "INFO": "Deleted Successfully",
        "data": {
            "_id": "<document_id>",
            "text": "<task>",
            "__v": 0
        }
    }
    ```
    Response - 500 
    ```js
    error
    ```

## Technologies Used
- Express , Fast, unopinionated, minimalist web framework for Node.js
- MongoDB is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
