# Law-Articles-API
This is a web app to facilitate queries from a Law Article Database

## About
Below are the implemented functions:
<p>

  - Lists all articles ordered by publish date
  - Filter articles by category
  - Search articles by keywords on title and content
  - Generate csv report
  
</p>

## Technologies
The following tools and frameworks were used in the construction of this back-end:
<p>
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" />
  <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" />
  <img src="https://img.shields.io/badge/jupyter-%23FA0F00.svg?style=for-the-badge&logo=jupyter&logoColor=white" />
</p>

## How to run
1. Make a folder called Law-Articles-API
```bash
mkdir Law-Articles-API
```
2. Clone this repository
```bash
git clone https://github.com/rodrigocqb/Law-Articles-API
```
3. Run the back-end as dev
```bash
npm run dev
```
or build and run the application
```bash
npm run build && npm start
```
4. Open the jupyter notebook file and run the scripts in order

I preferred to use jupyter in order to facilitate visualization but it could have been done with a simple python script

<br>

## API Documentation

### GET **/articles**
Response:
```json
"status": 200
```
Response Body:
```json
[
  {
    "id": 2,
    "title": "Título 2",
    "author": "Jorge Amado",
    "content": "Tribunal",
    "date": "2001-01-10T00:00:00.000Z",
    "category": "Criminal"
  }
]
```
<br>

### GET **/articles/category/:category**
| Parameter  | Type     | Description                        |
| :---------- | :--------- | :---------------------------------- |
| `category` | `string` | Will be used to find related articles|

<br>

- If no category is passed:
```json
"status": 400
```
- If there is a category param:

Response:
```json
"status": 200
```
Response Body:
```json
[
  {
    "id": 2,
    "title": "Título 2",
    "author": "Jorge Amado",
    "content": "Tribunal",
    "date": "2001-01-10T00:00:00.000Z",
    "category": "Criminal"
  }
]
```
<br>

### GET **/articles/search/:keyword**
| Parameter  | Type     | Description                        |
| :---------- | :--------- | :---------------------------------- |
| `keyword` | `string` | Will be used to search related articles|

<br>

- If no keyword is passed:
```json
"status": 400
```
- If there is a keyword param:

Response:
```json
"status": 200
```
Response Body:
```json
[
  {
    "id": 2,
    "title": "Título 2",
    "author": "Jorge Amado",
    "content": "Tribunal",
    "date": "2001-01-10T00:00:00.000Z",
    "category": "Criminal"
  }
]
```
