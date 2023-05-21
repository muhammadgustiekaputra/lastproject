import React, { useState } from 'react';
import { apiFood } from '../api/apiFood';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';


function CreateNewFood() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [ingredients, setIngredients] = useState([]);

const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFood = {
      name: name,
      description: description,
      imageUrl: imageUrl,
      ingredients: [ingredients],
    };

    try {
      const response = await apiFood.post('/create-food', newFood);
      console.log('Food created:', response.data);
      // Lakukan sesuatu setelah food berhasil dibuat
      navigate("/")
    } catch (error) {
      console.error('Error creating food:', error);
      // Lakukan sesuatu jika terjadi kesalahan saat membuat food
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.1)',
              padding: '20px',
              borderRadius: '5px',
            }}
          >
            <h2>Create New Food</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="imageUrl">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter image URL"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="ingredients">
                <Form.Label>Ingredients</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter ingredients"
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Create Food
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateNewFood;
