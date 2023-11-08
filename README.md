# react-photolabs
The PhotoLabs project for the Web Development React course programming as part of Lighthouse Labs. 

PhotoLabs is a full-stack React project that showcases different pictures for different topics. Users can click on different pictures to reveal pop-ups that include more detailed info about the picture. They can also like a picture anywhere and be notified of a *like*.

# Photolabs

## Demo


### Built With:

- React
- Node
- Express
- PostgreSQL
- SASS

## Setup

If using SSH:
```sh
git clone git@github.com:Wilson-Chu/photolabs-starter.git
```
Then, from home directory:
```sh
cd photolabs-starter
```

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```

## Future Improvements

- Favourites/Likes for each photo not persisting for the same photo across the entire application yet, but they are being recorded in the NavBar notification
- Selected topic indicator not implemented yet: after a user clicks on a topic in NavBar, the overhead line should persist