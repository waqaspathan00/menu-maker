# Guides 
- [Backend Guide](backend/README.md)
- [Frontend Guide](frontend/README.md)

## Environments
- Production -> Combination of final frontend and backend results
- Preview -> Same as Production but moreso used for frontend testing
- menumate-dev -> backend server testing
- menumate -> backend server

### Project Details TOC
- [How to Run](#running)
- [Inspiration](#inspiration)
- [Goal](#goal)
- [Mission Statement](#mission)
- [What Sets Us Apart](#unique)
- [Goal](#goal)

<a name="running"/>

## How to run the project
1. Open 2 terminals
2. In terminal 1 start the backend server with this command ```python manage.py runserver```
   1. This will run on port 8000
3. In terminal 2 start the frontend application with this command ```npm run dev```
   1. This will run on port 3000
4. Open your preferred browser at ```localhost:3000```

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
  - Example: menumaker.com/pizza-time

<a name="programming"/>

## Programming Languages/ Technologies Used
- Python/ Django for backend
- React/ NextJS for frontend
- Firestore (storing menu data)
- Firebase (authentication with google)
- Firebase Storage (storing images)
- Vercel for frontend deployment
- Heroku for backend deployment
