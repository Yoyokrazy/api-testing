import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "helloworld-sample" is now active!');

	const disposable = vscode.commands.registerCommand('api-testing.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World!');
	});
	context.subscriptions.push(disposable);


	// * below event is to check onWillSaveNotebookDocument API
	// vscode.workspace.onWillSaveNotebookDocument(event => {
	// 	if (event.reason === vscode.TextDocumentSaveReason.Manual) {
	// 		event.waitUntil(new Promise((resolve) => {
	// 			const notebookEdit = new vscode.NotebookEdit(new vscode.NotebookRange(0, 0), [new vscode.NotebookCellData(vscode.NotebookCellKind.Code, 'print(1)', 'python')]);
	// 			const edit = new vscode.WorkspaceEdit();
	// 			edit.set(event.notebook.uri, [notebookEdit]);
	// 			resolve(edit);
	// 		}));
	// 	}
	// });
}

export function deactivate() {

}