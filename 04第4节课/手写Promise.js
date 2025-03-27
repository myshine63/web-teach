class MyPromise {
    constructor(executor) {
        this.state = 'pending'; // 初始状态
        this.value = undefined; // 成功的值
        this.reason = undefined; // 失败的原因
        this.onFulfilledCallbacks = []; // 成功回调
        this.onRejectedCallbacks = []; // 失败回调

        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.onFulfilledCallbacks.forEach(fn => fn()); // 依次执行 then 里的成功回调
            }
        };

        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn => fn()); // 依次执行 then 里的失败回调
            }
        };

        try {
            executor(resolve, reject); // 执行传入的函数
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

        return new MyPromise((resolve, reject) => {
            if (this.state === 'fulfilled') {
                queueMicrotask(() => {
                    try {
                        const result = onFulfilled(this.value);
                        this.resolvePromise(resolve, reject, result);
                    } catch (error) {
                        reject(error);
                    }
                });
            } else if (this.state === 'rejected') {
                queueMicrotask(() => {
                    try {
                        const result = onRejected(this.reason);
                        this.resolvePromise(resolve, reject, result);
                    } catch (error) {
                        reject(error);
                    }
                });
            } else {
                // 处理异步情况
                this.onFulfilledCallbacks.push(() => {
                    queueMicrotask(() => {
                        try {
                            const result = onFulfilled(this.value);
                            this.resolvePromise(resolve, reject, result);
                        } catch (error) {
                            reject(error);
                        }
                    });
                });

                this.onRejectedCallbacks.push(() => {
                    queueMicrotask(() => {
                        try {
                            const result = onRejected(this.reason);
                            this.resolvePromise(resolve, reject, result);
                        } catch (error) {
                            reject(error);
                        }
                    });
                });
            }
        });
    }

    resolvePromise(resolve, reject, result) {
        if (result instanceof MyPromise) {
            result.then(resolve, reject); // 递归处理
        } else {
            resolve(result);
        }
    }
}

// 测试
const p = new MyPromise((resolve, reject) => {
    setTimeout(() => resolve('Hello, Promise!'), 1000);
});

p.then(res => {
    console.log(res); // 1 秒后打印 "Hello, Promise!"
    return 'Next Step';
}).then(res => {
    console.log(res); // 打印 "Next Step"
});
