import React from 'react'
import Home from './home'
import Nav from './Nav'

const footerStyle = {
    backgroundColor: 'grey',
    color: '#fff',
    padding: '2rem 0',
    textAlign: 'center',
  };

 const Yoga = () => {
  return (
    <> 
    <div>
        <Nav/>
    </div>
    <div style={{textAlign:'center'}}>
        <h1>ABOUT THE TRAINING...</h1>
        <h1>THE ARM BALANCES COLLECTION</h1>
    </div>
    <br></br>
    <h1>Positions</h1>
    <div style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{ textAlign: 'left', marginRight: '20px',paddingLeft:'20px'}}>
    <h1>1.Crow Pose (Bakasana)</h1>
    <p>Most people start with Crow Pose (Bakasana). Crow offers an excellent opportunity to learn where your center of gravity is and how to use that knowledge to keep yourself from tipping over.

Practitioners who are new to arm balances often underestimate how far forward you need to lean in order to get your feet off the ground.

Other common issues in Crow are putting the knees to the outside of the upper arms instead of using the arms as a shelf. Make sure to also start with your butt high. If it's too low, it weighs you down. </p>
  </div>
  <div>
    <img 
      src='https://cdn.yogajournal.com/wp-content/uploads/2021/12/Crow-Crane-Pose_Andrew-Clark_2400x1350.jpeg'
      alt='Yoga'
      style={{  width:'600px', height:'300px' }}
    />
  </div>
</div>

<br></br>
    <div style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{ textAlign: 'left', marginRight: '20px',paddingLeft:'20px'}}>
    <h1>2.Side Crow (Parsva Bakasana)</h1>
    <p>Once you feel comfortable in Crow, the natural next step is to work on Side Crow. There are actually two versions of this pose. People usually first learn the pose with the hips on one arm and the knees on the other.

This is a pretty stable position that may even feel easier than the regular crow. In the more advanced version pictured here, the legs have moved over to just one arm, leaving the other one free. You can straighten both legs out to the side for an extra flourish.</p>
  </div>
  <div>
    <img 
      src='https://cdn.yogajournal.com/wp-content/uploads/2021/12/Side-Crow-Mod-1_Andrew-Clark-scaled.jpg'
      alt='Yoga'
      style={{  width:'600px', height:'300px' }}
    />
  </div>
</div>
 
<br></br>
    <div style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{ textAlign: 'left', marginRight: '20px',paddingLeft:'20px'}}>
    <h1>3.Eka Pada Koundinyasana I</h1>
    <p>To do Eka Pada Koundinyasana I (which translates to, but is never called, one-legged pose dedicated to the sage Koundin) you have to begin in Side Crow. From there, extend the top leg straight back and the bottom leg that is resting on the upper arm straight out.

Focus on keeping the arms bent at a 90-degree angle and feet flexed while extending out through the heels. You should feel like you're lifting up, not sinking down.

</p>
  </div>
  <div>
    <img 
      src='https://images.squarespace-cdn.com/content/v1/5d31ed671abe780001b2964d/fcf47861-07a7-4a31-8f04-7efaad9d3d01/image-asset.jpeg'
      alt='Yoga'
      style={{  width:'600px', height:'300px'}}
    />
  </div>
</div>

<br></br>
    <div style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{ textAlign: 'left', marginRight: '20px',paddingLeft:'20px'}}>
    <h1>4.Elephant's Trunk Pose (Eka Hasta Bhujasana)</h1>
    <p>Backtracking to the backpacking idea for a minute, Elephant's Trunk Pose is the place to get comfortable with this position. It really is a lot like throwing your leg over your shoulder, or realistically as close to your shoulder as possible.

It's also important that your leg doesn't just hang out there but actively hugs your arm. Then extend and strongly engage your other leg and press into your palms to lift yourself off the floor. You can keep the feet flexed, pointed, or alternate between both.</p>
  </div>
  <div>
    <img 
      src='https://images.ctfassets.net/p0sybd6jir6r/3IfjFHn98NwPvNyEfaoFkR/be1c14243ca65ba8a77dbc7952aade89/AID_0583-4-79766a1b7e01e5876466f2488b0e86c2.JPG'
      alt='Yoga'
      style={{  width:'600px', height:'300px'}}
    />
  </div>
</div>

<br></br>
    <div style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{ textAlign: 'left', marginRight: '20px',paddingLeft:'20px'}}>
    <h1>5.Arm Pressure Pose (Bhujapidasana)</h1>
    <p>Continuing with our backpack imagery, in Bhujapidasana you're wearing your legs on both shoulders. Hooking the ankles in front helps make a tidy little package, which is easier to lift off the ground. </p>
  </div>
  <div>
    <img 
      src='https://cdn.yogajournal.com/wp-content/uploads/2008/05/Shoulder-Pressing_Andrew-Clark-scaled.jpg'
      alt='Yoga'
      style={{ width:'600px', height:'300px' }}
    />
  </div>
</div>
<br></br>
 
<footer style={footerStyle}>
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Your Company is dedicated to providing innovative solutions...</p>
        </div>
        <div className="footer-section">
      
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>




  
    </>
  )
}
export default Yoga
