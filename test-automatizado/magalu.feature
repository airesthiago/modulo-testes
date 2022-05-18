#Language: pt;

Funcionalidade: Compra no site Magalu
    Como        um cliente/usuário Magalu
    Preciso     finalizar uma compra

#background
Contexto:
    Dado    que adentro ao site

Esquema do cenario: Devo conseguir acessar o site
    Quando  seleciono um produto
    E       adiciono o produto ao carrinho
    E       escolho se quero garantia
    ENTÃO   adentro ao carrinho de produtos
    E       preciso registrar <numero-cartao>
    E       preciso registrar <nome-cartao>
    E       preciso registrar <data-validade>
    E       preciso registrar <cvv>
    ENTÃO   finalizo o pedido
    E       mensagem de sucesso da operação aparece

Exemplos:
| numero-cartao | nome-cartao | data-validade | cvv |      mensagem      |
|      6789     |    thiago   |    03/2027    | 233 | Operação Sucedida! |
|      1234     |    thiago   |    03/2027    | 233 | Operação Falhou!   |
|      6789     |    oliver   |    06/2024    | 233 | Operação Falhou!   |
|      6789     |    thiago   |    03/2027    | 234 | Operação Falhou!   |
