Feature: Login
    Eu como cliente
    Quero fazer login na aplicação
    Para fazer um pedido de compras

  Background: Acess Login Screen
    Given I am on the Login screen

  Scenario: Campo E-mail vazio
    When I click on the Login button
    Then I should see the Login error message "E-mail inválido."

  Scenario: Campo E-mail inválido
    When I fill the email wrong email
    And I click on the Login button
    Then I should see the Login error message "E-mail inválido."

  Scenario: Campo Senha vazio
    When I fill the login email
    And I click on the Login button
    Then I should see the Login error message "Senha inválida."

  Scenario: Campo Senha inválido
    When I fill the login email
    And I fill the login wrong password
    And I click on the Login button
    Then I should see the Login error message "Senha inválida."

  Scenario: Login com sucesso
    When I fill the login email
    And I fill the login right password
    And I click on the Login button
    Then I should see the success Login title "Login realizado"
    And I should see the success Login subtitle "Olá,"

  Scenario: Ainda não tem conta
    When I click on the Ainda não tem conta button
    Then I should see the Register page
    And I should see the Register title "Cadastro de usuário"

  Scenario: Selecionando Checkbox Lembrar de mim
    When I fill my Login credentials correctly
    Then I check the Remember me checkbox
    And I click on the Login button
    Then I should see the success Login title "Login realizado"
    And I should see the success Login subtitle "Olá,"

  Scenario: Uncheck o Checkbox Lembrar de mim
    When I check the Remember me checkbox
    Then I fill my Login credentials correctly
    And I uncheck the Remember me checkbox
    And I click on the Login button
    Then I should see the success Login title "Login realizado"
    And I should see the success Login subtitle "Olá,"
