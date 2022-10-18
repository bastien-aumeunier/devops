# TP WIK-DPS-TP01
## Context :

### API:

`GET` **->** `http://your.url/ping`
  **->** Send back all headers of the request in JSON format


## Run Project :
To run this project you just need to clone the repo: 

`git clone git@github.com:bastien-aumeunier/devops.git`

Go on `/TP/WIK-DPS-TP01`

You need install all node modules with:

```
npm install
```

Create `.env` file with :

```
PING_LISTEN_PORT=8080
```

Finally, you need to build the project with:

```
npx tsc
```

And run with

```
node build/App.js
```

## Usage :

Open a browser and go on `http://localhost:3000/ping`

You can see all your request headers

## Run docker:

Go on `TP` folder :

Run : 
```
docker build . -t  bastien/docker1
docker run -dp 3000:8080 bastien/docker1
```

Or Run : 
```
docker build . -f "Dockerfile2" -t  bastien/docker2
docker run -dp 3000:8080 bastien/docker2
```


