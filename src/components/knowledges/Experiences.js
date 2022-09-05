import React from "react";

const Experiences = () => {
  return (
    <div className="experience">
      <h3>Expérience</h3>
      <div className="exp-1">
        <h4>Développeur Web (stagiaire) - Hameau des Pierreux</h4>
        <h5>2022</h5>
        <p>
          Conception d’un site internet pour le Hameau des Pierreux (Gîte).
          Maquettage, développement du site avec sa version responsive (Symfony,
          Javascript), hébergement du site.
        </p>
      </div>
      <div className="exp-2">
        <h4>Illustrateur - Concept Artist (freelance)</h4>
        <h5>2021 - 2022</h5>
        <p>
          Missions ponctuelles pour particuliers ou entreprises. Réalisation de
          projets à partir d’une idée, d’une direction artistique. Création de
          personnages, d’environnements, d’objets/accessoires.
        </p>
      </div>
      <div className="exp-3">
        <h4>Travailleur Social</h4>
        <h5>2013 - 2020</h5>
        <p>
          Accompagnement individuel, gestion de groupe, gestion de projet.
          Construction de projets de vie avec des personnes en difficulté.
          Socialisation, autonomie, insertion sociale et professionnelle.
        </p>
      </div>
    </div>
  );
};

export default Experiences;
