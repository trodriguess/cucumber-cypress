# 🧪 Cucumber + Cypress - Estudos Iniciais

Projeto para estudo e prática de testes end-to-end combinando **Cypress** com **Cucumber / Gherkin**, com foco em aprender a escrever testes mais legíveis, baseados em especificações, usando BDD (Behavior Driven Development).

---

## Estrutura do Projeto 

- Configuração inicial do Cypress integrada com Cucumber (arquivos `.feature`)  
- Uso de Gherkin para descrever cenários de teste de maneira legível  
- Scripts de teste usando passos definidos em arquivos de step definitions  
- Execução de testes em modo GUI (Graphical User Interface) e headless, via comando `npx cypress run` 
- Boa organização de pastas: `cypress/`, arquivos de configuração, etc.  

---

## Cenários de Teste Automatizados

- O projeto cobre os seguintes cenários de testes de ponta a ponta utilizando Cypress com Cucumber:
- Login com credenciais válidas (sucesso)
- Login com usuário ou senha inválidos (falha)
- Tentativa de login com credenciais incorretas (usuário e senha inválidos)
- Cadastro de novo usuário com dados válidos
- Tentativa de cadastro com email já existente
- Tentativa de cadastro com dados inválidos ou incompletos

---

## Tecnologias utilizadas

<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=js,cypress,gherkin,nodejs,npm" />
  </a>
</p>

- **JavaScript** — lógica de testes, step definitions  
- **Cypress** — execução de testes em navegador, interações com UI  
- **Cucumber / Gherkin** — escrita de cenários em linguagem natural, separando lógica de descrição  
- Node.js / npm — gerenciamento de dependências e scripts  

---

## Como executar localmente

1. Clone este repositório:  
   ```bash
   git clone https://github.com/trodriguess/cucumber-cypress.git

2. Acesse a pasta do projeto: 
   ```bash
   cd cucumber-cypress

3. Instale as dependências:
   ```bash
   npm install

4. Execute os testes:
  - Com interface visual (Cypress GUI (Graphical User Interface)):
    ```bash
    npx cypress open

  - Em modo headless (ideal para CI/CD ou comandos automáticos):
    ```bash
    npx cypress run

---


## Boas práticas e aprendizados demonstrados

- Uso de BDD para tornar os testes mais descritivos e acessíveis a pessoas não técnicas

- Separação entre especificação (arquivos .feature) e implementação (step definitions)

- Utilização de Cypress para interações com UI, assertions e automação de fluxo de usuário

- Organização clara do projeto, facilitando manutenção e adição de novos cenários

---

# Autora

### 👩‍💻 Thais Rodrigues

<p align="left">
  <a href="https://discordapp.com/users/thaiss.rodriguess">
    <img height="45" width="45" src="https://skillicons.dev/icons?i=discord">
  </a> 
  <a href = "mailto:thaiss.rodriguess@icloud.com">
    <img height="50" width="50" src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Mail-512.png">
  </a>
    <a href="https://www.linkedin.com/in/thaiss-rodriguess/">
      <img height="45" width="45" src="https://go-skill-icons.vercel.app/api/icons?i=linkedin">
    </a>  
   <a href="https://wa.me/5511961775288">
     <img height="45" width="45" src="https://github.com/appicons/Whatsapp/blob/master/icons/whatsapp_194x194.png">
   </a>
  </p>
