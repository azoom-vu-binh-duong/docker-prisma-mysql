## Follow this
```
docker build --no-cache -t test-mysql ./docker-mysql/.
```
```
docker build --no-cache -t test-nodejs .
```
```
docker network create -d bridge test-bridge
```
```
docker run -it --net=test-bridge -p 3307:3306 --name name-mysql test-mysql
```
```
docker run -it --net=test-bridge -p 3001:3000 --name name-nodejs test-nodejs
```
```
docker exec -it name-nodejs bash
```
```
npm run generate
npm run migrate
```