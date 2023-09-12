/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.post('/register', 'UsersController.store')
  Route.delete('/account/deletion/:id', 'UsersController.destroy')
  Route.post('/register/profile', 'ProfilesController.store')
  Route.get('/profile/:id', 'ProfilesController.show')
  Route.put('/profile/:id', 'ProfilesController.update')
  Route.delete('/profile/deletion/:id', 'ProfilesController.destroy')
}).prefix('api/v1/')
