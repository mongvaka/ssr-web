<template>
  <div class="main-content">
    <div class="header-main">
      <span :key="price" class="text-sum">ราคารวม {{price.toLocaleString()}} บาท</span>
    </div>
    <div class="body-main">
      <div v-for="m in data" class="card-detail-price">
        <div class="card-category">
          <img class="img-icon" :src="'/images/'+m.icon" />
          <div class="title-module">{{m.title}}</div>
          <div class="detail" v-for="item in m.chidrents">
            <input type="checkbox" v-model="item.selected" @change="temChange()" />
            <div class="detail-module">{{item.name}}</div>
            <div class="detail-price">{{item.price.toLocaleString()}}</div>
            <div class="unit">{{' / ' + item.unit}}</div>
          </div>
        </div>
      </div>
      <div class="submit">
        <div class="from-inp">
          <input class="inp" for="name" type="text" placeholder="กรอกชื่อ" required v-model="name" />
        </div>
        <div class="from-inp">
          <input
            class="inp"
            for="phone"
            type="number"
            v-mask="['(###) ###-####']"
            placeholder="กรอกเบอร์โทร"
            required
            v-model="phone"
            @blur="validateEmail"
          />
        </div>
        <div class="from-inp">
          <input
            class="inp"
            for="email"
            type="email"
            placeholder="กรอกอีเมล"
            required
            v-model="email"
            @blur="validateEmail"
          />
        </div>
        <div class="from-inp">
          <div class="send-price">ยื่นขอราคา</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import data from "../constants/feature.ts";
console.log(data);
useHead({
  title: "BIZ SPACE รับทำระบบ : ขอราคา",
  meta: [
    {
      name: "description",
      content: "ประเมินราคา"
    }
  ]
});
</script>
<script>
let email, phone, name;
export default {
  data(){
    return {
      price:0,
    }
  },
  methods: {
    temChange() {
      this.price = 0;
      data.forEach(e1 => {
        e1.chidrents.forEach(e2 => {
          if (e2.selected == true) {
            this.price += e2.price;
            console.log(e2.name, e2.selected);
          }
        });
      });
    },
    validateEmail() {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.msg["email"] = "Please enter a valid email address";
      } else {
        this.msg["email"] = "";
      }
    }
  }
};
</script>

<style scope>
.main-content {
  max-width: 950px;
}
.title-module {
  font-weight: bold;
}
.detail-module {
  color: gray;
  margin-right: auto;
}
.body-main {
  padding-left: 0px;
}
.card-category {
  margin-left: 0px;
  padding-left: 0px;
  width: 100%;
}
.detail {
  display: flex;
  flex-wrap: wrap;
}
.text-sum {
  margin-left: auto;
  margin-right: auto;
}
.img-icon {
  width: 25px;
  height: 25px;
}
.send-price {
  color: green;
  text-align: center;
  padding: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: green;
  border-radius: 15px;
  width: 100px;
  margin-top:3px ;

}
.send-price:hover {
  cursor: pointer;
}
.inp {
  height: 30px;
  width: 50%;
  max-width: 500px;
  font-size: 16px;
}
.submit {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card-detail-price {
  padding-left: 0px;
}
.from-inp{
  width: 100%;
  margin-top: 10px;

}
</style>