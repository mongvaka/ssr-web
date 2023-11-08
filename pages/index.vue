<template>
  <div>
    <h1>หน้าแรก</h1>
  <div class="allProduct">
      <card  title="ระบบสมาชิก"
      detail="ระบบสามารถยืนยันตัวตนผู้ใช้งาน เพิ่มผู้ใช้งาน และจำกัดสิทธิการเข้าถึงได้"
      icon-url="users.svg"
      ></card>
       <card  title="ระบบสมาชิก"
      detail="ระบบสามารถยืนยันตัวตนผู้ใช้งาน เพิ่มผู้ใช้งาน และจำกัดสิทธิการเข้าถึงได้"
      icon-url="users.svg"
      ></card>
             <card  title="ระบบสมาชิก"
      detail="ระบบสามารถยืนยันตัวตนผู้ใช้งาน เพิ่มผู้ใช้งาน และจำกัดสิทธิการเข้าถึงได้"
      icon-url="users.svg"
      ></card>
  </div>
  </div>
</template>

<script>
import card from '../components/card.vue'
export default {};
</script>

<style>
.allProduct{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>