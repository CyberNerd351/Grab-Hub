import React from "react";

const MyFooter=()=>{
    return(
        
        <div className="row text-white justify-content-center mt-2 bg-muted ">


          <div className="col-md-4">
            <h3>About Us</h3>
            <p>At Grab Hub, we’re dedicated to bringing you delicious, fresh meals with just a few clicks. Whether you're craving comfort food or something new, our platform connects you to a wide variety of local restaurants and kitchens, delivering great food straight to your door. With convenience, quality, and customer satisfaction at the heart of what we do, Grab Hub is here to satisfy your hunger, anytime, anywhere.</p>

          </div>

                  <div className="col-md-4">
                  <h3 class="text-white text-center card-header">Contact Us</h3>
                    <form action="send_email.php" method="POST">
                      <label for="name">Your Name:</label><br />
                      <input type="text" id="name" name="name" required placeholder="Enter your name"/>
                      <br />
                      <br />
                      <label for="email">Your Email:</label><br />
                      <input type="email" id="email" name="email" required placeholder="Enter your name"/>
                      <br />
                      <br />
                      <label for="message">Your Message:</label><br />
                      <textarea id="message" name="message" rows="4" cols="32" required placeholder="Leave a comment"></textarea>
                      <br />
                      <br />
                      <button type="submit" value="Send Message" class="btn btn-danger"><a href="mailto:peternyagaka5@gmail.com">Send Message</a></button>
                      <br />
                      <br />
                    </form>
                  
                  </div>

                  <div className="col-md-4">
                  <h3 class="text-white text-center card-header">Stay Connected</h3>
                  <br />
                  <img src="/images/fb.png" alt="" />
                  <img src="/images/in.png" alt="" />
                  <img src="/images/x.png" alt="" />
                  <br />
                  <br />

                    <h5>Visit us at:</h5>
                    <b>
                        Haven court 2nd Floor Waiyaki Way,Opposite St Marks Church Nairobi, Kenya
                        <br />
                      <a href="mailto:peternyagaka5@gmail.com">peternyagaka5@gmail.com</a>
                      Phone: 0117067894
                    </b>

                    <p class="p-1">Developed by Peter.&copy;2025.All rights reserved</p>
    
                  </div>

        </div>
        

    )
}

export default MyFooter;