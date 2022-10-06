import { readFromFile, writeIntoFile } from "../util/fileStorage.js"

export const getPirates = (req, res) => {
    readFromFile('pirates.json')
    .then( data => res.status(200).json(JSON.parse(data)))
    .catch( err => {
        console.log(err)
        res.status(500).end()
    })
    // daten senden
}

export const addPirate = (req, res) => {
    const pirate = {
        piratename: req.body.profilename,
        piratesmile: req.file.path
    }
    readFromFile('pirates.json')
    .then(data => JSON.parse(data))
    .then(obj => {
        obj.push(pirate)
        writeIntoFile('pirates.json', JSON.stringify(obj))
        .then( () => res.status(200).end())
        .catch(err => {
            console.log(err)
            res.status(500).end()
        })
    })
}