import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";
import "./scss/app.scss";

import pizza from "./components/pizza.json";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizza.map((obj) => (
                <PizzaBlock title={obj.title} price={obj.price} image={obj.imageUrl} sizes={obj.sizes} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
