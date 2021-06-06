import logo from './logo.svg';
import './App.css';
import card_wallpaper from'./img/card.jpg';
import card_right from'./img/card2.jpg';
import card_center from'./img/card3.jpg';
import card_center2 from'./img/card4.jpg';
import Login from './Login/login.jsx';
import ItemPost from "./itemPost/ItemPost";
import ItemCart from "./itemCart/ItemCart.jsx";
import About from "./about/About";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default function uts_cart() {
  return (
    <Router>
      
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
          
              <div class="container">
                <a class="navbar-brand" href="/home">Tunas Coffee 
                </a>
              <div class="collapse navbar-collapse" id="navbarNav">
              </div>
              
              <ul class="navbar-nav ml-auto" >
                <li class="nav-item">
                  <Link to ="/home"><a class="nav-link active" aria-current="page" href="home">Home</a></Link> 
                </li>
                <li class="nav-item">
                <Link to ="/list_item"><a class="nav-link" href="list_item">Coffee Beans</a></Link>
                </li>
                <li class="nav-item">
                <Link to ="/cart_item"><a class="nav-link" href="cart_item">Cart</a></Link>
                </li>
                <li class="nav-item">
                <Link to ="/about"><a class="nav-link" href="about">About</a></Link>
                </li>
                <li class="nav-item">
                <Link to ="/"><a class="nav-link" href="/">Account</a></Link>
                </li>
              </ul>
              </div>
        </nav>
        
       

      <Switch>
      <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/list_item">
          <ListItem />
        </Route>
        <Route exact path="/cart_item">
          <CartItem />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>

      <div class="container-fluida pb-0 mb-0 justify-content-center text-light ">
            <footer>
                <div class="row my-5 justify-content-center py-5">
                    <div class="col-11">
                        <div class="row ">
                            <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                                <h3 class="text-muted mb-md-0 mb-5 bold-text">Tunas Coffee.</h3>
                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                                <h6 class="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6>
                                <ul class="list-unstyled">
                                    <li>Home</li>
                                    <li> Coffee Beans</li>
                                    <li> Cart</li>
                                    <li> About</li>
                                </ul>

                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                                <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                                <p class="mb-1">Malang</p>
                                <p>Indonesia</p>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                                <p class="social text-muted mb-0 pb-0 bold-text"> <span class="mx-2"><i class="fa fa-facebook" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-linkedin-square" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-twitter" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-instagram" aria-hidden="true"></i></span> </p><small class="rights"><span>&#174;</span> Tunas Coffee All Rights Reserved.</small>
                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                                <h6 class="mt-55 mt-2 text-muted bold-text"><b>Tunas Coffee</b></h6><small> <span><i class="fa fa-envelope" aria-hidden="true"></i></span> tunascoffee@gmail.com</small>
                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                                <h6 class="text-muted bold-text"><b>Subhan Indra</b></h6><small><span><i class="fa fa-envelope" aria-hidden="true"></i></span> indraprayoga869@gmail.com</small>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </Router>
    
  );
}

function Home() {
  return (
    <body>
      <div class="container-fluid">
      <div class="card bg-dark text-light" >
        <img class="card-img" src={card_wallpaper} alt="Card image"  />
        <div class="card-img-overlay" >
         <blockquote class="blockquote text-left">
          <h3 class="card-title">Our Coffee</h3>
          <p class="card-text">Since 149 SM, it always has been and will always be about quality. We’re passionate about </p>
          <p class="card-text"> ethically sourcing only the finest Arabica coffee beans and roasting them with</p>
          <p class="card-text"> great care. Our passion for coffee is rivaled only by our love of sharing it.</p>
          </blockquote>
        </div>
        </div>
      </div>

      <div class="card-group" >
        
        <div class="card">
        <div class="container valign">
          <div class="card-img-overlay">
            <blockquote class="blockquote text-center">
            <h3 class="card-title">How to Brew</h3>
            <p class="card-text">It’s surprising how different brewing methods can enhance particular  </p>
            <p class="card-text">characteristics in your coffee. Let us help you unlock the full potential  </p>
            <p class="card-text">of your coffee—for the perfect cup every time.</p>
            </blockquote>
          </div>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src={card_right} alt="Card image cap"/>
        </div>
  </div>

  <div class="card bg-dark text-white" >
        <img class="card-img" src={card_center} alt="Card image"   />
        <div class="container valign">
        <div class="card-img-overlay" >
         <blockquote class="blockquote text-center">
          <h4 class="lead">Ketika kata-kata tak lagi banyak berbicara, secangkir kopi bisa jadi perantara dan mencairkan suasana</h4>
           <cite title="Source Title">- Kaum Sendja -</cite>
          </blockquote>
        </div>
        </div>
      </div>

      <div class="card bg-dark text-white" >
        <img class="card-img" src={card_center2} alt="Card image"   />
        <div class="container valign">
        <div class="card-img-overlay" >
         <blockquote class="blockquote text-left">
         <h2 class="card-title">THERE’S NOTHING LIKE A GREAT CUP OF COFFEE.</h2>
            <p class="card-text">That’s why Campos celebrates every barista – from the Newtown café owner who pulls 500 shots a day, to John at the office who takes pride in his flat whites, to new mum Lisa at home with her 6-month-old. Because the truth is, Campos gives you the beans to lift your coffee game, no matter what kind of barista you are.</p>
            
          </blockquote>
        </div>
        </div>
      </div>
  </body>
    
    
  )
}

function ListItem() {
  return (
   <ItemPost />
  )
}

function CartItem() {
  return (
    <ItemCart />
  )
}
