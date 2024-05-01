import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Autocomplete, { usePlacesWidget } from "react-google-autocomplete";

export default function SolicitarRegionBtn() {

  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Solicitar venta de enxilados en tu región</Accordion.Header>
          <Accordion.Body>
            <p>Ingresa tu región:</p>
            <Autocomplete
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
              onPlaceSelected={(place) => {
                console.log(place);
              }}
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

