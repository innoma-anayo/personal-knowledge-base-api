# Note-API

A RESTful Personal Knowledge Base / Notes API built with Node.js, Express, MongoDB and Mongoose.

The API provides complete CRUD functionality for creating, retrieving, updating and deleting personal notes, with support for pagination, sorting, searching and categorization.

---

## Project Overview

Note-API is a backend service for a "Second Brain" or Notion-style note-taking application.

It allows users to:

- Create notes
- Retrieve all notes
- Retrieve a single note
- Update notes
- Delete notes
- Search notes by title or content
- Filter notes by category
- Paginate results
- Sort notes by different fields

The project was developed as part of the **BeTechified Advanced Class – Backend Development** project.

---

## Project Objectives

The main objectives of the project are to:

- Build a production-oriented RESTful API.
- Implement complete CRUD operations.
- Store and manage data using MongoDB Atlas.
- Use Mongoose as the Object Data Modeling (ODM) library.
- Implement request validation.
- Implement advanced querying features.
- Provide meaningful error responses.
- Deploy the API publicly using Render.

---

## Technology Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | REST API framework |
| MongoDB Atlas | Cloud database |
| Mongoose | MongoDB ODM |
| Joi | Request validation |
| dotenv | Environment variable management |
| Render | Cloud deployment |
| Git & GitHub | Version control and collaboration |

---

## Core Features

### CRUD Operations

The API supports:

- Create a note
- Read all notes
- Read a single note
- Update a note
- Delete a note

### Advanced Query Features

The notes listing endpoint supports:

- Pagination
- Sorting
- Text search
- Category filtering

---

## Note Data Model

Each note contains the following fields:

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | String | Yes | Title of the note |
| `content` | String | Yes | Main note content |
| `category` | String | No | Note category, e.g. Work or Personal |
| `tags` | Array of Strings | No | Tags associated with the note |
| `createdAt` | Date | Automatic | Date the note was created |
| `updatedAt` | Date | Automatic | Date the note was last updated |

The `title` and `content` fields are indexed to support text searching.

---

## API Endpoints

### Create a Note

**POST**

```text
/api/notes