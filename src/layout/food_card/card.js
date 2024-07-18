import React from "react";
import Cardbody from "./cardbody";
import './card.css' 

 function Card(){
    return(
        <div  className="food_card m-2 bg-secondary p-2 rounded-5">
        <h1 className="text-center text-warning py-4  px-3 "> It s time to Eat <img  className="rounded-5  " src="https://i.pinimg.com/originals/db/7c/66/db7c66cd280f7e2091fb5a233355d152.jpg" height={100} alt="image"></img></h1>
        <div className="container ">
          <div className="row"> 


                  <div className="col-sm-3 ">
                    <Cardbody price="$15" title="Burger" image="https://th.bing.com/th/id/OIP.UpbCKspvmEdSN2qbhYaBLgAAAA?pid=ImgDet&w=198&h=198&c=7&dpr=1.6"/>
                  
                  </div>

                  <div className="col-sm-3 ">
                    <Cardbody price="$25" title="Biryani" image="https://th.bing.com/th/id/OIP.7_TsoWgItSuSokui1NWFhAHaIw?pid=ImgDet&w=198&h=234&c=7&dpr=1.6"/>
                  </div>

                  <div className="col-sm-3 ">
                    <Cardbody price="$35" title="Dum-biryani" image="https://th.bing.com/th/id/OIP.MExeatdAerdN9G4Jj-MyFQHaHa?pid=ImgDet&w=198&h=198&c=7&dpr=1.6"/>
                  </div>

                  <div className="col-sm-3 ">
                    <Cardbody price="$55" title="Chicken-peice" image="https://th.bing.com/th/id/OIP.il3iWUJzE8U0sNhLDSqfQgHaEp?w=269&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7"/>
                  </div>



        </div>
        </div>
        </div>
    )
 }
 export default Card;