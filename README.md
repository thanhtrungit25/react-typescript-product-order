# React Typescript Product Order

This is follow the book `Essential Typescript` by Adam Freeman

For development

```
yarn
yarn start
open http://localhost:3000
```

For production

```
yarn build
node server.js
open http://localhost:4002
```

For docker build image

```
docker build . -t reactapp -f Dockerfile
docker run -p 4002:4002 reactapp
```

Other commands

```
docker ps
docker stop #APP_ID
```

![alt text](https://github.com/thanhtrungit25/react-typescript-product-order/blob/master/assets/products.png 'Products')

![alt text](https://github.com/thanhtrungit25/react-typescript-product-order/blob/master/assets/categories_select.png 'Categories Select')

![alt text](https://github.com/thanhtrungit25/react-typescript-product-order/blob/master/assets/header.png 'Header')

![alt text](https://github.com/thanhtrungit25/react-typescript-product-order/blob/master/assets/order_summary.png 'Order Summary')
