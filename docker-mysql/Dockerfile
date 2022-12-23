FROM mysql:latest

ENV MYSQL_DATABASE=test_db \
    MYSQL_ROOT_PASSWORD=duong123

COPY ./*.sql /docker-entrypoint-initdb.d/
EXPOSE 3306