docker cp init.sql docker-mysql:/init.sql
docker cp init.sql docker-mysql:/initwithabout.sql
docker cp init.sql docker-mysql:/initwithaboutwhilerunning.sql
docker exec -i docker-mysql mysql -u root -proot -e 'show databases;'
docker exec -i docker-mysql mysql -u root -proot -e 'use test;'
docker exec -i docker-mysql mysql -u root -proot < init.sql