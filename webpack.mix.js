
    const mix = require('laravel-mix')

    mix.babelConfig({
      presets: ["@babel/preset-env"],
      plugins: ['@babel/plugin-syntax-dynamic-import'] // important to install -D
    })

    mix.js('resources/js/app.js', 'frontend.js')
    mix.js('resources/js/backendApp.js', 'backend.js')
   .vue()

    .webpackConfig({
        output: {
            filename:'js/[name].js',
            chunkFilename: 'js/chunks/[name].js',
        },
    });


