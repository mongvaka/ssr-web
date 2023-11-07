<template>
  <div>
    <header>
        <nav>
            <h1 class="logo">mong dev</h1>
            <NuxtLink to="/">หน้าแรก</NuxtLink>
            <NuxtLink to="/order">ขอราคา</NuxtLink>
            <NuxtLink to="/contact">ติดต่อเรา</NuxtLink>
        </nav>
    </header>
    <div>
        <slot/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style >
body{
    margin: 0px !important;
}
nav{
    padding: 6px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
}
nav a{
    color: white;
    text-decoration: none;
    margin-left: 12px;
    font-size: 18px;
    padding: 10px;
}
nav a:hover{
    color: orange;
}
.logo{
    margin-right: auto;
    padding-left: 20px;
    color: white;
}
</style>