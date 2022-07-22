let letrasChutadas = []
let vidas = 6
let palavra = []

class Forca {

  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta;
    this.underline();
  }

  underline() {
    for (let i = 0; i < this.palavraSecreta.length; i++) {
      palavra.push("_")
    }
  }

  chutar(letra) {
    if (!this.regras(letra)) {
      const letraAcertadas = this.palavraSecreta.includes(letra)
      letrasChutadas.push(letra)
      if (letraAcertadas) {
        for (let i = 0; i < this.palavraSecreta.length; i++) {
          this.palavraSecreta[i] === letra && (palavra[i] = letra);
        }
      } else {
        vidas--
      }
      return true
    }
  }

  regras(letra) {
    if (letra.length > 1) {
      console.log('Uma letra por vez.')
      return true
    } else if (letrasChutadas.includes(letra)) {
      console.log('Essa letra já foi chutada.')
      return true
    }
    return false
  }

  buscarEstado() {

    if (vidas === 0) {
      return 'perdeu'
    } else if (palavra.join('') === this.palavraSecreta && vidas > 0) {
      return 'ganhou'
    } else {
      return 'aguardando chute'
    }
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas, // Deve conter todas as letras chutadas
      vidas, // Quantidade de vidas restantes
      palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }

  }
}

module.exports = Forca;
