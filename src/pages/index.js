import "./slide.css";
const Home = () => {
    return (    
      <div>

          <section class="containers">
            <div class="slider">
              <div class="slideshow">
                  <img id="slide1" src="https://www.getmoneythailand.com/images/pictures/rov.jpg"></img>
                  <img id="slide2" src="https://www.techoffside.com/wp-content/uploads/2019/07/RoV-New-Era-9_Logo-1200x675.jpg"></img>
                  <img id="slide3" src="https://s.isanook.com/ga/0/ud/222/1111449/rov_thumnail_1.jpg"></img>
              </div>
              <div class="slidenav">
                <a href="#slide1"></a>
                <a href="#slide2"></a>
                <a href="#slide3"></a>
              </div>
            </div>
          </section>

      </div>
    );
  };
  
  export default Home;
