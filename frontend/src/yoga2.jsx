import React from 'react'
import Home from './home'
import Nav from './Nav'

const footerStyle = {
    backgroundColor: 'grey',
    color: '#fff',
    padding: '2rem 0',
    textAlign: 'center',
  };

 const Yoga2 = () => {
  return (
    <> 
    <div>
        <Nav/>
    </div>
    <div style={{textAlign:'center'}}>
        <h1>ABOUT THE TRAINING...</h1>
        <h1>THE HANDSTAND COURSE</h1>
    </div>
    <br></br>
    <h1>Positions</h1>
    <div style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{ textAlign: 'left', marginRight: '20px',paddingLeft:'20px'}}>
    <h1>1.One Arm Handstand</h1>
    <p>Train for the real deal and hold it as long as you can and want. Of course, you’ll need to master a basic handstand first, but you’ll be already very near once you get there. Just train hard and smart with the right progressions. </p>
  </div>
  <div>
    <img 
      src='https://themovementathlete.com/wp-content/uploads/One-Arm-handstand.jpg'
      alt='Yoga'
      style={{  width:'600px', height:'300px' }}
    />
  </div>
</div>

<br></br>
    <div style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{ textAlign: 'left', marginRight: '20px',paddingLeft:'20px'}}>
    <h1>2.Forearm Handstand</h1>
    <p>In your forearm handstand, you’re base is your forearm. Mechanics is very much similar to handstand but you’ll feel your shoulder bearing much of the load. You’ll also control your balance using your hands but it’s going to be easier since having a larger base.</p>
  </div>
  <div>
    <img 
      src='https://www.ekhartyoga.com/media/image/articles/Forearm-balance.jpg'
      alt='Yoga'
      style={{  width:'600px', height:'300px' }}
    />
  </div>
</div>
 
<br></br>
    <div style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{ textAlign: 'left', marginRight: '20px',paddingLeft:'20px'}}>
    <h1>3.Mexican Handstand</h1>
    <p>Mexican handstand, also known as a hollow back, is literally an intentional curved body handstand.

You’ll curve to the point where your feet is way past your head and your head’s already looking to the sky.

It’s such as difficult skill with higher strength, mobility and skill level requirement compared to the regular handstand.

</p>
  </div>
  <div>
    <img 
      src='https://cdn-az.allevents.in/events7/banners/e5fc18db68a4aaf7845c8f94639747f096b4124a8017a0edf038cc5c9bb2f2b2-rimg-w960-h634-gmir.jpg?v=1686639574'
      alt='Yoga'
      style={{  width:'600px', height:'300px'}}
    />
  </div>
</div>

<br></br>
    <div style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{ textAlign: 'left', marginRight: '20px',paddingLeft:'20px'}}>
    <h1>4.Handstand Pushup</h1>
    <p>Already an excellent display of strength, much level of skill is also required to do the move. Working on handstand pushups will open more doors for other advanced hand balancing skills.

Be sure to do the proper progression and on a softer surface. The last thing you’d want is plummeting face first on concrete.</p>
  </div>
  <div>
    <img 
      src='https://barbend.com/wp-content/uploads/2018/09/shutterstock_1474350980.jpg'
      alt='Yoga'
      style={{  width:'600px', height:'300px'}}
    />
  </div>
</div>

<br></br>
    <div style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{ textAlign: 'left', marginRight: '20px',paddingLeft:'20px'}}>
    <h1>5.Press Handstand</h1>
    <p>Press to handstand is a type of handstand entrance. It makes use of hamstring and lower back mobility to get to handstand. 

From a standing pike position, you’ll lean forward to stack your hips over your shoulder. Lean more to inevitably lift your legs off the ground. With the said mobility and core engagement, lift your legs completely straight into a handstand.</p>
  </div>
  <div>
    <img 
      src='https://static1.squarespace.com/static/5d31ed671abe780001b2964d/t/5d6eec80d4a4940001d203e5/1567550612081/14_Handstand%28AdhoMukhaVrkasana%29-10_header.jpg?format=1500w'
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
export default Yoga2
