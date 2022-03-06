# Table of Contents  
- [Backend](#backend)
  - [Installation Guide](#installation)
  - [How to run the project](#running)
- [Inspiration](#inspiration)
- [Goal](#goal)
- [Mission Statement](#mission)
- [What Sets Us Apart](#unique)
- [Goal](#goal)

<a name="backend"/>

# BACKEND

<a name="installation"/>

## Installation guide for backend
1. Clone the repository
2. Open the repository in your preferred code editor
3. In terminal at root of project directory, run the following commands
   1. ```cd backend```
   2. ```pip install -r requirements.txt```
   3. ```python manage.py migrate```
   4. ```python manage.py runserver```
4. Now open Postman and go to one of the following urls
   1. localhost:8000/create
      1. for POSTing menu data to Firestore
   2. localhost:8000/create/menu_name
      1. for GETing menu data from Firestore
      
<a name="running"/>

## How to run tests
- First, set an environment variable telling django where to find settings.py

```export DJANGO_SETTINGS_MODULE=backend.menu_maker.settings```
- Next, run the tests by just entering ```pytest``` in the terminal
  - NOTE: you must be in the ```/backend``` directory before running this


<a name="running"/>

## How to run the project
1. Ensure you have a serviceAccountKey from Google for Firestore
   1. Follow this link to get one https://cloud.google.com/docs/authentication/production#create_service_account
2. Place the serviceAccountKey.json file directly in the project. It should be sibling to backend and frontend folders.
3. Next, open 2 terminals
4. In terminal 1 start the backend server with this command ```python manage.py runserver```
   1. By default this will run on port 8000
5. In terminal 2 start the frontend application with this command ```npm start```

<a name="inspiration"/>

## Inspiration

In my area, I have a lot of small business owners. 
More specifically, individuals who cook and sell food straight from their homes. 
When they share their menus it's either as an image or a text message. 
Although this solution works, it feels very temporary and disorganized.

<a name="goal"/>

## Goal
Our goal is to create an app where entrepreneurs, 
like home cooks, can quickly and easily make a menu. 
This menu will be shareable by link or QR code. 

<a name="mission"/>

## Mission Statement 
Provide a fluid experience for small business owners, 
like home cooks, to share information with prospective clients

<a name="unique"/>

## What Sets Us Apart
- Simple to use
  - Comprised of the core components of what a menu consists of: categories and category items
- Easy Accessibility
  - Shareable by link or QR code
  - Example: menumaker.com/pizzatime

<a name="programming"/>

## Programming Languages/ Technologies Used
- Python
- React
- Firestore (for storing menu data)
- Firebase (account login with google)
