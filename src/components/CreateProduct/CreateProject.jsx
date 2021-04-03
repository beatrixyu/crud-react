import React, {useState} from 'react'
import { Modal, Button, Form, Input } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './CreateProject.css'

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
    <div className="createContainer" 
    style={{fontSize:"25px", fontWeight:"bolder", display:"flex", alignItems:"center", justifyContent:"center"}}
    >
    <div style={{color:"black",textShadow:'3px 3px white'}}> More Product? Add here! <br/>
    <PlusSquareOutlined onClick={showModal} style={{color:"black",background:"white", margin:'2px', fontSize:"60px"}}/>
    </div>
    </div>
      <Modal 
      title="Create a product" 
      visible={isModalVisible} 
      onOk={handleOk} 
      onCancel={handleCancel}
      >
      <Form>
        <Form.Item rules={[{ required: true }]}>
          <Input
            size="sm"
            type="text"
            name="title"
            placeholder="Title"
            value={newProduct.title}
            onChange={handleChange}
            rules={[{ required: true }]}
          />
        </Form.Item>        
        <Form.Item rules={[{ required: true }]}>
          <Input
            size="sm"
            type="text"
            name="description"
            placeholder="Description"
            value={newProduct.description}
            onChange={handleChange}
            rules={[{ required: true }]}
          />
        </Form.Item>  
        <Form.Item rules={[{ required: true }]}>
          <Input
            size="sm"
            type="text"
            name="category"
            placeholder="Category"
            value={newProduct.category}
            onChange={handleChange}
            rules={[{ required: true }]}
          />
        </Form.Item>  
        <Form.Item rules={[{ required: true }]}>
          <Input
            size="sm"
            type="text"
            name="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleChange}
            rules={[{ required: true }]}
          />
        </Form.Item>  
        <Form.Item rules={[{ required: true }]}>
          <Input
            size="sm"
            type="text"
            name="image"
            placeholder="Image Link"
            value={newProduct.image}
            onChange={handleChange}
            rules={[{ required: true }]}
          />
        </Form.Item>  
      </Form>    
    </Modal> 
    </>
  );
};




export default CreateProduct
