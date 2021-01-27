import React, { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  Image,
  Card,
  ListGroup,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import { Rating } from "../components/Rating";
import { product } from "../products";
import axios from "axios"

const ProductScreens = ({ match }) => {
  const product, setProduct = useState({})

  useEffect(()  => {
    const fetchProducts = async => {
    const { data } = await axios.get(`/api/prodicts/${match.params.id}`)
    setProducts(data)
    }
    fetchProducts()
  }, [])
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: ${product.description}</ListGroup.Item>
            <ListGroup.Item>
              {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                className="btn-block"
                type="button"
                disabled={product.countInStock === 0}
              >
                Add To Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreens;
