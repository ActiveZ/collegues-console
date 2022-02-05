class Collegue {
  constructor(pseudo = "", nom = "", prenom = "", photo = "", score = 0) {
    this.pseudo = pseudo;
    this.nom = nom;
    this.prenom = prenom;
    this.photo = photo;
    this.score = score;
  }
}

const _Collegue = Collegue;
export { _Collegue as Collegue };
