const express = require('express');
const router = express.Router();
const todoController = require('../../controllers/todoController')


//const User = require('../database/models/user');
//const passport = require('../passport');
//const todoRoutes = express.Router();
//let Todo = require('../../database/models/todo-model');



//matches with '/api/'
router.route('/')
    .get(todoController.findAll)
    .post(todoController.create);

//matches with '/api/:id'
router
    .route('/:id')
    .get(todoController.findById)
    .delete(todoController.remove);

module.exports = router;






// todoRoutes.get('/todos', (req, res) => {
//     Todo.find(function(err, todos) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(todos);
//         }
//     });
// });

// todoRoutes.get('/todos/:id', (req, res) => {
//     let id = req.params.id;
//     Todo.findById(id, function(err, todo) {
//         res.json(todo);
//     });
// });

// todoRoutes.post('/todos/add', (req, res) => {
//     let todo = new Todo(req.body);
//     todo.save()
//         .then(todo => {
//             res.status(200).json({'todo': 'todo added successfully'});
//         })
//         .catch(err => {
//             res.status(400).send('adding new todo failed');
//         });
// });

// todoRoutes.post('/todos/update/:id', (req, res) => {
//     Todo.findById(req.params.id, function(err, todo) {
//         if (!todo)
//             res.status(404).send('data is not found');
//         else
//             todo.todo_description = req.body.todo_description;
//             todo.todo_responsible = req.body.todo_responsible;
//             todo.todo_priority = req.body.todo_priority;
//             todo.todo_completed = req.body.todo_completed;

//             todo.save().then(todo => {
//                 res.json('Todo updated');
//             })
//             .catch(err => {
//                 res.status(400).send('Update not possible');
//             });
//     });
// });

// module.exports = router;









// router.post('/', (req, res) => {
//   console.log('user signup');

//   const { username, password } = req.body;
//   // ADD VALIDATION
//   User.findOne({ username: username }, (err, user) => {
//     if (err) {
//       console.log('User.js post error: ', err);
//     } else if (user) {
//       res.json({
//         error: `Sorry, already a user with the username: ${username}`,
//       });
//     } else {
//       const newUser = new User({
//         username: username,
//         password: password,
//       });
//       newUser.save((err, savedUser) => {
//         if (err) return res.json(err);
//         res.json(savedUser);
//       });
//     }
//   });
// });

// router.post(
//   '/login',
//   function (req, res, next) {
//     console.log('routes/user.js, login, req.body: ');
//     console.log(req.body);
//     next();
//   },
//   passport.authenticate('local'),
//   (req, res) => {
//     console.log('logged in', req.user);
//     var userInfo = {
//       username: req.user.username,
//     };
//     res.send(userInfo);
//   }
// );

// router.get('/', (req, res, next) => {
//   console.log('===== user!!======');
//   console.log(req.user);
//   if (req.user) {
//     res.json({ user: req.user });
//   } else {
//     res.json({ user: null });
//   }
// });

// router.post('/logout', (req, res) => {
//   if (req.user) {
//     req.logout();
//     res.send({ msg: 'logging out' });
//   } else {
//     res.send({ msg: 'no user to log out' });
//   }
// });

// module.exports = router;
