// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   devtools: { enabled: true }
// })
module.exports={
  build:{
    extend:(config:any)=>{
      const svgRole = config.module.rules.find((rule:any)=>rule.test.test('.svg'));
      svgRole.test = /\.(svg|png|jpe?g|gif|webp)$/;
      config.module.rules.push({
        test:/\.svg$/,
        use:['label-loader','vue-svg-loader']
      })
    }
  },
  buildModule:[
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families:{
      Roboto:[300,500,700],
    }
  },
  app:{
    head:{
      title:"BIZ SPACE รับทำระบบ",
      meta:[
        {name:"description",content:"รับทำระบบ ERP Marketplace อกกแบบระบบตามความต้องการ"}
      ]
    }
  }

}