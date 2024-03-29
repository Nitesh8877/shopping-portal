Install Dependencies:
npm install
Start the Application:
npm run dev
---------------------------------------

API Endpoint Documentation
Product Management API
This API allows you to manage products including adding, updating, deleting, and retrieving product information.

1. Add Product
URL: /api/product/add
Method: POST
Description: Adds a new product to the database.
Request Body:
title: String (required) - Title of the product.
description: String (optional) - Description of the product.
Response:
200 OK: Product successfully added.
400 Bad Request: If the provided title already exists.
--------------------------------------------------------

2. Update Product
URL: /api/product/update/:id
Method: PUT
Description: Updates an existing product in the database.
Request Parameters:
id: String (required) - ID of the product to be updated.
Request Body:
title: String (required) - New title of the product.
description: String (optional) - New description of the product.
Response:
201 Created: Product successfully updated.
400 Bad Request: If the provided title already exists or the product with the given ID doesn't exist.
------------------------------------------------------------------------

3. Delete Product
URL: /api/product/delete/:id
Method: DELETE
Description: Deletes a product from the database.
Request Parameters:
id: String (required) - ID of the product to be deleted.
Response:
200 OK: Product successfully deleted.
400 Bad Request: If the product with the given ID doesn't exist.
------------------------------------------------------------------------

4. Get Product
URL: /api/product/get/:id
Method: GET
Description: Retrieves information about a specific product.
Request Parameters:
id: String (required) - ID of the product to retrieve.
Response:
200 OK: Product information retrieved successfully.
204 No Content: If the product with the given ID doesn't exist.
------------------------------------------------------------------------

5. List Products
URL: /api/product/get
Method: GET
Description: Retrieves a list of products with optional pagination and search filters.
Query Parameters:
page: Number (optional) - Page number for pagination (default: 1).
limit: Number (optional) - Number of products per page (default: 10).
title: String (optional) - Search products by title.
status: String (optional) - Search products by status.
Response:
200 OK: List of products retrieved successfully along with total count.
204 No Content: If no products match the search criteria.
------------------------------------------------------------------------

Notes:
All responses are in JSON format.
Error responses include appropriate error messages.
The API follows RESTful principles for endpoint structure and HTTP methods.
