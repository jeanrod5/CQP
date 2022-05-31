import React, { Component } from 'react';

//react bootstrap components
import { CardDeck, Row, Card, Container, Col } from "react-bootstrap/";

import './App.css';


class App extends Component {

   constructor(props) {
    super(props);

    this.state = {
        items: []
    };
}

componentDidMount() {
    fetch(
"https://systems-api.herokuapp.com/systems_list")
        .then((response) => response.json())
        //.then(res => console.log(res))
        .then((response) => {
            this.setState({
                items: response
            });
        })
}

render() {
		return (
				<Container fluid>
					<Row>
            <Col>
              <CardDeck class="row row-cols-4">
                {this.state.items.map((postitems) => {
                  //console.log(postitems);
                  return (
                    <Card key={postitems.id}>
                      <Card.Body grid-gap="20px">
                      <Card.Img src={`https://robohash.org/${postitems.id}?set=set2&size=180x180`}/>
                        <Card.Title>
                          {postitems.system_name}
                        </Card.Title>
                        <Card.Subtitle>
                          {postitems.quality_status}
                        </Card.Subtitle>
                        <Card.Text>
                          {'Capabilities: ' + postitems.capabilities}
                        </Card.Text>
                        <Card.Text>
                          {'Average Availability Speed: ' + postitems.avg_availablity_speed}
                        </Card.Text>
                        <Card.Text>
                          {'Booking Failure Rate: ' + postitems.booking_failure_rate}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })}
              </CardDeck>
            </Col>
					</Row>
				</Container>
		);
}
}

export default App;