import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Table, Button } from 'semantic-ui-react'
import NavigBar from './NavigBar';
import "./achats.css";
import axios from 'axios'

const Achats = () => {

    const [billet, setBillet] = useState([])

  useEffect(() =>{
    getBillet()
  }, [])

  const getBillet = () =>{
      axios.get("http://localhost:3001/billets")
        .then(response => setBillet(response.data))
    }

  return (
    <div className="App">
      <NavigBar />
      <Container>
      <Col md='12'>
      <Row className = "tarif">
      <Col md='8'>

  <Table celled structured>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell textAlign='center' rowSpan='2' className="color">Catégories</Table.HeaderCell>
        <Table.HeaderCell textAlign='center' rowSpan='2' className="color">Tarifs</Table.HeaderCell>
        <Table.HeaderCell textAlign='center' rowSpan='2' className="color">Montant</Table.HeaderCell>
        <Table.HeaderCell textAlign='center' colSpan='3' className="color">Nombres</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {billet.map(e =>
    <>
        <Table.Row>
    <Table.Cell textAlign='center' verticalAlign= 'middle' rowSpan='3'>{e.category}</Table.Cell>
        <Table.Cell textAlign='center'>Adultes</Table.Cell>
        <Table.Cell textAlign='center'>{e.adults} €</Table.Cell>
        <Table.Cell textAlign='center'>
            <select>
                <option value="">Nombre de places</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell textAlign='center'>Enfants</Table.Cell>
        <Table.Cell textAlign='center'>{e.children} €</Table.Cell>
        <Table.Cell textAlign='center'><select>
                <option value="">Nombre de places</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell textAlign='center'>Tarif réduit</Table.Cell>
        <Table.Cell textAlign='center'>{e.reduit} €</Table.Cell>
        <Table.Cell textAlign='center'><select>
                <option value="">Nombre de places</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            </Table.Cell>
      </Table.Row>
      </>
    )}
    </Table.Body>
  </Table>
      </Col>
      <Col className= "recap" md="4">
      <h3 className="center recaptable">Récapitulatif</h3>
      <br />
      <table className="recaptable">
            <tbody>
                <tr height="25px">
                    <td className="para" >Adultes</td>
                    <td className="nombres" valign= 'middle' align='right'>20€</td>
                </tr>
                <tr height="25px">
                    <td className="para" >Enfants</td>
                    <td className="nombres" valign= 'middle' align='right'>20€</td>
                </tr>
                <tr height="25px">
                    <td className="para" >Tarifs</td>
                    <td className="nombres" valign= 'middle' align='right'>20€</td>
                </tr>
            </tbody>
            <tfoot>
                <tr height="25px">
                    <td className="para" >TOTAL :</td>
                    <td className="nombres" valign= 'middle' align='right'>20€</td>
                </tr>
                <tr height="25px">
                    <Button>Valider</Button>
                </tr>
            </tfoot>                                  
        </table>
      </Col>
    </Row>
    </Col>
    </Container>
    </div>
  );
}

export default Achats;
