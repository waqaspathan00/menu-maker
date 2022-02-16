##### Table of Contents  
- [Installation Guide](#installation)\
- [Inspiration](#inspiration)\
- [Goal](#goal)\
- [Mission Statement](#mission)\
- [What Sets Us Apart](#unique)\
- [Goal](#goal)

<a name="installation"/>

## Installation Guide for backend
1. Clone the repository
2. Open the repository in your preferred code editor
3. From the command line, run ```python manage.py runserver```
4. Now open Postman and go to one of the following urls
   1. localhost:8000/create
      1. for POSTing menu data to Firestore
   2. localhost:8000/create/menu_name
      1. for GETing menu data from Firestore
      
<a name="inspiration"/>

## Inspiration
In my area, I have a lot of small business owners. 
More specifically, individuals who cook and sell food straight from their homes. 
When they share their menus it's either as an image or a text message. 
Although this solution works, it feels very temporary and disorganized.

## Menu Maker
Our goal is to create an app where entrepreneurs, 
like home cooks, can quickly and easily make a menu. 
This menu will be shareable by link or QR code. 

## Mission Statement 
Provide a fluid experience for small business owners, 
like home cooks, to share information with prospective clients

**__What Sets Us Apart:__**
- Simple to use
  - Comprised of the core components of what a menu consists of: categories and category items
- Easy Accessibility
  - Shareable by link or QR code
  - Example: menumaker.com/pizzatime

**__Programming Languages/ Technologies Used__**
- Python
- React
- Firebase (for data storage and account login with google)
