import logo from '../../logo.svg';
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALBUMS } from '../../gpl/queries';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

const AlbumList = () => {
  const { loading, error, data } = useQuery(GET_ALBUMS);

  if (loading) return <Alert key={'primary'} variant={'primary'} dismissible>Loading...</Alert>
  if (error) return <Alert key={'error'} variant={'error'} dismissible>Oops...:{error.message}</Alert>

  return (
    <Row xs={1} md={4} className="g-4">
      {data.albums.map(album => (
        <Col key={album.id}>
          <Card>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>{album.name}</Card.Title>
              <Card.Text>
                {album.year}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default AlbumList;