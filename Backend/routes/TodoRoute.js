const { Router } = require("express");
const { server , getAllToDos , saveAllToDos , deleteToDos , updateToDos} = require("../controllers/Todo");

const router = Router();

router.get("/", server)
router.get('/todos', getAllToDos)
router.post('/add', saveAllToDos)
router.put('/update', updateToDos)
router.delete('/delete', deleteToDos)

module.exports = router;