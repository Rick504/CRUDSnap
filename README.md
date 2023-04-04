# Projeto simples em node mostrando a criação de tokens jwt e typescript.

Para acessar a rota /protegido precisa ser efetuado o login na rota /login, assim ira gerar um token.

### Como Rodar:

    yarn dev

### Como buildar:

    yarn build


# DB CONTAINER

### Construa a imagem do Docker usando o seguinte comando:

obs: entrar na pasta db_container e:

   sudo docker compose up

### Apagar todas as imagens

    sudo docker rmi $(sudo docker images -a -q) -f

### Limpar rastros dos container e imagens

    sudo docker system prune

### Verificar Conteiners em execução

    sudo docker ps

### Verificar status container

    sudo docker ps -a


### Verificar containers criados

    sudo docker images
