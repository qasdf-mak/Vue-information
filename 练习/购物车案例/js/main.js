const app = new Vue({
    el: '#app',
    data: {
        books: [{
                id: 1,
                name: "算法异论",
                date: "2006-9",
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: "UNIX编程艺术",
                date: "2006-2",
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: "编程珠玑",
                date: "2008-10",
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: "代码大全",
                date: "2006-3",
                price: 128.00,
                count: 1
            },
            {
                id: 5,
                name: "JavaScript基础",
                date: "2010-5",
                price: 148.00,
                count: 1
            },
        ]
    },
    methods: {
        // 点击 - 
        reduce(index) {
            this.books[index].count--
        },
        // 点击 + 
        increase(index) {
            this.books[index].count++
        },
        // 删除列表
        deleteList(index) {
            this.books.splice(index, 1)
        },
    },
    computed: {
        total() {
            // 1. 原始方法
            // let total1 = 0
            // for (let i in this.books) {
            //     total1 += this.books[i].price * this.books[i].count
            // }
            // console.log(total1)
            // 2. 高阶函数
            return this.books.reduce(function(preValue, book) {
                    return preValue + book.price * book.count
                }, 0)
                // 3. 高阶函数 + 箭头函数
                // return this.books.reduce((pre, book) => { pre + book.price * book.count }) 
        }
    },
    filters: {
        getUltimatelyprice(price) {
            return price.toFixed(2)
        }
    }
})

// let ary = [10, 15, 12, 13, 33, 23, 22, 25, 29, 30, 50]
//高阶函数(属于方法)
// let newAry = ary.filter(n => n < 30)
// console.log(newAry)
// map  1个参数
// let newAry1 = newAry.map(n => n * 2)
// console.log(newAry1);
// reduce 两个参数 (第一个是pre)(第二个是所传的值)
// let newAry2 = newAry1.reduce((preValue, n) => preValue + n)
// console.log(newAry2);