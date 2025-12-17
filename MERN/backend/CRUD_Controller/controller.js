import Samplemodel from "../config/ModelSchema/SampleSchema.js";
import express from "express";

//CRUD Operations: - 
// C - create
// R - Read
// U - Update
// D - Delete

export async function SampleData(req, res) {
    try {
        const data = await Samplemodel.find({});
        res.status(200).json({ message: "Data fetched successfully", data: data});
    } catch (error) {
        console.error("ERROR 500: Internal Server Error\n", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function CreateData(req, res) {
    try {
        const {name, age} = req.body;
        if(!name || !age) {
            return res.status(400).json({ message: "Bad Request: Name and Age are required"});
        }
        const newData = new Samplemodel({name, age});
        await newData.save();
        res.status(201).json({ message: "Data created successfully", data: newData});  
    } catch (error) {
        console.error("ERROR 500: Internal Server Error\n", error);
        res.status(500).json({ message: "Internal Server Error" }); 
    }
};

export async function UpdateWholeDocument(req, res) {
    try {
        console.log(req.params);
        const { id } = req.params;
        const { name, age } = req.body;
        if (!name || !age) {
            return res.status(400).json({ message: "Bad Request: Name and Age are required" });
        }
        const updatedData = await Samplemodel.findByIdAndUpdate( id, { name, age }, { new: true } );
        if (!updatedData) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.status(200).json({ message: "Data updated successfully", data: updatedData });
    } catch (error) {
        console.error("ERROR 500: Internal Server Error\n", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
    //const {name, age} = req.body;
    // await Samplemodel.findByIdAndUpdate(req.params.id, {name, age})
    //res.status(201).json({message: "Data updated successfully" });
    //catch (error) {
    //    console.error("ERROR 500: Internal Server Error\n", error);
    //    res.status(500).json({ message: "Internal Server Error" }); 
    //}   
};

