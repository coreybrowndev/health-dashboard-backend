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
  Route.post('register', 'UsersController.register')
  Route.post('login', 'UsersController.login')
  Route.delete('users/:id', 'UsersController.destroy').middleware(['auth', 'verifyOwner'])
  Route.post('logout', 'UsersController.logout').middleware('auth')
  Route.get('users/:id', 'UsersController.show').middleware(['auth', 'verifyOwner'])
  //Profile Routes
  Route.post('users/:id/profile', 'ProfilesController.store').middleware('auth')
  Route.get('profile/:id', 'ProfilesController.show').middleware(['auth', 'verifyOwner'])
  Route.put('profile/:id', 'ProfilesController.update').middleware(['auth', 'verifyOwner'])
  Route.delete('profile/:id', 'ProfilesController.destroy').middleware(['auth', 'verifyOwner'])
  //Vital Sign Routes
  Route.post('vitals/:id', 'VitalSignsController.store').middleware(['auth', 'verifyOwner'])
  Route.get('vitals/:id', 'VitalSignsController.show').middleware(['auth', 'verifyOwner'])
  Route.put('users/vitals/:id', 'VitalSignsController.update').middleware(['auth', 'verifyOwner'])
}).prefix('api/v1/')
