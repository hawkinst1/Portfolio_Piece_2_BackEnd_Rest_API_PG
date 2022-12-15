// the sql queries
require("dotenv").config();
const tableName = process.env.TABLENAME1;

const getElements = `select * from ${tableName}`
const getElementById = `select * from ${tableName} where atomic_number=$1`
const checkElement = `select name from ${tableName} where atomic_number=$1`
const createNewElement = `insert into ${tableName} (name,atomic_weight, isotopes, group_number, period_number, atomic_number, chemicalSymbol)
                          values ($1,$2,$3,$4,$5,$6,$7)` 
const removeElement = `delete from ${tableName} where atomic_number=$1`
const updateElementInfo = `update ${tableName} set name =$1, atomic_weight =$2, isotopes=$3 , group_number=$4, period_number=$5, atomic_number=$6, chemicalSymbol=$7 where atomic_number=$8`

module.exports = {
    getElements,
    getElementById,
    checkElement,
    createNewElement,
    removeElement,
    updateElementInfo
}