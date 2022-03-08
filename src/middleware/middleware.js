const validation = function (req, res, next) {
    let data = req.headers;

    if(data.hasOwnProperty('isfreeappuser') === false) {
        res.send( {error: 'the request is missing a mandatory header'} )
    }
    else {
        next();
    }
}

module.exports.validation = validation;
