import React from "react";
import DataComp from "./reduxData/DataComp"; //Importing the data componenet
import CardComp from "./components/CardComp"; //Importing the card componenet
import { Provider } from "react-redux";
import { productStore } from "./features/ProductStore";

const App = () => {
  return (
    <div>
      <div>
        <Provider store={productStore}>
          <DataComp>
            <CardComp />
          </DataComp>
        </Provider>
      </div>
    </div>
  );
};

export default App;
