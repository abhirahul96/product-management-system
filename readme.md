# PMS Application

A Node.js application of PMS.

## Installation
```bash
$  npm  install
```
## Running the App
```bash
# Development mode
$  npm  run  start:dev

# Production mode
$  npm  run  start:prod
```
## Steps

 1. Install all dependencies using the installation command.
 2. Start the server using any one of the above scripts from "Running the app".
 3. Open localhost:3000 in a browser to load the UI.
 4. Use the UI to explore the API's


## API Endpoint

The application exposes the following API endpoint:

### POST /api/v1/product

This endpoint create a product from form data.

Example Request:

```bash
POST  /api/v1/product
```

Example Response (201 OK):

```bash
{message:"Product created successfully"}
```

### PUT /api/v1/product/:productId

This endpoint create a update existing product.

Example Request:

```bash
PUT  /api/v1/product/1
```

Example Response (200 OK):

```bash
{message:"Product updated successfully"}
```

### GET /api/v1/product/:productId

This endpoint get a existing product by id.

Example Request:

```bash
GET  /api/v1/product/1
```

Example Response (200 OK):

```bash
{ id: "1", productName: "Sample Product", productDescription: "This is a sample product.", price: 19.99, category: "Sample Category", stockQuantity: 100, createdAt: "2023-07-24T12:00:00Z", updatedAt: "2023-07-24T12:05:00Z" }

```

### DELETE /api/v1/product/:productId

This endpoint delete a existing product by id.

Example Request:

```bash
DELETE  /api/v1/product/1
```

Example Response (200 OK):

```bash
{message:"Product deleted successfully"}

```


## License

This project is licensed under the MIT License. See the [LICENSE] file for details.