Feature: Register User
    Eu como cliente 
    Quero me cadastrar na aplicação
    Para fazer um pedido de compra

  Background: Acess Register Screen
    Given I am on the Register screen

  Scenario: Campo Nome vazio
    When I click on the Register button
    Then I should see the error message "O campo nome deve ser prenchido"

  Scenario: Campo E-mail vazio
    When I fill the name
    And I click on the Register button
    Then I should see the error message "O campo e-mail deve ser prenchido corretamente"

  Scenario: Campo E-mail inválido
    When I fill the name
    And I fill the email with an invalid format
    And I click on the Register button
    Then I should see the error message "O campo e-mail deve ser prenchido corretamente"

  Scenario: Campo Senha vazio
    When I fill the name
    And I fill the email with a valid format
    And I click on the Register button
    Then I should see the error message "O campo senha deve ter pelo menos 6 dígitos"

  Scenario: Campo Senha inválido
    When I fill the name
    And I fill the email with a valid format
    And I fill the password with less than 6 characters
    And I click on the Register button
    Then I should see the error message "O campo senha deve ter pelo menos 6 dígitos"

  Scenario: Cadastro com sucesso
    When I fill my credentials correctly
    And I click on the Register button
    Then I should see the successful title "Cadastro realizado!"
    And I should see the successful subtitle "Bem-vindo"
