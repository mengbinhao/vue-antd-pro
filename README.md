# vue-antd-pro

## Project setup
```
npm install
npm run serve
npm run build
npm run test
npm run lint
npm run test:unit
```

1. vue.config.js
2. use babel-plugin-import only import the components you need
3. define high extensive router
4. dynamic change UI layout(v-slot、class、v-model)
   1. put router query params
   2. basic layout get query from computed attribute, then get from router
5. bind menu with router(.sync、watch、template functional comonent(SubMenu)、component recursion)
   1. render from router
   2. ognize date from router attribute
6. route authority
   1. add authority meta in router
   2. judge in route guard
   3. can bind route authority meta with menu render
7. more precise authority control(component style or directive style)
   1. component style(define、vue.component、use)
      1. template or render
         1. template does not have this
         2. slot can not use as root tag in template, so do harm to html structure
      2. render function
      3. global register
   2. custom directive(define、vue.use、use)