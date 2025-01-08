# CypressDocker
In this project I going a practice about the advantage docker with cypress 


# Para correr la automatizacion con docker es

docker build -t mydocker:1.0 .

docker run -i -v /dockerproject -t mydocker:1.0 --spec cypress/e2e/api/*.js
docker run -it -v ./tmp:/dockerproject  mydocker:1.0  /bin/bash
docker run -it -v ./tmp:/dockerproject  mydocker:1.0 --spec cypress/e2e/ui/*.js /bin/bash
docker run -i -v "%cd%":/dockerproject -t mydocker:1.0 --spec cypress/2e2/*.spec.js


Get results: docker run --rm -v $(pwd)/cypress:/app/cypress -v $(pwd)/cypress/reports:/app/cypress/reports mydocker

cypress run --headless --spec "cypress/e2e/api/**/*.spec.{js,ts,jsx,tsx}" 


docker run --shm-size=1g --rm -v $(pwd)/cypress/report/ -v $(pwd)/cypress/report mydocker bash -c "npx cypress run --headed --spec 'cypress/e2e/api/**/*.spec.{js,ts,jsx,tsx}'"

docker run --shm-size=1g -v /c/Repositories/CypressDocker/cypress/reports/:/dockerproject/cypress/report/.jsons mydocker:1.0 bash -c "--spec cypress/e2e/api/*.js"