import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/role/route', async () => {
      return { hello: 'Hello, user!' }
    })

    Route.resource('/user', 'UsersController')
    .apiOnly()
})
.prefix('/api/v1')
.namespace('App/Controllers/Http/AuthController')