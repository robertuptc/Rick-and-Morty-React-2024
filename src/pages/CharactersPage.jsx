import ApiCallButton from "../components/ApiCallButton";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function CharactersPage() {
    
    const [data, setData] = useState([])
    
    const ApiUrlOne = 'https://rickandmortyapi.com/api/character'
    const ApiUrlTwo = (page) => `https://rickandmortyapi.com/api/character?page=${page}`
    const queryType = 'Characters'


    return (
        <div className="container">
            <div>
                <h2>Characters</h2>
            </div>
            <div className="container">
                {
                    data.length == 0 ?
                    <ApiCallButton ApiUrlOne={ApiUrlOne} ApiUrlTwo={ApiUrlTwo} setData={setData} queryType={queryType}/> :
                    <Container fluid>
                        <Row xs={1} md={2}>
                            {
                                data.map((character) => (
                                    <Card style={{ width: '10rem',  margin:"10px"}} key={character.id} >
                                        <Card.Img variant="top" src={character.image} key={character.id}/>
                                            <Card.Body key={character.id}>
                                                <Card.Title key={character.id}>{character.name}</Card.Title>
                                                <Card.Text key={character.id}>
                                                {character.name} is {character.species}
                                                </Card.Text>
                                                {/* <Button variant="primary">Go somewhere</Button> */}
                                        </Card.Body>    
                                    </Card>
                                ))
                            }
                        </Row>
                    </Container>
                }

            </div>
        </div>
    )
}

export default CharactersPage;