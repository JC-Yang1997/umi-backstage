export default {
  run: () => {
    console.log(process.env.DEPLOY_ENV)
    console.log('************************')
    function hello(template: any, name: any, age: any): void {
      // 编译成 js 后执行可看到结果
      console.log(template) // 结果是“hello my name is ”和“, I'm ”和“ !”组成的数组
      console.log(name) // xiaozhang
      console.log(age) // 18
    }

    var myName = 'xiaozhang'
    var getAge = function () {
      return 18
    }

    hello`hello my name is ${myName}, I'm ${getAge()} !`

    console.log('************************')

    function test(a: string = 'aa', b?: string, c: string = 'cc') {
      console.log(a)
      console.log(b)
      console.log(c)
    }
    test('xxx', 'yyy', 'zzz')
    test('xx') // xx undefined cc

    console.log('************************')

    function* doSomething() {
      console.log('start')
      yield
      console.log('finish')
    }

    var func1 = doSomething()
    // 第一次调用 next() 会执行到 yield 处暂停下来，第二次调用再执行 yield 下面的代码
    func1.next() // start
    func1.next() // finish

    console.log('************************')

    var arr = [1, 2, 3, 4]

    for (var ii of arr) {
      // 可被打断
      if (ii > 2) break
      console.log(ii) // 1, 2
    }

    console.log('************************')

    class Person {
      constructor(public name: string) { }
    }

    class Employee extends Person {
      code: string
      constructor(name: string, code: string) {
        super(name)
        this.code = code
      }
    }

    var workers: Array<Person> = [] // 为 workers 指定 Person 泛型
    workers[0] = new Person('xiaoA') // 可以
    workers[1] = new Employee('xiaoB', '123') // 可以
    console.log(workers, workers[0].name)
    // workers[2] = '2' // 不可以 Type '2' is not assignable to type 'Person'.

    console.log('************************')

    // 声明一个接口，并在接口里声明一个方法
    // 所有声明实现这个接口的类都必须要实现这个方法
    interface Animal {
      eat(food: string): any
    }

    // 定义一个 Sheep 类，让他实现 Animal 接口，并实现 Animal 接口里的所有方法
    class Sheep implements Animal {
      eat(food: string) {
        console.log(`i eat ${food}`)
      }
    }

    var sheepA = new Sheep()
    sheepA.eat('qq糖')
  }
}