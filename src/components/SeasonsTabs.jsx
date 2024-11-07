import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SeasonsTabs({ data }) {

    const episodesBySeason = data.reduce((acc, episode) => {
        const season = episode.episode.slice(0, 3)
        if (!acc[season]) {
            acc[season] = [];  // Initialize array if it doesn't exist
        }
        acc[season].push(episode);
        return acc
    }, {})

    episodesBySeason
    return (
        <>
            <div>
                <Tabs defaultActiveKey="seasons" id="seasons-tab" className="mb-3">
                    {
                        Object.keys(episodesBySeason).map(seasonKey => (
                            <Tab eventKey={seasonKey} title={seasonKey} key={seasonKey}>
                            {
                            episodesBySeason[seasonKey].map((episode) => (
                                    <ListGroup horizontal key={episode.id} className="my-2">
                                <Container>
                                    <Row>
                                        <Col xs={2}>
                                            <ListGroup.Item>{episode.episode.slice(3)}</ListGroup.Item>
                                        </Col>
                                        <Col>
                                            <ListGroup.Item>{episode.name}</ListGroup.Item>
                                        </Col>
                                        <Col>
                                            <ListGroup.Item>{episode.air_date}</ListGroup.Item>
                                        </Col>
                                    </Row>
                                </Container>
                                    </ListGroup>
                                ))
                            }
                            </Tab>
                        ))
                    }
                </Tabs>
            </div>
        </>
    );
}

export default SeasonsTabs;
