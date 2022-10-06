import express from 'express'
import cors from 'cors'
import multer from 'multer'
import morgan from 'morgan'
import { addPirate, getPirates } from './controller/pirateController.js'

const PORT = 9898
const app = express()

const upload = multer({dest: './public'})

app.use(morgan('dev'))
app.use('/public', express.static('public'))
app.use(cors())

app.get('/pirates', getPirates)
app.post('/pirates',upload.single('profilepic'), addPirate)

app.listen(PORT, () => console.log('Pirate Server boards on:',PORT,'ARRR ARRR'))