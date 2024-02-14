// import React from 'react';
// import { Link } from 'react-router-dom';


// const Card = () => {
    
//   return (
//     <div className="card mb-3" >
//       <img src="https://www.shutterstock.com/image-photo/young-woman-practicing-yoga-doing-600nw-1033265092.jpg" className="card-img-top" alt="Card" />
//       <div className="card-body">
//         <h5 className="card-title">THE ARM BALANCES COLLECTION</h5>
//         <p className="card-text">
//         MBA is a postgraduate degree in Business and Management. Core specializations for an MBA include finance, sales, marketing, human resources, operations management, etc.</p>
//         <Link to="/mba">
//               Learn More
//               </Link>
//       </div>
//     </div>
//   );
// }
// const Card2 = () => {
//   return (
//     <div className="card mb-3">
//       <img src="https://youaligned.com/wp-content/uploads/2021/09/Handstand-Workshop-Feature-2-scaled.jpg" className="card-img-top" alt="Card" />
//       <div className="card-body">
//         <h5 className="card-title">THE HANDSTAND COURSE</h5>
//         <p className="card-text">LLB or Bachelor of Legislative Law, is an undergraduate degree programme in Law, of three-year or five-year duration that can be pursued after graduation and 10+2 respectively.LLB Syllabus include Labor Law, Family Law, Crime, Women & Law, Law of Evidence, Jurisprudence. </p>
//         <Link to="/llb">
//               Learn More
//               </Link>
//       </div>
//     </div>
//   );
// }
// const Card3 = () => {
//   return (
//     <div className="card mb-3">
//       <img src="https://www.yogateket.com/image/original/ashtanga_yoga.jpg" className="card-img-top" alt="Card" />
//       <div className="card-body">
//         <h5 className="card-title">THE ASHTANGA YOGA BUNDLE</h5>
//         <p className="card-text">It has a huge amount of growth opportunity and has good ROI when an individual makes a career in the domain of Computer Science via MCA. MCA stands for Masters in Computer Application.It has a huge amount of growth opportunity and has good ROI when an individual makes a career in domain of MCA. </p>
//         <Link to="/mca">
//               Learn More
//               </Link>
//       </div>
//     </div>
//   );
// }


// const Online = () => {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-lg-4 col-md-6">
//           <Card />
//         </div>
//         <div className="col-lg-4 col-md-6">
//           <Card2 />
//         </div>
//         <div className="col-lg-4 col-md-6">
//           <Card3 />
//         </div>
//       </div>
//     </div>
    
//   );
// }

// export default Online;


import React from 'react'
import Card from './card'
import Nav from './Nav'

export default function online() {
  return (
    <>
    <Nav/>
    <br></br>
    <div style={{textAlign:'center'}}>
    <h1>PRACTICE YOGA ONLINE...</h1>
    <p>CLASS BUNDLES AND FULL ONLINE YOGA TEACHER TRAINING PROGRAMS. GET CERTIFIED RIGHT FROM HOME!</p>
    </div>
    <div style={{display:'flex',flexDirection:'row',padding:'20px'}}>
        <Card title={"THE ARM BALANCES COLLECTION"} img={"https://www.shutterstock.com/image-photo/young-woman-practicing-yoga-doing-600nw-1033265092.jpg"} path={"/yoga1"}/>
        <Card title={"THE HANDSTAND COURSE"} img={"https://youaligned.com/wp-content/uploads/2021/09/Handstand-Workshop-Feature-2-scaled.jpg"} path={"/yoga2"}/>
        <Card title={"THE ASHTANGA YOGA BUNDLE"} img={"https://www.yogateket.com/image/original/ashtanga_yoga.jpg"}/>
    </div>
    </>
  )
}
