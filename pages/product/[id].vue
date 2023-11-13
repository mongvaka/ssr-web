<template>
  <div class="main-content">
    <div class="header-main">
      <img :src="'/images/'+model.icon" />
      <div>
        <a class="text-head">{{model.title}}</a>
        <br />
        <a>{{model.detail}}</a>
      </div>
      <NuxtLink class="live-demo" :to="model.route">
        <div >
          <div>ดูตัวอย่าง</div>
        </div>
      </NuxtLink>
    </div>
    <div class="body-main">
      <div v-for="m in model.chidrents" class="card-detail">
          <img class="img-section" :src="'/images/'+m.icon">
        <div class="detail-section">
          <div class="name">{{m.name}}</div>
          <div class="des">
            {{m.description}}
          </div>
        </div>
        <div class="price-section">
          {{m.price.toLocaleString()}} / <div class="unit">{{m.unit}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import data from "../constants/feature.ts";

const { id } = useRoute().params;
console.log(id);
const model = data.find(fn => fn.id == id);
let description =''
const child = model.chidrents
console.log(child);
child.forEach(element => {
  description += (element.name+" ")
});
useHead({
  title:"BIZ SPACE รับทำระบบ : "+ model.title,
  meta:[
    {
      name:"description",
      content:description
    }
  ]
})
</script>
<script >
export default {};
</script>
<style>
.main-content {
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;
}
.header-main {
  padding: 6px 0;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  margin-bottom: 15px;
}

.text-head {
  font-size: 18px;
  font-weight: bold;
  margin-top: 0px;
  padding-top: 0px;
}
img {
  margin-right: 10px;
}
.live-demo {
  margin-left: auto;
  color: grey;
  border: grey;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  text-decoration: none;
}
.live-demo:hover {
  background-color: rgba(128, 128, 128, 0.349);
}
.live-demo div {
  padding: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.detail-section{
  max-width: 450px;
  margin-right: auto;
}
.card-detail{
  font-size: 16px;
  margin-bottom: 15px;
  padding-left: 100px;
    display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.name{
  color: black;
}
.des{
  font-size: 15px;
  color: gray;
}
.unit{
    color: gray;
}
.img-section{
  width: 25px;
  height: 25px;
}
</style>