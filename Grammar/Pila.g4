grammar Pila;

programa: 'pila' ID '{' comandos? '}' EOF;

comandos: operacion*;

operacion: crear
        | push
        | pop
        | peek;

crear: 'crear' '(' lista ')' '!';

push: 'empujar' '(' valor ')' '!';

pop: 'sacar' '(' ')' '!';

peek: 'mirar' '(' ')' '!';

lista: '[' valor (',' valor)* ']';

valor: NUMERO
    | TEXTO;

ID: [a-zA-Z_][a-zA-Z_0-9]*;

NUMERO: [0-9]+;

TEXTO: '"' (~["\r\n])* '"';

WS: [ \t\r\n]+ -> skip;
