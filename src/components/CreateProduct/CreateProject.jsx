import React, {useState} from 'react'
import { Modal, Button, Form, Input } from 'antd';
import 'antd/dist/antd.css';

const CreateProduct = (props) => {
const [isModalVisible, setIsModalVisible] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (e) => {
    e.preventDefault();
    setIsModalVisible(false);
    props.createProduct(newProduct);
    console.log(newProduct)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
    se);
      <Button type="primary" onClick={showModal}>
      👨🏻‍🏭 Would you like to add a product?
      </Button>
      <Modal 
      title="Create a product" 
      visible={isModalVisible} 
      onOk={handleOk} 
      onCancel={handleCancel}
      >
      <Form>
          <Input
            size="sm"
            type="text"
            name="title"
            placeholder="Title"
            value={newProduct.title}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <Input
            size="sm"
            type="text"
            name="description"
            placeholder="Description"
            value={newProduct.description}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <Input
            size="sm"
            type="text"
            name="category"
            placeholder="Category"
            value={newProduct.category}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <Input
            size="sm"
            type="text"
            name="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <Input
            size="sm"
            type="text"
            name="image"
            placeholder="Image Link"
            value={newProduct.image}
            onChange={handleChange}
            required
          />
        </Form>    
 
        </Modal> 
    </>
  );
};




export default CreateProduct
