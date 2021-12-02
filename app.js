const one = () => {
    setTimeout(() => {
        console.log('one')
    }, 3000)
}

const two = () => {
    setTimeout(() => {
        console.log('two')

    }, 4000)
}

const three = () => {
    setTimeout(() => {
        console.log('Three')
    }, 2000)
}
one()
two()
three()



const fouth = (callback) => {
    setTimeout(() => {
        console.log("one")
    }, 5000)
}

const five = (callback) => {
    setTimeout(() => {
        console.log("Two")

    }, 4000)
}

const six = (callback) => {
    setTimeout(() => {
        console.log("Three")
    }, 3000)
}

// call back hell
fouth(() => {
    five(() => {
        six(() => {
            console.log("Finaly done it ")
        })
    })
})


//promise