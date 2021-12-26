<p align="center">

<p align="center">
  <h3 align="center">finder.plant.tools</h3>

  <p align="center">
  A database to explore biological relationships between Arabidopsis thailiana genetic characteristics. <br/>
  <a href="https://sweekwang.github.io/golabel/">Website Link</a>
</p>

<hr/>

# Introduction
finder.plant.tools is a database to explore biological relationships between Arabidopsis thailiana genetic characteristics. 

# API/Technology used.
## Frontend
- [https://reactjs.org/](Reactjs)
- [https://js.cytoscape.org/](react-cytoscapejs)
- [https://vincentgarreau.com/particles.js/](react-particles-js)

## Backend
The Repo for backend is private. However, the following techolongy is used:
- Flask
- Google Cloud Storage
- Google Cloud App for hosting

# Branches.
6 Branches can be found in this repo.
- Master: - this contains the frontend code
- dge: - this contains all the trained dge model
- gh-phages: - to host a page in github
- go_mode: - this contains all the trained go model
- other_model - this contains other trained model

# Master - file directory.
- Components: contains all the reusable UI elenments.
- Pages: Each page directory.
- Store: for redux state management.
- Assets: All the images used in this web.

# Hosting Locally
## Requirement:
You need to have `Node >= 14.0.0` and `npm >= 5.6` on your machine.

## To download this config
1. clone or download repo
```
git clone https://github.com/Sweekwang/golabel.git
```
or
<a href="https://github.com/Sweekwang/golabel/archive/refs/heads/master.zip">Download Here</a>

2. cd into directory   
```
cd golabel
```

3. install dependencies using npm or yarn   
```
yarn OR npm i
```

3. Runs the app in the development mode
Open [http://localhost:3000/golabel](http://localhost:3000/golabel) to view it in the browser.
```
npm start
```

