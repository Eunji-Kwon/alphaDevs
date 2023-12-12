import React,{Component} from "react";
import '../components/ItalianMenu.css';


export default class Menu extends Component{

    render(){
        return(
            <div class="container m-5" className="italian-menu">
                
      <h1>MENU</h1>
        <div style={{ marginTop: '40px' }}></div>
        <hr></hr>   
        <div style={{ marginTop: '40px' }}>
        </div>

      <h1>APPETIZERS</h1>
        <div class="row justify-content-center align-items-center g-2">
          <div class="col-4 p-4"><div className="card ">
            <img
              src={process.env.PUBLIC_URL + 'assets/Bruschetta.jpg'}
              className="card-img-top img-fluid"
              alt="Card Image"
            />

          <div className="card-body">
            <h5 className="card-title">Bruschetta</h5>
            <p className="card-text">
            Grilled bread with garlic, tomatoes, basil, and mozzarella.
            </p>
          </div>
          </div></div>
          <div class="col-4 p-4"><div className="card" >
        <img
          src={process.env.PUBLIC_URL + 'assets/Salad.jpg'}
          className="card-img-top img-fluid"
          alt="Card Image"
          />

        <div className="card-body">
          <h5 className="card-title">Caprese Salad</h5>
          <p className="card-text">
          Fresh tomatoes, mozzarella, and basil drizzled with balsamic glaze.
          </p>
        </div>
      </div></div>
          <div class="col-4 p-4"><div className="card">
        <img
          src={process.env.PUBLIC_URL + 'assets/calamari.jpg'}
          className="card-img-top img-fluid"
          alt="Card Image"
          />

        <div className="card-body">
          <h5 className="card-title">Calamari Fritti</h5>
          <p className="card-text">
          Crispy fried calamari served with marinara sauce.
          </p>
        </div>
      </div></div>
      <div class="col-4 p-4"><div className="card">
        <img
          src={process.env.PUBLIC_URL + 'assets/penne.jpg'}
          className="card-img-top img-fluid"
          alt="Card Image"
          />

        <div className="card-body">
          <h5 className="card-title">Penne alla Vodka</h5>
          <p className="card-text">
          Penne pasta in a creamy tomato and vodka sauce.
          </p>
        </div>
      </div></div>
      <div class="col-4 p-4"><div className="card">
        <img
          src={process.env.PUBLIC_URL + 'assets/eggplant.jpg'}
          className="card-img-top img-fluid"
          alt="Card Image"
          />

        <div className="card-body">
          <h5 className="card-title">Eggplant Parmesan</h5>
          <p className="card-text">
          Baked eggplant with marinara sauce and melted mozzarella.
          </p>
        </div>
      </div></div>
      <div class="col-4 p-4"><div className="card">
        <img
          src={process.env.PUBLIC_URL + 'assets/fettuccine.jpg'}
          className="card-img-top img-fluid"
          alt="Card Image"
          />

        <div className="card-body">
          <h5 className="card-title">Fettuccine Alfredo</h5>
          <p className="card-text">
          Fettuccine pasta in a rich Alfredo sauce.
          </p>
        </div>
      </div></div>
      <div style={{ marginTop: '100px' }}></div>
        </div>
      <h1>MAIN COURSE</h1>
      <div class="row justify-content-center align-items-center g-2">
        <div class="col-4 p-4"><div className="card ">
      <img
        src={process.env.PUBLIC_URL + 'assets/spaghetti.jpg'}
        className="card-img-top img-fluid"
         alt="Card Image"
        />

      <div className="card-body">
        <h5 className="card-title">Spaghetti Bolognese</h5>
        <p className="card-text">
        Classic spaghetti with meat sauce.
        </p>
      </div>
    </div></div>
        <div class="col-4 p-4"><div className="card" >
      <img
        src={process.env.PUBLIC_URL + 'assets/Rissoto.jpg'}
        className="card-img-top img-fluid"
         alt="Card Image"
        />

      <div className="card-body">
        <h5 className="card-title">Risotto ai Funghi</h5>
        <p className="card-text">
        Risotto with mushrooms, Parmesan, and white wine
        </p>
      </div>
    </div></div>
        <div class="col-4 p-4"><div className="card">
      <img
        src={process.env.PUBLIC_URL + 'assets/aranchini.jpg'}
        className="card-img-top img-fluid"
         alt="Card Image"
        />

      <div className="card-body">
        <h5 className="card-title">Arancini</h5>
        <p className="card-text">
        Fried rice balls stuffed with cheese and ragu.
        </p>
      </div>
    </div></div>
    <div class="col-4 p-4"><div className="card">
      <img
        src={process.env.PUBLIC_URL + 'assets/mozzarella.jpg'}
        className="card-img-top img-fluid"
         alt="Card Image"
        />

      <div className="card-body">
        <h5 className="card-title">Mozzarella Sticks</h5>
        <p className="card-text">
        Breaded and fried mozzarella sticks with marinara sauce.
        </p>
      </div>
    </div></div>
    <div class="col-4 p-4"><div className="card">
      <img
        src={process.env.PUBLIC_URL + 'assets/garlic.jpg'}
        className="card-img-top img-fluid"
         alt="Card Image"
        />

      <div className="card-body">
        <h5 className="card-title">Garlic Knots</h5>
        <p className="card-text">
        Soft bread knots brushed with garlic and olive oil.
        </p>
      </div>
    </div></div>
    <div class="col-4 p-4"><div className="card">
      <img
        src={process.env.PUBLIC_URL + 'assets/calamari.jpg'}
        className="card-img-top img-fluid"
         alt="Card Image"
        />

      <div className="card-body">
        <h5 className="card-title">Calamari Fritti</h5>
        <p className="card-text">
        Crispy fried calamari served with marinara sauce.
        </p>
      </div>
    </div></div>
    <div style={{ marginTop: '100px' }}></div>
      </div>
      <h1>DESSERTS</h1>
      <div class="row justify-content-center align-items-center g-2">
        <div class="col-4 p-4"><div className="card ">
      <img
        src={process.env.PUBLIC_URL + 'assets/tiramisu.jpg'}
        className="card-img-top img-fluid"
         alt="Card Image"
        />

      <div className="card-body">
        <h5 className="card-title">Tiramisu</h5>
        <p className="card-text">
        Layered coffee-flavored Italian dessert.
        </p>
      </div>
    </div></div>
        <div class="col-4 p-4"><div className="card" >
      <img
        src={process.env.PUBLIC_URL + 'assets/Canoli.jpg'}
        className="card-img-top img-fluid"
         alt="Card Image"
        />

      <div className="card-body">
        <h5 className="card-title">Cannoli</h5>
        <p className="card-text">
        Italian pastries filled with sweetened ricotta, chocol-4 p-4ate, and candied fruit.
        </p>
      </div>
    </div></div>
        <div class="col-4 p-4"><div className="card">
      <img
        src={process.env.PUBLIC_URL + 'assets/Gelato.jpg'}
        className="card-img-top img-fluid"
         alt="Card Image"
        />

      <div className="card-body">
        <h5 className="card-title">GElato</h5>
        <p className="card-text">
        Assorted flavors of Italian ice cream.
        </p>
      </div>
    </div></div>
    <div class="col-4 p-4"><div className="card">
      <img
        src={process.env.PUBLIC_URL + 'assets/panna.jpg'}
        className="card-img-top img-fluid"
         alt="Card Image"
        />

      <div className="card-body">
        <h5 className="card-title">Panna Cotta</h5>
        <p className="card-text">
        Italian custard served with fruit coulis.
        </p>
      </div>
    </div></div>
    <div class="col-4 p-4"><div className="card">
      <img
        src={process.env.PUBLIC_URL + 'assets/zeppole.jpg'}
        className="card-img-top img-fluid"
         alt="Card Image"
        />

      <div className="card-body">
        <h5 className="card-title">Zeppole</h5>
        <p className="card-text">
        Fried dough balls dusted with powdered sugar.
        </p>
      </div>
    </div></div>
    <div class="col-4 p-4"><div className="card">
      <img
        src={process.env.PUBLIC_URL + 'assets/affogato.jpg'}
        className="card-img-top img-fluid"
         alt="Card Image"
        />

      <div className="card-body">
        <h5 className="card-title">Affogato</h5>
        <p className="card-text">
        Vanilla gelato "drowned" in a shot of espresso.
        </p>
      </div>
    </div></div>
    <div style={{ marginTop: '100px' }}></div>
      </div>
      <h1>BEERS</h1>
      <div class="row justify-content-center align-items-center g-2">
        <div class="col-4 p-4"><div className="card ">
      <img
        src={process.env.PUBLIC_URL + 'assets/Peroni.jpg'}
        className="card-img-top img-fluid"
         alt="Card Image"
        />

      <div className="card-body">
        <h5 className="card-title">Peroni</h5>
        <p className="card-text">
        Italian pale lager.
        </p>
      </div>
    </div></div>
        <div class="col-4 p-4"><div className="card" >
      <img
        src={process.env.PUBLIC_URL + 'assets/moretti.jpg'}
        className="card-img-top img-fluid"
         alt="Card Image"
        />

      <div className="card-body">
        <h5 className="card-title">Moretti La Rossa</h5>
        <p className="card-text">
        Double bock beer.
        </p>
      </div>
    </div></div>
        <div class="col-4 p-4"><div className="card">
      <img
        src={process.env.PUBLIC_URL + 'assets/borgo.jpg'}
        className="card-img-top img-fluid"
         alt="Card Image"
        />

      <div className="card-body">
        <h5 className="card-title">Birra Del Borgo</h5>
        <p className="card-text">
        Artisanal Italian beer.
        </p>
      </div>
    </div></div>
    <div style={{ marginTop: '100px' }}></div>
      </div>
      <h1>WINES</h1>
      <div class="row justify-content-center align-items-center g-2">
        <div class="col-4 p-4"><div className="card ">
      <img
        src={process.env.PUBLIC_URL + 'assets/wine1.jpg'}
        className="card-img-top img-fluid"
         alt="Card Image"
        />

      <div className="card-body">
        <h5 className="card-title">Chianti Classico</h5>
        <p className="card-text">
        Crisp and dry white wine.
        </p>
      </div>
    </div></div>
        <div class="col-4 p-4"><div className="card" >
      <img
        src={process.env.PUBLIC_URL + 'assets/pinot.jpg'}
        className="card-img-top img-fluid"
         alt="Card Image"
        />

      <div className="card-body">
        <h5 className="card-title">Pinot Grigio</h5>
        <p className="card-text">
        Full-bodied red wine from the Piedmont region.
        </p>
      </div>
    </div></div>
        <div class="col-4 p-4"><div className="card">
      <img
        src={process.env.PUBLIC_URL + 'assets/barolo.jpg'}
        className="card-img-top img-fluid"
         alt="Card Image"
        />

      <div className="card-body">
        <h5 className="card-title">Barolo</h5>
        <p className="card-text">
        Assorted flavors of Italian ice cream.
        </p>
      </div>
    </div></div>
      </div>
      <div className ="copyright">
          <img src='logo\logo_without_bg.png' alt="" />
          <p>Copyright @ Dhruv</p>
      </div>
    </div>
    
        )
    }
}