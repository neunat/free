const {EditorState, EditorView, basicSetup} = CM["@codemirror/basic-setup"];

import {parser} from "/lang.js"
const {foldNodeProp, foldInside, indentNodeProp, LRLanguage, LanguageSupport} = CM["@codemirror/language"]
const {styleTags, tags} = CM["@codemirror/highlight"]
const t = tags


let parserWithMetadata = parser.configure({
    props: [
        styleTags({
            SetVariable:      t.variableName,
            ShortVariableSet: t.variableName,
            Identifier:       t.variableName,
            Boolean:          t.bool,
            String:           t.string,
            LineComment:      t.lineComment,
            MutlilineComment: t.lineComment,
            Number:           t.number,
            "( )":            t.paren,
            "{ }":            t.brace,
            "[ ]":            t.squareBracket,
            IfStatement:      t.keyword,
            ElseStatement:    t.keyword,
            WhileStatement:   t.keyword,
            Condition:        t.logicOperator,
            FunctionCall:     t.function(t.variableName),
            "=":              t.definitionOperator,
            ShortVarSetOp:    t.definitionOperator,
            BinaryExpression: t.arithmeticOperator,
            CreateFunction:   t.keyword,
            FunctionRest:     t.variableName,
            ",":              t.separator,
            Directive:        t.emphasis,
            ReturnStatement:  t.keyword,
            Float:            t.float,
            TryExcept:        t.keyword,
            ForLoop:          t.keyword,
            Object:           t.brace,
            ClassDefinition:  t.keyword
            //":":              
        }),
        indentNodeProp.add({
            IfStatement: context => context.column(context.node.from) + 4,
            WhileStatement: context => context.column(context.node.from) + 4,
            CreateFunction: context => context.column(context.node.from) + 4,
            ForLoop: context => context.column(context.node.from) + 4,
            TryExcept: context => context.column(context.node.from) + 4,
            ClassDefinition: context => context.column(context.node.from) + 4,
            Object: context => context.column(context.node.from) + 4,
            Array: context => context.column(context.node.from) + 4,
        }),
        foldNodeProp.add({
            IfStatement: foldInside,
            FunctionRest: foldInside,
            WhileStatement: foldInside,
            ForLoop: foldInside,
            TryExcept: foldInside,
            ClassDefinition: foldInside
        })
    ],
    languageData: {
        closeBrackets: {
            brackets: ["(", "[", "{", "'", '"']
        },
        commentTokens: {
            line: "//", 
            block: {
                open: "/",
                close: "\\"
            }
        },
    }
})

const exampleLanguage = LRLanguage.define({
    parser: parserWithMetadata
})

function example() {
    return new LanguageSupport(exampleLanguage, [])
}

import { oneDark } from "/onedark.js"

const {CompletionContext, autocompletion} = CM["@codemirror/autocomplete"]
const {syntaxTree} = CM["@codemirror/language"]

function myCompletions(context) {
    let prog = syntaxTree(context.state)//.resolveInner(context.pos, -1)
    
    let comps = []
    let variables = []
    let functions = []

    console.clear()
    let cursor = prog.cursor()
    do {
        if (cursor.name == "SetVariable") {
            cursor.next()
            let name = context.state.sliceDoc(cursor.from, cursor.to)
            variables.push(name)
        }
        else if (cursor.name == "FunctionRest") {
            cursor.next()
            functions.push(context.state.sliceDoc(cursor.from, cursor.to))
        }
    } while (cursor.next())
    
    let lastNode = syntaxTree(context.state).resolveInner(context.pos, -1)

    if (lastNode.name == "Identifier") {
        let name = context.state.sliceDoc(lastNode.from, lastNode.to)

        for (let vari of variables) {
            if (vari.startsWith(name)) {
                comps.push({
                    label: vari,
                    type: "variable",
                    apply: vari
                })
            }
        }

        for (let func of functions) {
            if (func.startsWith(name)) {
                comps.push({
                    label: func,
                    type: "function",
                    apply: func + "()"
                })
            }
        }
    }

    return {
        from: lastNode.from,
        options: comps
    }
}



let code = `
funct autocomplete() {
    output("Autocomplete me")
}

`

let state = EditorState.create({
    doc: code,
    extensions: [
        basicSetup,
        example(),
        oneDark,
        autocompletion({
            override: [myCompletions]
        })
    ],
})

let view = new EditorView({
    state,
    parent: document.querySelector("#editor")
})

window.codeEditor = view