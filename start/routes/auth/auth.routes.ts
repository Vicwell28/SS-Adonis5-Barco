import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/role/route', async () => {
      return { hello: 'Hello, auth!' }
    })

    Route.resource('/auth', 'auth')
    .apiOnly()
})
.prefix('/api/v1')
.namespace('App/Controllers/Http/AuthController')