const express=require('express')
const router=express.Router()
const dictionaryController=('../controller/dictonaryController')

router.get("/api/v2/entries/{source_lang}/{word_id}", dictionaryController.fetchData)


module.exports=router;