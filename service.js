import fetch from "node-fetch";
class Api {
  /**
   * api GET
   * @returns liste des collègues
   */
  get() {
    const url = "https://formation-angular-collegues.herokuapp.com/api/v1/collegues";

    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log("Erreur:", err);
      });
  }

  /**
   *
   * @param {*} data = objet collegue
   * @returns
   */
  post(data) {
    const url =
      "https://formation-angular-collegues.herokuapp.com/api/v1/collegues";

    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log("Erreur:", err);
      });
  }

  /**
   *
   * @param {*} pseudo = pseudo du collegue
   */
  vote(pseudo) {
    const url =
      "https://formation-angular-collegues.herokuapp.com/api/v1/votes";

    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        avis: "AIMER",
        pseudo: pseudo,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log("Erreur:", err);
      });
  }
}

const _Api = Api;
export { _Api as Api };
