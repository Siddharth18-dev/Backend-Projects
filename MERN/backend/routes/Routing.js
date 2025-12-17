import express from "express";
import {
    //CRUD Routes
    SampleData, 
    CreateData,
    UpdateWholeDocument,
    UpdatePartialDocument,
    DeleteDocument
} from "../CRUD_Controller/controller.js";
const router = express.Router();

router.get("/", SampleData);
router.post("/", CreateData);
router.put("/:id", UpdateWholeDocument);
router.patch("/:id", UpdatePartialDocument);
router.delete("/:id", DeleteDocument);
export default router;