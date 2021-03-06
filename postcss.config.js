module.exports = {
  plugins:[
    // require('autoprefixer')({
    //   grid:true
    // }),
    //prender features
    require('postcss-import'),
    require('postcss-cssnext')({
      features:{
        autoprefixer:{
          grid:true,
          flexbox:false,
        },
        //apagando para que lea de forma nativa
        customProperties: false,
        calc:false,
      }
    })
  ]

}