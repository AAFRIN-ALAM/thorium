const express = require('express')
const router = express.Router()
const dictionaryController = require('../controller/dictionaryController')

router.get("/api/v2/entries/{source_lang}/{word_id}", dictionaryController.fetchData)


module.exports = router;
