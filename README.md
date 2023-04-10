### Colors.io

## User Stories

- As a user, I can go to /colors to see a list of all available colors
- As a user, I can click on one of the colors in my colors list and get taken to a page where I can see that color in all its glory. (The route here should be `/colors/:color`)
- As a user, I can click on a button to show a form that will let me add a new color. (The route here should be `/colors/new`)
- As a user, when I submit my new color form, I am redirected to the colors index, and my new color appears at the top
- As a user, if I try to navigate to a color page that does not exist (e.g. `/colors/burrito`), I am redirected to the colors index page
- As a user, if I try to navigate to an invalid url (e.g. `/this-is-not-valid`), I am redirected to the colors index page
- Your app should have some styling

## Todo:
1. make color page with specific color loaded dynamically on user click
2. make button that takes user to form page to create new color
3. make form submit redirect to colors page
4. make redirect to colors index page on wrong url
5. make redirect to error page when user tries to visit invalid url
6. finish css styling
7. make a nice README
