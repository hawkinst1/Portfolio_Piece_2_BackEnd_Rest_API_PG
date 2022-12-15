// store the CRUD functions here
const queries = require("./queries")
//database
const pool = require("../database/databaseConfig")
const e = require("express")

const getAllElements = (req,res) => {
    console.log("Gathering elements...")
    pool.query(queries.getElements, (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
}
const getElementById = (req,res) => {
    const id = parseInt(req.params.id)
    
    console.log("Finding element...")

    pool.query(queries.getElementById,[id],(error, results) => {
        if(error) throw error        
        res.status(200).json(results.rows)
    })
}
const createNewElement = (req, res) => {
    //get variable
    const {name, atomic_weight, isotopes, group_number, period_number, atomic_number, chemicalSymbol} = req.body;
    //check if name exists 
    pool.query(queries.checkElement, [atomic_number], (error,result) => {
        //if it does inform       
        if(result.rows.length){
            res.send("This element has already been logged!")
        }else{
        //if not, create, lowercase and then capitalise name and symbol
            pool.query(
                queries.createNewElement, 
                [name, atomic_weight, isotopes, group_number, period_number, atomic_number, chemicalSymbol], 
                (error,results) =>{
                if(error) throw error
                    console.log("Logging element...")
                    res.status(201).send("Logged successfully!")
             })
         }
    })
}
const updateElement = (req, res) => {
    const id = parseInt(req.params.id);
    const {name, atomic_weight, isotopes, group_number, period_number, atomic_number, chemicalSymbol} = req.body;
    console.log("Finding element...")

    pool.query(queries.getElementById,[id],(error, results) => {
        if(!results.rows.length){
            res.send("This element is not located the log!")
        }else{
            pool.query(queries.updateElementInfo,[name, atomic_weight, isotopes, group_number, period_number, atomic_number, chemicalSymbol,id], (error,results) => {
                if(error) throw error
                console.log("updating element...")
                res.status(201).send("Updated to log successfully!")
            })
        }
    })
}
const deleteElement = (req, res) => {
    const id = parseInt(req.params.id);

    console.log("Finding element...")

    pool.query(queries.getElementById,[id],(error, results) => {
        if(!results.rows.length){
            res.send("This element is not located the log!")
        }else{
            pool.query(queries.removeElement,[id], (error,results) => {
                if(error) throw error
                console.log("removing element...")
                res.status(201).send("Removed from log successfully!")
            })
        }
    })
}

module.exports ={
    getAllElements,
    getElementById,
    createNewElement,
    updateElement,
    deleteElement
}