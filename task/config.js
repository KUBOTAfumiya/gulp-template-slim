module.exports = {
  dist: 'dist',
  defaultPath: 'pc',
  server: {
    ghostMode: {
      clicks: false,
      location: false,
      forms: false,
      scroll: false
    }
  },
  path: {
    copy: [{
      from: ['../assets/**/*.jpg',
        '../assets/**/*.gif',
        '../assets/**/*.png',
        '../assets/**/*.json',
        '../assets/**/*.html',
      ],
      to: 'dist/'
    }
  ],
    script: {
      src: '../assets/**/*.js',
      dest: 'dist/js'
    },
    style: {
      src: '../assets/**/*.sass',
      dest: 'dist/'
    },
    pug: {
      src: '../assets/**/*.pug',
      dest: 'dist/'
    },
    watch: [{
      from: '../assets/**/*',
      to: 'dist/'
    }]
  }
};