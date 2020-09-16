import React, { Component } from 'react';
//import { Product, Order } from './data/entities';
//import { ProductList } from './productList';
import { dataStore } from './data/dataStore';
import { Provider } from 'react-redux';
import { HttpHandler } from './data/httpHandler';
import { addProduct } from './data/actionCreators';
import { ConnectedProductList } from './data/productListConnector';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

interface Props {
  // no props required
}

export default class App extends Component<Props> {
  private httpHandler = new HttpHandler();

  constructor(props: Props) {
    super(props);
    this.httpHandler.loadProducts((data) =>
      dataStore.dispatch(addProduct(...data))
    );
  }

  render = () => (
    <div className='App'>
      <Provider store={dataStore}>
        <BrowserRouter>
          <Switch>
            <Route path='/products' component={ConnectedProductList} />
            <Redirect to='/products' />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );

  submitCallback = () => {
    console.log('Submit order');
  };
}
