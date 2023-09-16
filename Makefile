build:
	cd ./src/pages && emcc hello.c -o index.html

docker-build:
	docker build .

docker-up:
	docker-compose up -d