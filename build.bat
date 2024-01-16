docker build -t finance-fe .

docker tag finance-fe kryanu/finance-fe:latest

docker push kryanu/finance-fe:latest

docker run --name finance-vue-fe -p 4173:4173 kryanu/finance-fe:latest 