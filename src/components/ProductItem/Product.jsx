import React, {useState} from 'react'
import { AutoComplete, Card, Tabs } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const Product =( props )=>{
    const { id, title, description, category, price, image, editProduct } = props;

    const [editedProduct, setEditedProduct] = useState({
        id: id,
        title: title,
        description: description,
        category: category,
        price: price,
        image: image,
      });


    return(
       
       <div style={{ width: "30%",  display:'flex', justifyContent:'center',margin:"1%", }}>
    <Card 
    cover={
      <img
       style={{ height: 150,width:'auto', marginLeft: "35%", padding:"2%" }}
        alt="example"
        src={image}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
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
     <TabPane tab="description" key="4"style={{ height: 150}}>
    {description}   
     </TabPane>
  </Tabs>

  </Card>
  </div>
    )
}

export default Product