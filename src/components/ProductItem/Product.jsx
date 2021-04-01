import React, {useState} from 'react'
import { Modal,Button, Card, Tabs, Form, Input } from 'antd';
import { EditOutlined, DeleteOutlined, SettingOutlined, BarChartOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Product =(props)=>{
    const { id, title, description, category, price, image, updateProduct } = props;

    const [updatedProduct, setUpdatedProduct] = useState({
      id,
      title,
      description,
      category,
      price,
      image,
    });


    const handleUpdate = (e) => {
      const { name, value } = e.target;
      setUpdatedProduct({ ...updatedProduct, [name]: value });
    };

    const handleSubmit = (e) => {
      updateProduct(e, updatedProduct);
      alert("The Product was updated with success!");
    };

    const { confirm } = Modal;

function showConfirm() {
  confirm({
    title: 'Comfirm your product',
    content:
    <div>
      <div style={{display:'flex',justifyContent:'center',}}>
      <img
     style={{ height: 200,width:'auto', maxWidth:300, padding:"2%" }}
      src={image}
    />
      </div>
   
    <p>{title}</p>
    <p>{price}</p>

    <div>{description}</div>
</div>
    ,
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

function showPromiseConfirm() {
  confirm({
    title: 'Do you want to delete these items?',
    icon: <EditOutlined />,
    content: 
    <Form onSubmit={handleSubmit}>
      <Form.Item lable="title">
      <Input type="text" defaultValue={title} name="title" onChange={handleUpdate}></Input>
      </Form.Item>
      <Form.Item lable="price">
      <Input type="number" defaultValue={price} name="price" onChange={handleUpdate}></Input>
      </Form.Item>
      <Form.Item lable="description">
      <Input type="string" defaultValue={description} name="description" onChange={handleUpdate}></Input>
      </Form.Item>
      <Form.Item lable="category">
      <Input type="string" defaultValue={category} name="category" onChange={handleUpdate}></Input>
      </Form.Item>
    </Form>
    ,
    onOk() {
       return new Promise((resolve, reject) => {
         setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
       }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {},
  });
}

function showDeleteConfirm() {
  confirm({
    title: 'Are you sure delete this project?',
    icon: <DeleteOutlined key="delete" />,
    content: '',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      props.removeProduct(id);
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}


    return(
       
       <div style={{ width: "30%",  display:'flex', justifyContent:'center',margin:"1%", }}>
    <Card 
    cover={
      <img
       style={{ height: 100,width:'auto', marginLeft: "35%", padding:"2%" }}
        alt="product"
        src={image}
      />
    }
    actions={[
      <Button onClick={showConfirm}><BarChartOutlined /></Button>,
      <Button onClick={showPromiseConfirm}><EditOutlined /></Button>,
      <Button onClick={showDeleteConfirm}><DeleteOutlined key="delete" /></Button>,
    ]}
  >
    <Meta
      title={title}
    />
    <Tabs defaultActiveKey="4" onChange={callback}>
    <TabPane tab="Id" key="1">
    # {id}
        </TabPane>
    <TabPane tab="🤑 Price" key="2">
    {price}
    </TabPane>
    <TabPane tab="category" key="3">
    {category}   
     </TabPane>
     <TabPane tab="description" key="4"style={{ height: 100}}>
    {description}   
     </TabPane>
  </Tabs>
    <div >
       
      
   </div>
  </Card>


</div>

    )
}

export default Product