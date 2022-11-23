import { Negociacao } from "./negociacao.js";

export class Negociacoes {
	readonly negociacoes: Array<Negociacao> = [];
	adiciona(negociacao: Negociacao): void {
		this.negociacoes.push(negociacao);
	}
	lista(): ReadonlyArray<Negociacao> {
		return this.negociacoes;
	}
}
