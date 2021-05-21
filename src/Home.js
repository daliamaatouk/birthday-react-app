import { useState, useEffect } from 'react';

const Home = () => {
    const [deletear, setdeletear] = useState(true);




    const handleClick = () => {
        setdeletear(false);

      }
    
    return (
      <div className="home">
        <p>Hi</p>
      <div className="container">
      <h3>5 birthdays today</h3>
      { deletear && <article className="person">
          <img src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg" alt="Bertie Yates" />
          <div><h4>Bertie Yates</h4>
          <p>29 years</p>
          </div>
          </article>}
          { deletear && <article class="person"><img src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg" alt="Hester Hogan" /><div><h4>Hester Hogan</h4><p>32 years</p></div></article>}
          { deletear &&<article class="person"><img src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg" alt="Larry Little" /><div><h4>Larry Little</h4><p>36 years</p></div></article>}
          { deletear && <article class="person"><img src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg" alt="Sean Walsh" /><div><h4>Sean Walsh</h4><p>34 years</p></div></article>}
          { deletear && <article class="person"><img src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg" alt="Lola Gardner" /><div><h4>Lola Gardner</h4><p>29 years</p></div></article>}
          <button onClick={handleClick} >Clear All</button>

        </div>  


</div>
    );
  }
   
  export default Home;