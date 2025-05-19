// Generated from c:/UTN/SSL/Sintaxis y Semántica de lenguajes/mianalizador/Grammar/Pila.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link PilaParser}.
 */
public interface PilaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link PilaParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(PilaParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(PilaParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link PilaParser#comandos}.
	 * @param ctx the parse tree
	 */
	void enterComandos(PilaParser.ComandosContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaParser#comandos}.
	 * @param ctx the parse tree
	 */
	void exitComandos(PilaParser.ComandosContext ctx);
	/**
	 * Enter a parse tree produced by {@link PilaParser#operacion}.
	 * @param ctx the parse tree
	 */
	void enterOperacion(PilaParser.OperacionContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaParser#operacion}.
	 * @param ctx the parse tree
	 */
	void exitOperacion(PilaParser.OperacionContext ctx);
	/**
	 * Enter a parse tree produced by {@link PilaParser#crear}.
	 * @param ctx the parse tree
	 */
	void enterCrear(PilaParser.CrearContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaParser#crear}.
	 * @param ctx the parse tree
	 */
	void exitCrear(PilaParser.CrearContext ctx);
	/**
	 * Enter a parse tree produced by {@link PilaParser#push}.
	 * @param ctx the parse tree
	 */
	void enterPush(PilaParser.PushContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaParser#push}.
	 * @param ctx the parse tree
	 */
	void exitPush(PilaParser.PushContext ctx);
	/**
	 * Enter a parse tree produced by {@link PilaParser#pop}.
	 * @param ctx the parse tree
	 */
	void enterPop(PilaParser.PopContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaParser#pop}.
	 * @param ctx the parse tree
	 */
	void exitPop(PilaParser.PopContext ctx);
	/**
	 * Enter a parse tree produced by {@link PilaParser#peek}.
	 * @param ctx the parse tree
	 */
	void enterPeek(PilaParser.PeekContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaParser#peek}.
	 * @param ctx the parse tree
	 */
	void exitPeek(PilaParser.PeekContext ctx);
	/**
	 * Enter a parse tree produced by {@link PilaParser#lista}.
	 * @param ctx the parse tree
	 */
	void enterLista(PilaParser.ListaContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaParser#lista}.
	 * @param ctx the parse tree
	 */
	void exitLista(PilaParser.ListaContext ctx);
	/**
	 * Enter a parse tree produced by {@link PilaParser#valor}.
	 * @param ctx the parse tree
	 */
	void enterValor(PilaParser.ValorContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaParser#valor}.
	 * @param ctx the parse tree
	 */
	void exitValor(PilaParser.ValorContext ctx);
}