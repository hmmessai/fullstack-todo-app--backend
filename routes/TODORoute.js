const { Router } = require("express");
const { getTODO, saveTODO, deleteTODO, updateTODO } = require("../controllers/TODOControllers");
const router = Router();

router.get('/', getTODO);
router.post('/save',saveTODO);
router.post('/delete', deleteTODO);
router.post('/update',updateTODO);

module.exports = router;