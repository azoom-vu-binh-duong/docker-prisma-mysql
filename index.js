import express from "express"
import logger from "morgan"
import nnn from 'nnn-router'
import router from 'express-promise-router'

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const options = {
    routeDir: '/routes', // DEFAULT '/routes'
    baseRouter: router()   // NOT RQUIRED
}
app.use(nnn(options))

const port = 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})