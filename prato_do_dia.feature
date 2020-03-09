#language:pt

Funcionalidade: Prato do dia!
    Queremos saber qual o prato do dia na capital paulista.

    Esquema do Cenário: Descubra o prato do dia!
        Dado que hoje é "<dia>"
        Quando eu pergunto qual é o prato do dia
        Então a resposta deve ser "<resposta>"

        Exemplos:
            | dia           | resposta           |
            | segunda-feira | Virado a paulista! |
            | terça-feira   | Dobradinha!        |
            | quarta-feira  | Feijoada!          |
            | quinta-feira  | Macarrão!          |
            | sexta-feira   | Filé de peixe!     |
            | sábado        | Bife a cavalo!     |