import PilaLexer from "../Grammar/PilaLexer.js";
import PilaParser from "../Grammar/PilaParser.js";
import { CustomPilaVisitor } from "./CustomPilaVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';
import path from "path"
import { fileURLToPath } from "url";

async function main() {
    let input;

    // Leer entrada desde archivo input.txt o por teclado si no existe
    try {
        input = fs.readFileSync('./Input/correcto1.txt', 'utf8');
    } catch (err) {
        input = await leerCadena();
        console.log(input);
    }

    // Crear lexer y parser
    let inputStream = CharStreams.fromString(input);
    let lexer = new PilaLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new PilaParser(tokenStream);
    let tree = parser.programa(); 

    // Verificar errores de sintaxis
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } else {
        console.log("\nEntrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);

        // Visitor personalizado
        const visitor = new CustomPilaVisitor();
        visitor.visit(tree);
    }
}

// Función para leer por teclado si no hay archivo input.txt
function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Ejecutar
main();
