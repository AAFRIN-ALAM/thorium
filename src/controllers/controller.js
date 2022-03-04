const firstAPI=async function(req,res){
    res.send({msg:"first api passed globalmiddleware"})
}

const secondAPI=async function(req,res){
res.send({msg:"Second api passed globalmiddleware"})
}


module.exports.firstAPI= firstAPI
module.exports.secondAPI= secondAPI
