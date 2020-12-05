const util = require('util')
const sleep = util.promisify(setTimeout)

module.exports = {
    async taskOne (){
        try{
            await sleep(4000)
            return 'TASK ONE'
        }catch(e){
            console.log(e)
        }
    },
    async taskTwo (){
        try{
            throw new Error('ONE ERRORRR')
            await sleep(2000)
            return 'TASK TWO'
        }catch(e){
            console.log(e)
        }
    }
}