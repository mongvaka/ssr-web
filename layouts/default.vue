<template>
  <div>
    <header>
        <nav>
            <h1 class="logo">BIZ SPACE</h1>
            <NuxtLink  to="/">โชว์เคส</NuxtLink>
            <NuxtLink class="getprice" to="/order">ขอราคา</NuxtLink>
            <NuxtLink to="/contact">ติดต่อเรา</NuxtLink>
        </nav>
    </header>
    <div>
        <slot/>
    </div>
    <div class="footer">
        <p></p>
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
    background-color: #ffffff;
}
nav a{
    color: rgb(83, 83, 83);
    text-decoration: none;
    margin-left: 12px;
    margin-right: 15px;
    font-size: 18px;
    padding: 10px;
}
nav a:hover{
    color:#0f0f0f;
}
.logo{
    margin-right: auto;
    padding-left: 20px;
    color: rgb(138, 138, 138);
}
.getprice{
    color: green;
    border: green;
    border-style: solid;
    border-width: 1px;
    border-radius: 10px ;
    
}

body {   
   font-family: 'Roboto', sans-serif !important;
}
.footer{
    height: 100px;
}
/* // or 

#app { 
    font-family: 'my-custom-font';
} */
</style>