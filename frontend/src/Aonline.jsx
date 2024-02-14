import React from 'react'
import Ahome from './Ahome'
import Card from './card'

 const Aonline = () => {
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
        <Ahome/>
     
    <div style={{display:'flex',flexDirection:'column'}}>

<div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',maxWidth:1200}}>        
    <Card title={"THE ARM BALANCES COLLECTION"} img={"https://www.shutterstock.com/image-photo/young-woman-practicing-yoga-doing-600nw-1033265092.jpg"} path={"/yoga1"}/>
        <Card title={"THE HANDSTAND COURSE"} img={"https://youaligned.com/wp-content/uploads/2021/09/Handstand-Workshop-Feature-2-scaled.jpg"} path={"/yoga2"}/>
        <Card title={"THE ASHTANGA YOGA BUNDLE"} img={"https://www.yogateket.com/image/original/ashtanga_yoga.jpg"}/>
        </div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',maxWidth:1200}}>
   <Card title={"New Title"} img={"https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814051_1280.png"}/>
   <Card title={"New Title"} img={"https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814051_1280.png"}/>
   <Card title={"New Title"} img={"https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814051_1280.png"}/>
   </div>
    </div>
     
    </div>
  )
}
export default Aonline
