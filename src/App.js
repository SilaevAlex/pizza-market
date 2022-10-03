import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";
import "./scss/app.scss";

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items">
              <PizzaBlock title="Mexico" price="500" />
              <PizzaBlock title="Italian" price="300"/>
              <PizzaBlock title="Gavai" price="250"/>
              <PizzaBlock title="Myasko" price="300"/>
              <PizzaBlock title="Sweety" price="150"/>
              <PizzaBlock title="NicePizza" price="300"/>
              <PizzaBlock title="PizzaDay" price="200"/>
              <PizzaBlock title="Cheese" price="500"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
