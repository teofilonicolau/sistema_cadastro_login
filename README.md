
## Descrição
Projeto para implementar um sistema de cadastro e login de usuários utilizando Node.js, Express, e MySQL. O sistema permite que novos usuários se registrem e façam login de maneira segura.
![image](https://github.com/user-attachments/assets/9bf33f47-9272-4b53-9501-7e1e0e05d06d)

## Funcionalidades
- Registro de novos usuários com hash de senha utilizando bcrypt.
- Login de usuários com verificação segura de senha..
- ![image](https://github.com/user-attachments/assets/6cb25f36-4dc7-420f-892e-892b57325e52)


## Tecnologias Utilizadas
- Node.js
- Express
- MySQL
- bcrypt (para hash de senha)
- HTML, CSS, JavaScript
- ![image](https://github.com/user-attachments/assets/514d39fb-50ef-4650-808e-39aac49b85ef)

- ![image](https://github.com/user-attachments/assets/e5c4a829-107d-4421-ae92-a46142d6201c)



## Instalação
1. Clone o repositório:
 ```
  git clone https://github.com/teofilonicolau/sistema_cadastro_login.git

  ```
2. Navegue até o diretório do projeto:
 ```
  cd projeto-cadastro-login

```

3. Instale as dependências:
  ``` 
  npm install
  ```

4. Configure o banco de dados MySQL.
   - Crie um banco de dados chamado cadastro_login.
   - Execute o script SQL para criar a tabela users no banco de dados.
5. Execute o projeto:
6.  
     ``` 
    node server.js
   ```
## Diagrama de Banco de Dados
  ### O projeto inclui as seguintes tabelas:
  - Tabela users: Armazena informações dos usuários (id, username, password, email, telefone, created_at).
  - Tabela profiles (se aplicável): Pode ser usada para armazenar perfis de usuários com dados adiciona

## Manual do Usuário


### 1. Cadastro:
   
      - Acesse a página de cadastro.
      - Preencha o formulário com seu nome de usuário, senha, e-mail e telefone.
      - Clique em "Cadastrar" para criar uma nova conta.

### 2. Login:

  - Acesse a página de login.
  - Insira seu nome de usuário e senha.
  - Clique em "Entrar" para fazer login no sistema.

## Observações Adicionais
  ### Certifique-se de ter o MySQL instalado e configurado corretamente.
      - Ajuste a configuração do banco de dados no arquivo db.js se necessário.
      - Se você precisar de mais informações ou tiver problemas, consulte a documentação do Node.js, Express e MySQL, ou entre em contato com o desenvolvedor do projeto.