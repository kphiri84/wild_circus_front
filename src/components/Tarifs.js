import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './tarifs.css';
import places from '../assets/places.png'
import NavigBar from './NavigBar';
import bandeau from '../assets/bandeau3.jpg';
import NavigBar2 from './NavigBar2';

const Tarifs = () => {
  const token = localStorage.usertoken
  return (
    <div>
    {!token ?
      <NavigBar /> :
      <NavigBar2 />}
    <img className="bandeau" src={bandeau} alt="rond" />
    <Container>
      <Col md='12'>
        <Row className = "tarif">
          <Col md='6'>
            <h3 className="textCenter">TARIFS</h3>
            <p className="textCenter2">TOUT PUBLIC ET SÉANCES À TARIF RÉDUIT</p>
              <table>
                <thead>
                  <tr>
                    <th>Catégories</th>
                    <th>Adultes</th>
                    <th>Enfants (3 à 12 ans)</th>
                    <th>Séance prix réduits</th>
                  </tr>
                </thead>
                
                <tbody>
                  <tr className="color1">
                    <td>LOGES OR</td>
                    <td>42</td>
                    <td>39</td>
                    <td>29</td>
                  </tr>
                  <tr className="color2">
                    <td>LOGES ARGENT</td>
                    <td>40</td>
                    <td>37</td>
                    <td>27</td>
                  </tr>
                  <tr className="color3">
                    <td>LOGES</td>
                    <td>35</td>
                    <td>32</td>
                    <td>22</td>
                  </tr>
                  <tr className="color4">
                    <td>CARRÉ OR</td>
                    <td>34</td>
                    <td>31</td>
                    <td>21</td>
                  </tr>
                  <tr className="color5">
                    <td>ARGENT</td>
                    <td>32</td>
                    <td>29</td>
                    <td>19</td>
                  </tr>
                  <tr className="color6">
                    <td>PREMIERES</td>
                    <td>25</td>
                    <td>22</td>
                    <td>12</td>
                  </tr>
                  <tr className="color7">
                    <td>SECONDES</td>
                    <td>22</td>
                    <td>19</td>
                    <td>10</td>
                  </tr>
                </tbody>
              </table> 
              <p className="tarifRed">* Tarif unique Adulte et Enfant applicable uniquement sur les séances mentionnées TARIF RÉDUIT</p>
              <ul>
                <li>
                Entrée gratuite pour les enfants de - 3 ans, mais aucune place ne lui est attribuée. Les enfants de -3 ans sont à garder sur les genoux d'un adulte.
                </li>
              </ul>
          </Col>
          <Col md='6'>
            <h3 className="textCenter">PLACEMENT</h3>
            <img className="crond" src={places} alt="rond" />
            <ul>
              <li>Sièges individuels, placement selon ordre d'arrivée</li>
              <li>Placement accompagné dans la catégorie</li>
              <li>Placement en famille garanti</li>
              <li>+ de 1 730 places réparties en 7 catégories</li>
              <li>Structure sans mât intérieur pour une visibilité totale</li>
              <li>Chapiteau chauffé</li>
              <li>Salle de spectacle et toilettes accessibles pour les PMR</li>
              <li>Accueil respectant les consignes sanitaires</li>
            </ul>
          </Col>
        </Row>
      </Col>
    </Container>
    </div>
  );
}

export default Tarifs;
