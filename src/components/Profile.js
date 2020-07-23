import React, { useState } from "react";
import "./profile.css";
import { Container } from "reactstrap";

const Profile = (props) => {
  const [modif, setModif] = useState(false);
  const [profile, setProfile] = useState({
    nom: "nom de famille",
    prenom: "prénom",
    mail: "adresse email",
    password: "123456",
  });
  const [modifiedProfile, setModifiedProfile] = useState({
    mail: profile.mail,
    password: profile.password,
    rue: profile.rue,
    postal: profile.postal,
    ville: profile.ville,
    cpam: profile.cpam,
    mutuelle: profile.mutuelle,
  });
  const [typedPW, setTypedPW] = useState("");
  const [validPW, setValidPW] = useState();
  const changePW = (e) => {
    return e.target.value !== "" && typedPW !== "" && e.target.value === typedPW
      ? setValidPW(true) &
          setModifiedProfile({ ...modifiedProfile, password: e.target.value })
      : setValidPW(false);
  };
  const modifprof = () => {
    setModif(!modif);
  };
  const validprof = () => {
    setProfile({
      ...profile,
      mail: modifiedProfile.mail,
      password: modifiedProfile.password,
    });
    setModif(!modif);
  };
  return (
    <Container>
      <div className="profile_page">
        <table>
          <tr className="entete">Nom </tr>
          <tr className="valeur">{profile.nom}</tr>
          <tr className="entete">Prénom </tr>
          <tr className="valeur">{profile.prenom}</tr>
          <tr className="entete">Adresse Mail </tr>
          <tr className="valeur">
            {modif ? (
              <input
                type="text"
                value={modifiedProfile.mail}
                onChange={(e) =>
                  setModifiedProfile({
                    ...modifiedProfile,
                    mail: e.target.value,
                  })
                }
              />
            ) : (
              profile.mail
            )}
          </tr>
          <tr className="entete">Mot de passe :</tr>
          {modif ? (
            <>
              <tr className="entete">Nouveau mot de passe </tr>
              <tr className="valeur">
                <input
                  type="password"
                  className={validPW ? "valid" : "invalid"}
                  value={typedPW}
                  onChange={(e) => setTypedPW(e.target.value)}
                />
              </tr>
              <tr className="entete">Valider mot de passe </tr>
              <tr>
                <input
                  type="password"
                  className={validPW ? "valid" : "invalid"}
                  onChange={(e) => changePW(e)}
                />
              </tr>{" "}
            </>
          ) : (
            ""
          )}
         
        </table>
        <div>
          {modif ? (
            <button className="modif_button" onClick={(e) => validprof(e)}>
              Valider mon profil
            </button>
          ) : (
            <button className="modif_button" onClick={(e) => modifprof(e)}>
              Modifier mon profil
            </button>
          )}
        </div>
      </div>
    </Container>
  );
};
export default Profile;
