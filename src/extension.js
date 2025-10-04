"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
let diagnosticCollection;
function activate(context) {
    console.log('Baseline Assistant activated!');
    diagnosticCollection = vscode.languages.createDiagnosticCollection('baseline');
    context.subscriptions.push(diagnosticCollection);
    // Register scan command
    const scanCommand = vscode.commands.registerCommand('baseline.scanFile', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            scanDocument(editor.document);
            vscode.window.showInformationMessage('Baseline scan complete!');
        }
    });
    // Auto-scan when file opens or changes
    vscode.window.onDidChangeActiveTextEditor(editor => {
        if (editor) {
            scanDocument(editor.document);
        }
    });
    vscode.workspace.onDidChangeTextDocument(event => {
        scanDocument(event.document);
    });
    context.subscriptions.push(scanCommand);
}
exports.activate = activate;
function scanDocument(document) {
    if (!['javascript', 'typescript', 'css'].includes(document.languageId)) {
        return;
    }
    const diagnostics = [];
    const text = document.getText();
    // Simple patterns to detect non-baseline features
    const patterns = [
        { regex: /\.flat\(/g, message: 'Array.flat() has limited browser support' },
        { regex: /@container/g, message: 'Container queries have limited browser support' },
        { regex: /subgrid/g, message: 'CSS subgrid has limited browser support' }
    ];
    for (const pattern of patterns) {
        let match;
        while ((match = pattern.regex.exec(text)) !== null) {
            const start = document.positionAt(match.index);
            const end = document.positionAt(match.index + match[0].length);
            const range = new vscode.Range(start, end);
            const diagnostic = new vscode.Diagnostic(range, pattern.message, vscode.DiagnosticSeverity.Warning);
            diagnostic.source = 'Baseline Assistant';
            diagnostics.push(diagnostic);
        }
    }
    diagnosticCollection.set(document.uri, diagnostics);
}
function deactivate() {
    if (diagnosticCollection) {
        diagnosticCollection.dispose();
    }
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map