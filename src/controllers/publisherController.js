const publisherModel = require ("../models/publisherModel")

const createPublisher = async function(req, res){
    let publisherCreated = await publisherModel.create(req.body)
    res.send({data : publisherCreated})
}

const getPublisherData = async function (req, res) {
    let listOfPublishers = await publisherModel.find()
    res.send({data: listOfPublishers})
}

module.exports.createPublisher = createPublisher
module.exports.getPublisherData = getPublisherData