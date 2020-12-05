function requestHandler(req, res){
    User.findById(req.userId, function (err, user){
        if(err){
            res.send(err)
        }else{
            Tasks.findById(user.tasksId, function (err, tasks){
                if(err){
                    res.send(err)
                }else{
                    res.completed = true
                    res.save(function (err){
                        if(err){
                            res.send(err)
                        }else{
                            res.send('Tasks completed!')
                        }
                    })
                }
            })
        }
    })
}

// functions ... otro codigo

