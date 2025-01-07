# CypressDocker
In this project I going a practice about the advantage docker with cypress 


# Para correr la automatizacion con docker es

docker-compose down
docker-compose build --no-cache
docker-compose up
docker-compose removal 
docker-compose down --remove-orphans


docker-compose run cypress-ui

docker-compose run cypress api


cypress run --headless --spec "cypress/e2e/api/**/*.spec.{js,ts,jsx,tsx}" 