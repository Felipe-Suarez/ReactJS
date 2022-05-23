let verify = true;

const promiseFunction = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (verify) {
                resolve(task);
            }
            else {
                reject('Error')
            }
        }, time)
    })
}

export default promiseFunction;