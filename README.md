## Follow this
Build image test-mysql
```
docker build --no-cache -t test-mysql ./docker-mysql/.
```
Build image test-nodejs
```
docker build --no-cache -t test-nodejs
```
Create docker network test-bridge
```
docker network create -d bridge test-bridge
```
Build container test-mysql and connect to network test-bridge
```
docker run -it --net=test-bridge -p 3307:3306 --name hosting-mysql test-mysql
```
Build container test-nodejs and connect to network test-bridge, expose port 3001
```
docker run -it --net=test-bridge -p 3001:3000 --name hosting-nodejs test-nodejs
```
Access bash of test-nodejs container
```
docker exec -it hosting-nodejs bash
```
Migrate database
```
npm run migrate
```
## API
```
[GET] http://localhost:3001
```
Get all users:
```
[GET] http://localhost:3001/users
```
Post random user:
```
[POST] http://localhost:3001/users
````