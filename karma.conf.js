module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      // Agrega aquí los archivos que contienen las pruebas del módulo 'login'
      // Por ejemplo, si tus pruebas del login están en 'src/app/login/login.component.spec.ts'
      // deberías agregar 'src/app/login/*.spec.ts'
      'src/app/modules/auth/components/login/login.component.spec.ts',
      'src/app/shared/modal-user/modal-user.component.spec.ts'
    ],
    exclude: [],
    preprocessors: {
      // Agrega aquí cualquier procesamiento adicional si es necesario
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
