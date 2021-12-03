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

// call back hell

const fouth = (callback) => {
    setTimeout(() => {
        console.log("one")
        callback()
    }, 5000)
}

const five = (callback) => {
    setTimeout(() => {
        console.log("Two")
        callback()

    }, 4000)
}

const six = (callback) => {
    setTimeout(() => {
        console.log("Three")
        callback()
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


//promise is a class two part of promise one is resolve and the other is reject. 
const seven = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('seven');
            resolve();
        }, 4000)
    })
}
const eight = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Eight')
            resolve()
        }, 2000)
    })
}
const nine = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Nine')
            resolve()
        }, 3000)
    })
}

seven().then(() => {
    eight().then(() => {
        nine().then(() => {
            console.log("Done it")
        })
    })
})

// Async await

// const run = async () => {
//     await seven();
//     await eight();
//     await nine();
// }

// run()

async function name() {
    await seven()
    await eight()
    await nine()
}

name()