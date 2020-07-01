# vue-recyclerview

[![npm](https://img.shields.io/npm/v/vue-recyclerview.svg)](https://www.npmjs.com/package/vue-recyclerview)


## 特性

- 复用DOM
- 多行

## 预览

![](https://hilongjw.github.io/vue-recyclerview/preview3.gif)

## 实例预览

[https://hilongjw.github.io/vue-recyclerview/](https://hilongjw.github.io/vue-recyclerview/)

## 运行环境

Vue 2.0 +

## 安装

### 使用CDN

https://unpkg.com/vue-recyclerview/dist/vue-recyclerview

[unpkg.com](https://unpkg.com) unpkg地址 https://unpkg.com/vue-recyclerview/dist/vue-recyclerview.js
 
在你的HTML中引用下面文件

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-recyclerview/dist/vue-recyclerview.js"></script>
```

### NPM

```bash
    $ npm install vue-recyclerview
```

在你的代码中安装插件 `vue-recyclerview` via `Vue.use()`:

```javascript
import Vue from 'vue'
import VueRecyclerviewNew from 'vue-recyclerview'

Vue.use(VueRecyclerviewNew)
```

### 编译
```
开发中....
```

## 说明

> 。。。

### main.js

```javascript
// If using a module system (e.g. via vue-cli), import Vue and RecyclerView and then call Vue.use(RecyclerView).
// import Vue from 'vue'
// import RecyclerView from 'vue-recyclerview'
// import App from './App.vue'
// Vue.use(RecyclerView)

// Now the app has started!
new Vue({
  render: h => h(App)
}).$mount('#app')
```

### App.vue

```html
<template>
  <div id="app">
    <RecyclerView
      :prerender="30"
      style="height: calc(100vh - 50px)"
      :fetch="MiFetch" 
      :item="MiItem" 
      :tombstone="MiTomstone"
    ></RecyclerView>
  </div>
</template>

<script>
import MiItem from './MiItem.vue'
import MiTomstone from './MiTombstone.vue'
import MiFetch from './mi-fetch'

export default {
  name: 'app',
  data () {
    return {
      MiFetch,
      MiItem,
      MiTomstone
    }
  }
}
</script>
```

## 属性

|key|description|defualt|type/options|
|:---|---|---|---|
| `fetch`|Data fetching function |||
|`list`|List data of RecyclerView|[]|
|`prerender`|Number of items to instantiate beyond current view in the opposite direction.|20|Number|
|`remain`|Number of items to instantiate beyond current view in the opposite direction.|10|Number|
|`column`|Specifies how many columns the listings should be displayed in|1|Number|
|`item`|The Vue component of RecyclerView's item||Vue component|
|`tombstone`|The Vue component of RecyclerView's tombstone||Vue component|
|`loading`|The loading component behind the RecyclerView pull-to-refresh |built-in loading|Vue component|
|`options`|advanced options|-|Object|


- fetch:Function

```
function fetch (limit:Number, skip:Number) {
  return Promise.resolve({
    list: list // Array,
    count: count // Number
  })
}

```

- list


```javascript
[
// item
{
  vm: vm, // <Vue Instance>
  data: {
    name: 'test'
  },
  node: null,
  height: 100,
  width: 100,
  top: 0,
}, 
// tombstone
{
  vm: null
  data: null,
  node: null,
  height: 100,
  width: 100,
  top: 0,
}]
```

- options

```vue
<RecyclerView 
ref="RecyclerView"
key="wechat"
class="recyclerview-container wechat" 
:fetch="wechatFetch" 
:item="ChatItem" 
:tombstone="Tombstone"
:prerender="10"
:remain="10"
:options="wechatOptions"
@inited="initScrollToBottom"
></RecyclerView>
```

```javascript
data () {
  return {
    wechatOptions: {
      reuseVM: true,
      usePrefix: true,
      props: {
        color: {
          value: ''
        }
      }
    }
  }
}
```

default:

```javascript
const options = {
  preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|IMG)$/ },
  distance: 50,
  animation_duration_ms: 200,
  tombstone_class: 'tombstone',
  invisible_class: 'invisible',
  prerender: 20,
  remain: 10,
  preventDefault: false,
  column: 1,
  waterflow: false,
  cacheVM: 0,
  reuseVM: false,
  usePrefix: false,
  props: {}
}

```

## Instance Method

- scrollToIndex

```javascript
this.$refs.RecyclerView.scrollToIndex(100)

```

## License

[MIT](https://github.com/hilongjw/vue-recyclerview/blob/master/License)

the project inspired by [infinite-scroller](https://github.com/GoogleChrome/ui-element-samples/tree/gh-pages/infinite-scroller)


