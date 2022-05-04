import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/role/route', async () => {
      return { hello: 'Hello, partida!' }
    })

    Route.resource('/partida', 'partidaController')
    .apiOnly()
})
.prefix('/api/v1')
.namespace('App/Controllers/Http/PartidasController')