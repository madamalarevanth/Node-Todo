var Todos = require('../models/todoModel')

module.exports = function(app){
    app.get('/api/setupTodos', function(req,res){
        var starterTodos =[
            {
                username:'revanth',
                todo:'buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username:'revanth',
                todo:'use laptop',
                isDone: false,
                hasAttachment: false
            },
            {
                username:'revanth',
                todo:'learn node',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos,function(err, results){
            res.send(results);
        });
    });
}