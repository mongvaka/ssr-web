<template>
  <div class="main">
    
  <div  class="allProduct">

      <card   v-for="model in data" 
      :id="model.id" 
      :title="model.title"
      :detail="model.detail"
      :icon="'/images/'+model.icon"
      :childrents="model.chidrents"
      >
          {{model}}
      </card>
  </div>
  </div>
</template>

<script setup>
useHead({
  title:"BIZ SPACE รับทำระบบ : ฟีเจอร์ทั้งหมด",
  meta:[
    {
      name:"description",
      content:"ระบบสมาชิก ระบบขายสินค้า ระบบ GPS ระบบควบคุมอุปกรณ์ ระบบรายงานผล Landing Page ออกแบบระบบ"
    }
  ]
})
import card from '../components/card.vue'
import data from '../constants/feature.ts'


</script>
<script >
export default{};
</script>

<style>
.header{
  text-align: center;
}
.allProduct{
  margin-top: 20px;
  display: flex;
  max-width: 850px;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

</style>