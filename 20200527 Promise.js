class MyPromise {
    #thenTasks = []
    #rejectTasks = []
    constructor(func) {
        // three status of Promise
        // 'pending', 'fullfilled', 'rejected'
        // the status is irreversible
        this.PromiseStatus = 'pending'
        // execute immidiately once Promise created
        func(this.#resolve, this.#reject)
    }
    // pass res to the function
    // the task execute in 'next tick'
    #resolve (res) {
        setTimeout(() => {
            for (let i = 0; i < this.#thenTasks.length; i++) {
                this.#thenTasks[i](res)
            }
            this.PromiseStatus = 'fullfilled'
        })
    }
    #reject (error) {
        setTimeout(() => {
            for (let i = 0; i < this.#rejectTasks.length; i++) {
                this.#rejectTasks[i](error)
            }
            this.PromiseStatus = 'rejected'
        })
    }
    then (funcThen, funcCatch) {
        funcThen && this.#thenTasks,push(funcThen)
        funcCatch && this.#rejectTasks,push(funcCatch)
    }
    catch (funcThen) {
        this.#rejectTasks,push(funcThen)
    }
}