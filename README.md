# Projeto simples em node mostrando a criação de tokens jwt e typescript.

Para acessar a rota /protegido precisa ser efetuado o login na rota /login, assim ira gerar um token.

### Como Rodar:

    yarn dev

### Como buildar:

    yarn build


# DB CONTAINER ====================================================

### Construa a imagem do Docker usando o seguinte comando:

    sudo docker build -t mydatabase .

### Execute o seguinte comando para iniciar um novo container usando a imagem que acabou de criar:

    sudo docker run --name db -p 5432:5432 mydatabase

### Apagar containers

    sudo docker rmi <container-name> -f

### Limpar rastros do container

    sudo docker system prune

### Verificar Conteiners em execução

    sudo docker ps

### Verificar containers criados

    sudo docker images
