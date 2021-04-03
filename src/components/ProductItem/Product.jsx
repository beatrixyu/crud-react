import React, {useState} from 'react'
import { Modal,Button, Card, Tabs, Form, Input } from 'antd';
import { EditOutlined, DeleteOutlined, CheckCircleOutlined, BarChartOutlined } from '@ant-design/icons';
import './Product.css'

const { Meta } = Card;
const { TabPane } = Tabs;
const { TextArea } = Input;

function callback(key) {
  console.log(key);
}

const Product =(props)=>{
    const { id, title, price, description ,category, image} = props;

    const [updatedProduct, setUpdatedProduct] = useState({
      id,
      title,
      price,
      description,
      category,
      image,
    });


    const handleChange = (e) => {
      const { name, value } = e.target;
      console.log(name, value)
      setUpdatedProduct({ ...updatedProduct, [name]: value });
    };

    const handleUpate = (e) => {
      const { name, value } = e.target;
      console.log(name, value)
      setUpdatedProduct({ ...updatedProduct, [name]: value });
      props.updateProduct(e, updatedProduct);
    };

     const handleSubmit = (e) => {
       props.updateProduct(e, updatedProduct);
      console.log(updatedProduct)
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
    /></div>
    <p>{title}</p>
    <p>{price}</p>
    <p>{category}</p>
    <p>{description}</p>
    </div>,
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

function showDeleteConfirm() {
  confirm({
    title: 'Are you sure delete this project?',
    icon: <DeleteOutlined key="delete" />,
    content: '',
    onOk() {
      props.removeProduct(id);
      console.log('delete');
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
             alt="product-image"
             src={image}
      />
    }
    actions={[
      <Button onClick={showConfirm}><BarChartOutlined /></Button>,
      <Button onClick={handleSubmit}><CheckCircleOutlined/></Button>,
      <Button onClick={showDeleteConfirm}><DeleteOutlined key="delete" /></Button>,
    ]}
  >
    {/* <Meta
      title={title}
    /> */}
    <div style={{display:'flex'}} className="tabInputTitle">
      <Input 
         type="text" 
         defaultValue={title}  
         name="title" 
         onChange={handleChange} 
         allowClear={true} 
         suffix={<CheckCircleOutlined 
         onClick={handleSubmit}/>} 
         prefix={<EditOutlined/>} 
         onPressEnter={handleSubmit} 
         bordered={false} 
         placeholder="press CheckCircle or EnterKey to save" 
         style={{color:'black', fontSize:"16px"}}></Input>
     </div>
      <Tabs 
          defaultActiveKey="4" 
          onChange={callback}>
        <TabPane 
            tab="Item Nr." 
            key="1" 
            className="tabInput">
            # {id}
        </TabPane>
        <TabPane 
            tab="Price" 
            key="2" 
            className="tabInput">
          <Input 
              type="number" 
              defaultValue={price} 
              name="price" 
              prefix="€" 
              suffix="EUR" 
              onChange={handleChange} 
              allowClear={true} 
              onPressEnter={handleSubmit} 
              prefix={<EditOutlined/>} 
              placeholder="Press CheckCircle or EnterKey to save" style={{fontSize:"16px", width:"50%"}}/>
           </TabPane >
      <TabPane 
          tab="category" 
          key="3" 
          className="tabInput">
          <Input 
              type="string" 
              defaultValue={category} 
              name="category" 
              onChange={handleChange} 
              bordered={false} 
              style={{color:'black', width:"80%"}} 
              allowClear={true} 
              prefix={<EditOutlined/>} 
              onPressEnter={handleSubmit} 
              placeholder="Press CheckCircle or EnterKey to save">
            </Input>
      </TabPane>
      <TabPane 
          tab="description" 
          key="4" 
          style={{ height: 50}} 
          className="tabInput">
          <TextArea 
              type="string" 
              defaultValue={description} 
              name="description" 
              onChange={handleChange} 
              bordered={false} 
              allowClear={true} 
              prefix={<EditOutlined/>} 
              onPressEnter={handleSubmit} 
              style={{color:'black', width:"80%"}}
              placeholder="Press CheckCircle or EnterKey to save"  autoSize={{ minRows: 1, maxRows: 2 }}>
          </TextArea>
        </TabPane>
    </Tabs>
    <div >
   </div>
  </Card>
</div>
    )
}

export default Product