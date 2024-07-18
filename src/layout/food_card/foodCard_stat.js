import React,{useState} from "react";
import Cardbody from "./cardbody";

 function FoodCard(){
   let[menu]=useState(
    [
        {
            imageUrl:"https://th.bing.com/th?id=OIP.jJI3bTJ-diLfKDHb9-vwmwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2",
            heading:"Chinees",
            price:"$25"

        },
        {
            imageUrl:"https://th.bing.com/th/id/OIP.NG27Dxl7cAotK-5wjdt0egHaFR?w=258&h=185&c=7&r=0&o=5&dpr=1.6&pid=1.7",
            heading:"leg-peice",
            price:"$35"
        },
        {
            imageUrl:"https://th.bing.com/th/id/OIP.R6Y1yAxnp-z9WLbjv0ph-AHaE8?w=239&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7",
            heading:"Cheese-burger",
            price:"$65"
        },
        {
            imageUrl:"https://th.bing.com/th/id/OIP.bfg9UXXeY_D61zT2d9-agAHaE8?w=209&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7",
            heading:"Chicken",
            price:"$45"
        }
    ]
   )

    return(
            <>
            <div className=" m-2  bg-secondary p-5 rounded-5 ">
                <div className="container  ">
                    <div className="row">


                    {/* javascript code */}
                     {
                        menu.map((element,index)=>{
                            return(
                                <div className="col-sm-3 " key={index}>
                                     <Cardbody image={element.imageUrl}
                                               title={element.heading} 
                                               price={element.price}
                                                
                                               />
                                </div>
                            )
                        })
                     }
                    </div>
                </div>
                </div>


            {/*<div className="container ">
                 <div className="row"> 

                  <div className="col-sm-3 ">
                    <Cardbody image={menu[0].imageUrl} title={menu[0].heading}/>
                  </div>
                  <div className="col-sm-3 ">
                    <Cardbody image={menu[1].imageUrl} title={menu[1].heading}/>
                  </div>

                  <div className="col-sm-3 ">
                    <Cardbody image={menu[2].imageUrl} title={menu[2].heading}/>
                  </div>
                  <div className="col-sm-3 ">
                    <Cardbody image={menu[3].imageUrl} title={menu[3].heading}/>
                  </div>

                  </div>
                  /</div> */}

            </>
    )

 }
 export default FoodCard;