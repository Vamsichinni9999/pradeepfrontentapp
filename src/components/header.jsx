import React from "react";
 const Header=()=>{
    const Mystyle={
        height:'500px',
        width:'100%'
    

    }
   
    return(
        <>
           <div className="container-fluid  p-3 ">
                <div className="items">
                <img style={Mystyle} src="https://slidestore.com/wp-content/uploads/2016/08/22768_Culinary_Template_Slide_Bundle_for_PowerPoint_Slide_1_The_Food_Business.jpg" alt="img" ></img>
                </div>
           </div>
           <div className="content  m-2 p-3 rounded-4  bg-success "  > 
                <h1 className="text-center text-warning "><b>Welcome to Foodeeey...!</b> <img src="https://th.bing.com/th/id/R.0d9efa3b2fd42e52006620b1111fe201?rik=AZZ1mpksALpMXg&riu=http%3a%2f%2fwww.i2symbol.com%2fpictures%2femojis%2f5%2fb%2ff%2fb%2f5bfbe574875c578856921fbb845c1a77.png&ehk=LhIjvy9y6C1%2br6Dy4zdoPPrQBtUYRGnLFwfYM4nHPR0%3d&risl=&pid=ImgRaw&r=0"  height={100} alt="image"></img></h1>
                <div id="carouselExampleCaptions" className="carousel slide">
                        <div className="carousel-indicators ">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="https://th.bing.com/th/id/OIP.MlZXr9dd8Om34xx-wydaQQHaE9?rs=1&pid=ImgDetMain" height={400} className="d-block w-100 rounded-5" alt="..." />
                            <div className="carousel-caption d-none d-md-block  text-white bg-warning rounded-5 ">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src="https://th.bing.com/th/id/OIP.VoOwkOaOtOLaesCFXXgNwwHaE7?rs=1&pid=ImgDetMain" height={400} className="d-block w-100 rounded-5" alt="..." />
                            <div className="carousel-caption d-none d-md-block  text-white bg-warning rounded-5 ">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src="https://th.bing.com/th/id/OIP.sPV5RNQhaZE79ikgBLM-7wHaE7?w=800&h=533&rs=1&pid=ImgDetMain" height={400} className="d-block w-100 rounded-5" alt="..." />
                            <div className="carousel-caption d-none d-md-block text-white bg-warning rounded-5">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src="https://www.webpagedepot.com/images/sitefiles/10-brown/5557694023652549801656922019326264883544064n-546.jpg" height={400} className="d-block w-100 rounded-5" alt="..." />
                            <div className="carousel-caption d-none d-md-block  text-white bg-warning rounded-5">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the forth slide.</p>
                            </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div><br></br>

                        <p className="text-white px-4 " > Est aliquip proident voluptate magna. Consectetur id elit eiusmod quis reprehenderit officia. Incididunt velit laboris veniam velit esse occaecat occaecat pariatur.   Exercitation cupidatat ipsum ea amet amet sit. Sit proident aute quis id minim. Aliquip quis tempor ut enim id fugiat cillum ex occaecat et excepteur ut. Dolor ullamco ex qui ad ipsum irure irure cupidatat enim deserunt ullamco do duis proident. Tempor ipsum mollit sunt excepteur officia adipisicing consequat esse non pariatur aliquip. Pariatur deserunt magna aliquip esse officia eiusmod labore mollit.</p>
                <p className="text-white px-4 " > Incididunt velit laboris veniam velit esse occaecat occaecat pariatur.   Exercitation cupidatat ipsum ea amet amet sit. Sit proident aute quis id minim. Aliquip quis tempor ut enim id fugiat cillum ex occaecat et excepteur ut. Dolor ullamco ex qui ad ipsum irure irure cupidatat enim deserunt ullamco do duis proident. Tempor ipsum mollit sunt excepteur officia adipisicing consequat esse non pariatur aliquip. Pariatur deserunt magna aliquip esse officia eiusmod labore mollit.</p>
           </div>

        </>
    )
 }
 export default Header