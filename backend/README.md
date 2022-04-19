# BACKEND

## Obtain serviceAccountKey
1. In the backend folder, create a .env file
2. Get a serviceAccountKey from Google for Firestore
   1. Follow this link to get one https://cloud.google.com/docs/authentication/production#create_service_account
3. Take the contents of the serviceAccountKey.json file and paste them into the .env file in the following format:
```dotenv
SERVICE_ACCOUNT_KEY="PASTE JSON DATA HERE"

# example
SERVICE_ACCOUNT_KEY='{
  "type": "INSERT",
  "project_id": "INSERT",
  "private_key_id": "INSERT",
  "private_key": "INSERT",
  "client_email": "INSERT",
  "client_id": "INSERT",
  "auth_uri": "INSERT",
  "token_uri": "INSERT",
  "auth_provider_x509_cert_url": "INSERT",
  "client_x509_cert_url": "INSERT"
}'
```

## Installation guide

1. Open CLI at root of project directory, run the following commands
    1. ```cd backend```
    2. ```pip install -r requirements.txt```
    3. ```python3 manage.py makemigrations```
    4. ```python3 manage.py migrate```
    5. ```python3 manage.py runserver```
2. Next, add 2 lines of code for **local development**
   1. DO NOT COMMIT THESE LINES OF CODE
   2. run this command ```pip install python-dotenv```
   3. Add this code in ```apps.py``` under ```main```
    ```python
    from dotenv import load_dotenv
    load_dotenv()
    ```
2. Now open Postman and go to one of the following urls
    1. localhost:8000/create
        1. POSTing menu data to Firestore
    2. localhost:8000/view/menu_name
        1. GETing menu data from Firestore

Example Data:

```json
{
  "menu-name": "Mario's Pizza Place",
  "is-open": true,
  "url-name": "marios-pizza-palace",
  "menu-data": [
    {
      "category-title": "Main",
      "items": [
        {
          "item-price": 13.99,
          "item-name": "Buffalo Chicken Pizza",
          "item-description": "Thin crust pizza with buffalo chicken and ranch"
        },
        {
          "item-price": 8.99,
          "item-name": "Margherita Pizza",
          "item-description": "Classic Italian pizza with a dollop of mozzarella"
        }
      ]
    },
    {
      "category-title": "Dessert",
      "items": [
        {
          "item-price": "2.99",
          "item-name": "Chocolate Chip Cookie",
          "item-description": "Freshly baked chocolate chip"
        },
        {
          "item-price": "4.99",
          "item-name": "Strawberry Shake",
          "item-description": "Creamy strawberry milkshake mixed with milk"
        }
      ]
    }
  ]
}
```
