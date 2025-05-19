# Analizador de Pila - Sintaxis y Semántica de Lenguajes

Este proyecto consiste en un **analizador sintáctico** desarrollado con **ANTLR4 y JavaScript** que interpreta instrucciones para manejar una estructura de datos tipo *pila*.

---

## Requisitos

Antes de ejecutar el proyecto, asegurate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [ANTLR4](https://www.antlr.org/) instalado globalmente (solo si vas a recompilar la gramática)
- Tener JRE (Java Runtime Environment) instalado en su computadora. (https://www.java.com/en/download/) Se requiere Java 1.8 o superior. Este requisito
responde a que ANTLR es un herramienta desarrollada en Java, y requiere del entorno de ejecución Java (JRE) para funcionar.
- Tener instalado VSCode

Estas dependencias y pogramas deben ser instaladas debidamente generando su PATH correspondiente en las variables de "Entorno del sistema"

- Instalar GIT para clonar/versionar el repositorio 

---

## Instalación y ejecución

1. **Clonar o descargar** este repositorio.

Desde el CMD  de windows enviamos el siguiente comando

   git clone https://github.com/giovanniclmb/50513.git

2. En la terminal, ir al directorio del proyecto:

   ```bash
   cd mianalizador
3. Instalar las dependencias

   npm install
4. Ejecutar el analizador
    npm start


- Ejemplo de entrada 
pila MiPila {
  crear([1, 2, 3])!
  empujar(4)!
  sacar()!
  mirar()!
}

# A continuación se detallan TOKENS y CARÁCTERES válidos para este analizador

1- ID
Usados para nombrar la pila, por ejemplo: pila MiPila.
Regla:
ID: [a-zA-Z_][a-zA-Z_0-9]*;
Caracteres válidos:

Letras (mayúsculas y minúsculas): a-z, A-Z

Números (solo después del primer carácter): 0-9

Guión bajo: _

✅ Ejemplos válidos: MiPila, _pila1, stack_123
❌ Ejemplos inválidos: 1Pila (no puede comenzar con número)

2- NÚMEROS (NUMERO)
Usados para representar valores en la pila.

Regla:
NUMERO: [0-9]+;
Caracteres válidos:
Dígitos del 0 al 9, sin punto decimal ni signo.

✅ Ejemplos válidos: 1, 42, 1000
❌ Ejemplos inválidos: -5, 3.14 (solo enteros positivos)

3- Texto(TEXTO)
Cadenas que pueden ser empujadas como valores si se habilita en la lógica.

Regla:
TEXTO: '"' (~["\r\n])* '"';
Caracteres válidos:
Todo lo que esté entre comillas dobles ("..."), excepto comillas dobles internas y saltos de línea.

✅ Ejemplos válidos: "hola", "valor123"
❌ Ejemplos inválidos: "hola, valor" (deben estar encerrados en comillas dobles)

4- 📌 Palabras clave del lenguaje
Estas palabras son reservadas y deben escribirse exactamente así:

Token	Función
-pila:	Inicia el programa
-crear:	Crea la pila
-empujar:	Agrega un valor
-sacar:	Quita el último valor
-mirar:	Muestra el valor tope

5- 🧱 Otros símbolos importantes
Símbolo	Significado
{ }	Delimita el bloque de comandos
[ ]	Define una lista de valores
( )	Encierra los parámetros
,	Separa valores
!	Finaliza una instrucción

