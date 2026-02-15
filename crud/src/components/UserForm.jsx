import React from "react";

export default function UserForm() {
  return (
    <div className="container mb-4">
      <h4 className="mb-3">Ajouter un utilisateur</h4>

      <form>
        <div className="row align-items-end g-3">
          {/* Prénom */}
          <div className="col-md-3">
            <label className="form-label">Prénom</label>
            <input type="text" className="form-control" placeholder="Prénom" />
          </div>

          {/* Nom */}
          <div className="col-md-3">
            <label className="form-label">Nom</label>
            <input type="text" className="form-control" placeholder="Nom" />
          </div>

          {/* Email */}
          <div className="col-md-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Email" />
          </div>

          {/* Sexe */}
          <div className="col-md-3">
            <label className="form-label d-block">Sexe</label>

            <div className="form-check form-check-inline">
              <input
                id="homme"
                className="form-check-input"
                type="radio"
                name="sexe"
                value="homme"
              />
              <label className="form-check-label" htmlFor="homme">
                Masculin
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="sexe"
                value="femme"
                id="femme"
              />
              <label className="form-check-label" htmlFor="femme">
                Féminin
              </label>
            </div>
          </div>
        </div>

        {/* Bouton */}
        <div className="mt-3">
          <button type="submit" className="btn btn-success">
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
}
