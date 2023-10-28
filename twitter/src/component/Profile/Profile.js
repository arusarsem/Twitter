import React from 'react'
import '/Users/aruzhan/Documents/Twitter/twitter/src/component/Profile/Profile.css';
function Profile() {
  return (
    <section> 
    <div className="container">
      <div className='card'>
        <div className="header">
          <div className='hamburger-menu'>
            <div className='center'></div>
          </div>
          <a href="#" className='mail'>
            <i className='far fa-envelope'></i>
          </a>
          <div className="main">
            <div className="image">
              <div className="hover">
                <i className="fas fa-camera fa-2x"></i>
              </div>
              </div>
              <h3 className="name ">Aruzhan</h3>
              <h3 className="sub_name">@aru_sarsem</h3>
            </div>
            </div>
            <div class="content">
                <div class="left">
                    <div class="about-container">
                        <h3 class="title">About</h3>
                        <p class="text">Hello world</p>
                    </div>
                    <div class="icons-container">
                        <a href="#" class="icon">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a href="#" class="icon">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="icon">
                            <i class="fab fa-google-plus-g"></i>
                        </a>

                    </div>
                    <div class="buttons-wrap">
                        <div class="follow-wrap">
                            <a href="#" class="follow">Follow</a>
                        </div>
                        <div class="share-wrap">
                            <a href="#" class="share">Share</a>
                        </div>
                    </div>
                </div>


         

        </div>

      </div>
    </div>
    </section>
  )
}

export default Profile