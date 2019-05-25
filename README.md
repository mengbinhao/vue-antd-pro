# vue-antd-pro

### knowledge point
1. vue.config.js
2. add antd-vue(add babel-plugin-import for importing components on demand
3. define high extensive router
4. dynamic change UI layout(v-slot、class、v-model)
   1. put router query params
   2. BasicLayout get layout from computed attribute, compute router.query
5. combine menu with router(.sync、watch、template functional comonent(SubMenu)、recursion form memu)
   1. render menu from router(routet add some meta attibute for filter)
   2. selectedKeysMap / openKeysMap
6. route authority
   1. add authority meta in router
   2. judge in route guard
   3. render menu combined route authority meta
7. more precise authority control(component style or directive style)
   1. component style(define、vue.component、use)
      1. template or render
         1. template does not have this
         2. slot can not use as root tag in template, so do harm to html structure
      2. render function
      3. global register
   2. custom directive(define、vue.use、use)
8. ECharts
   1. \$ref
   2. lifecycle
   3. notice of encapsulating third-party components
   4. deep watch(low performance)
9.  encapsulate axios
10. [vue-jsx](https://github.com/vuejs/jsx)
11. cross-env
```bash
//only work in ios
"serve:no-mock": "MOCK=none vue-cli-service serve"
"serve:no-mock": "cross-env MOCK=none vue-cli-service serve"

//can get in vue.config.js
process.env.xxx
```