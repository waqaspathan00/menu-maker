# BACKEND

## Installation guide

1. Open CLI at root of project directory, run the following commands
    1. ```cd backend```
    2. ```pip install -r requirements.txt```
    3. ```python3 manage.py makemigrations```
    4. ```python3 manage.py migrate```
    5. ```python3 manage.py runserver```
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