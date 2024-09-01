import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GET_ALBUMS } from '../../gpl/queries';
import { CREATE_ALBUM } from '../../gpl/mutations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

const AlbumForm = () => {
  const [name, setName] = useState('');
  const [year, setYear] = useState(2000);
  const [createAlbum, { loading, error }] = useMutation(CREATE_ALBUM, {
    refetchQueries: [{ query: GET_ALBUMS }],
    awaitRefetchQueries: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createAlbum({
        variables: {
          input: {
            name,
            year: parseInt(year)
          }
        }
      });

      setName('');
      setYear(2000);
    } catch (error) {
      console.error('Error creating album: ', error);
    }
  };

  if (loading) return <Alert key={'primary'} variant={'primary'} dismissible>Creating...</Alert>
  if (error) return <Alert key={'error'} variant={'error'} dismissible>Oops...:{error.message}</Alert>

  return (
    <Row xs={1} md={4} className="g-4 mb-4 mt-1">
      <Col>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formText" className="mb-2">
            <Form.Label>Album name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter album name"
              value={name || ''}
              onChange={(e) => { setName(e.target.value); }}
            />
          </Form.Group>
          <Form.Group controlId="formRange" className="mb-2">
            <Form.Label>Year</Form.Label>
            <Form.Range
              min="1900"
              max="2100"
              step="1"
              value={year}
              onChange={(e) => { setYear(e.target.value); }}
            />
            <Form.Text>Selected Value: {year}</Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default AlbumForm;