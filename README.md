# ASD Workshop Product API

A small Express API that manages products stored in `db.json`.

## Run locally

```bash
npm install
npm start
```

The API listens on port 3000 by default. Set the `PORT` environment variable to use another port. Request bodies are limited to 100 KB. Unknown routes return a JSON 404 response. Available product endpoints are:

- `GET /products`
- `GET /products/:id`
- `POST /products`
- `PUT /products/:id`
- `PATCH /products/:id`
- `DELETE /products/:id`
