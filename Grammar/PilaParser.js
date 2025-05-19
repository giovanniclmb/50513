// Generated from Pila.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import PilaListener from './PilaListener.js';
import PilaVisitor from './PilaVisitor.js';

const serializedATN = [4,1,17,75,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,0,3,0,23,8,0,1,0,1,0,1,0,1,
1,5,1,29,8,1,10,1,12,1,32,9,1,1,2,1,2,1,2,1,2,3,2,38,8,2,1,3,1,3,1,3,1,3,
1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,
1,7,1,7,1,7,1,7,5,7,66,8,7,10,7,12,7,69,9,7,1,7,1,7,1,8,1,8,1,8,0,0,9,0,
2,4,6,8,10,12,14,16,0,1,1,0,15,16,71,0,18,1,0,0,0,2,30,1,0,0,0,4,37,1,0,
0,0,6,39,1,0,0,0,8,45,1,0,0,0,10,51,1,0,0,0,12,56,1,0,0,0,14,61,1,0,0,0,
16,72,1,0,0,0,18,19,5,1,0,0,19,20,5,14,0,0,20,22,5,2,0,0,21,23,3,2,1,0,22,
21,1,0,0,0,22,23,1,0,0,0,23,24,1,0,0,0,24,25,5,3,0,0,25,26,5,0,0,1,26,1,
1,0,0,0,27,29,3,4,2,0,28,27,1,0,0,0,29,32,1,0,0,0,30,28,1,0,0,0,30,31,1,
0,0,0,31,3,1,0,0,0,32,30,1,0,0,0,33,38,3,6,3,0,34,38,3,8,4,0,35,38,3,10,
5,0,36,38,3,12,6,0,37,33,1,0,0,0,37,34,1,0,0,0,37,35,1,0,0,0,37,36,1,0,0,
0,38,5,1,0,0,0,39,40,5,4,0,0,40,41,5,5,0,0,41,42,3,14,7,0,42,43,5,6,0,0,
43,44,5,7,0,0,44,7,1,0,0,0,45,46,5,8,0,0,46,47,5,5,0,0,47,48,3,16,8,0,48,
49,5,6,0,0,49,50,5,7,0,0,50,9,1,0,0,0,51,52,5,9,0,0,52,53,5,5,0,0,53,54,
5,6,0,0,54,55,5,7,0,0,55,11,1,0,0,0,56,57,5,10,0,0,57,58,5,5,0,0,58,59,5,
6,0,0,59,60,5,7,0,0,60,13,1,0,0,0,61,62,5,11,0,0,62,67,3,16,8,0,63,64,5,
12,0,0,64,66,3,16,8,0,65,63,1,0,0,0,66,69,1,0,0,0,67,65,1,0,0,0,67,68,1,
0,0,0,68,70,1,0,0,0,69,67,1,0,0,0,70,71,5,13,0,0,71,15,1,0,0,0,72,73,7,0,
0,0,73,17,1,0,0,0,4,22,30,37,67];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PilaParser extends antlr4.Parser {

    static grammarFileName = "Pila.g4";
    static literalNames = [ null, "'pila'", "'{'", "'}'", "'crear'", "'('", 
                            "')'", "'!'", "'empujar'", "'sacar'", "'mirar'", 
                            "'['", "','", "']'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "ID", "NUMERO", 
                             "TEXTO", "WS" ];
    static ruleNames = [ "programa", "comandos", "operacion", "crear", "push", 
                         "pop", "peek", "lista", "valor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PilaParser.ruleNames;
        this.literalNames = PilaParser.literalNames;
        this.symbolicNames = PilaParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PilaParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.match(PilaParser.T__0);
	        this.state = 19;
	        this.match(PilaParser.ID);
	        this.state = 20;
	        this.match(PilaParser.T__1);
	        this.state = 22;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        if(la_===1) {
	            this.state = 21;
	            this.comandos();

	        }
	        this.state = 24;
	        this.match(PilaParser.T__2);
	        this.state = 25;
	        this.match(PilaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comandos() {
	    let localctx = new ComandosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PilaParser.RULE_comandos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1808) !== 0)) {
	            this.state = 27;
	            this.operacion();
	            this.state = 32;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacion() {
	    let localctx = new OperacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, PilaParser.RULE_operacion);
	    try {
	        this.state = 37;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 33;
	            this.crear();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 34;
	            this.push();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 35;
	            this.pop();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 36;
	            this.peek();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	crear() {
	    let localctx = new CrearContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, PilaParser.RULE_crear);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(PilaParser.T__3);
	        this.state = 40;
	        this.match(PilaParser.T__4);
	        this.state = 41;
	        this.lista();
	        this.state = 42;
	        this.match(PilaParser.T__5);
	        this.state = 43;
	        this.match(PilaParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	push() {
	    let localctx = new PushContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, PilaParser.RULE_push);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(PilaParser.T__7);
	        this.state = 46;
	        this.match(PilaParser.T__4);
	        this.state = 47;
	        this.valor();
	        this.state = 48;
	        this.match(PilaParser.T__5);
	        this.state = 49;
	        this.match(PilaParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pop() {
	    let localctx = new PopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, PilaParser.RULE_pop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(PilaParser.T__8);
	        this.state = 52;
	        this.match(PilaParser.T__4);
	        this.state = 53;
	        this.match(PilaParser.T__5);
	        this.state = 54;
	        this.match(PilaParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	peek() {
	    let localctx = new PeekContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, PilaParser.RULE_peek);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(PilaParser.T__9);
	        this.state = 57;
	        this.match(PilaParser.T__4);
	        this.state = 58;
	        this.match(PilaParser.T__5);
	        this.state = 59;
	        this.match(PilaParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista() {
	    let localctx = new ListaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, PilaParser.RULE_lista);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(PilaParser.T__10);
	        this.state = 62;
	        this.valor();
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12) {
	            this.state = 63;
	            this.match(PilaParser.T__11);
	            this.state = 64;
	            this.valor();
	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 70;
	        this.match(PilaParser.T__12);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, PilaParser.RULE_valor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        _la = this._input.LA(1);
	        if(!(_la===15 || _la===16)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

PilaParser.EOF = antlr4.Token.EOF;
PilaParser.T__0 = 1;
PilaParser.T__1 = 2;
PilaParser.T__2 = 3;
PilaParser.T__3 = 4;
PilaParser.T__4 = 5;
PilaParser.T__5 = 6;
PilaParser.T__6 = 7;
PilaParser.T__7 = 8;
PilaParser.T__8 = 9;
PilaParser.T__9 = 10;
PilaParser.T__10 = 11;
PilaParser.T__11 = 12;
PilaParser.T__12 = 13;
PilaParser.ID = 14;
PilaParser.NUMERO = 15;
PilaParser.TEXTO = 16;
PilaParser.WS = 17;

PilaParser.RULE_programa = 0;
PilaParser.RULE_comandos = 1;
PilaParser.RULE_operacion = 2;
PilaParser.RULE_crear = 3;
PilaParser.RULE_push = 4;
PilaParser.RULE_pop = 5;
PilaParser.RULE_peek = 6;
PilaParser.RULE_lista = 7;
PilaParser.RULE_valor = 8;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_programa;
    }

	ID() {
	    return this.getToken(PilaParser.ID, 0);
	};

	EOF() {
	    return this.getToken(PilaParser.EOF, 0);
	};

	comandos() {
	    return this.getTypedRuleContext(ComandosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_comandos;
    }

	operacion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperacionContext);
	    } else {
	        return this.getTypedRuleContext(OperacionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterComandos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitComandos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitComandos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_operacion;
    }

	crear() {
	    return this.getTypedRuleContext(CrearContext,0);
	};

	push() {
	    return this.getTypedRuleContext(PushContext,0);
	};

	pop() {
	    return this.getTypedRuleContext(PopContext,0);
	};

	peek() {
	    return this.getTypedRuleContext(PeekContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterOperacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitOperacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitOperacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CrearContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_crear;
    }

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterCrear(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitCrear(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitCrear(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PushContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_push;
    }

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterPush(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitPush(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitPush(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_pop;
    }


	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterPop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitPop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitPop(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PeekContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_peek;
    }


	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterPeek(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitPeek(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitPeek(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_lista;
    }

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterLista(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitLista(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitLista(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_valor;
    }

	NUMERO() {
	    return this.getToken(PilaParser.NUMERO, 0);
	};

	TEXTO() {
	    return this.getToken(PilaParser.TEXTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PilaVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




PilaParser.ProgramaContext = ProgramaContext; 
PilaParser.ComandosContext = ComandosContext; 
PilaParser.OperacionContext = OperacionContext; 
PilaParser.CrearContext = CrearContext; 
PilaParser.PushContext = PushContext; 
PilaParser.PopContext = PopContext; 
PilaParser.PeekContext = PeekContext; 
PilaParser.ListaContext = ListaContext; 
PilaParser.ValorContext = ValorContext; 
