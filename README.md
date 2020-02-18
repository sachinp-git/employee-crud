###  Deploy from your local machine

1. Clone the repo

```sh
git clone https://github.com/sachinp-git/employee-crud.git

cd employee-crud
```

2. Install dependencies

```sh
npm install
```

3. Initialize new Amplify repository

```sh
amplify init
```

4. Deploy

```sh
amplify push
```

###  Add API key in lambda function

1. Copy thr API key from the aws exports folder.

2. Go to the deployed function in lambda services on console.

3. In configuration go to environment variables

4. Add API_KEY as a new environment variable and paste the copied API key as value and save.




### Test from local machine

The repo contains Jest tests to check the response for the deployed GraphQL server

1. To test CRUD operations on employee entity

```sh
npm run test:employee
```

2. To test CRUD operations on address entity

```sh
npm run test:address
```

3. To test CRUD on skills entity

```sh
npm run test:address
```
