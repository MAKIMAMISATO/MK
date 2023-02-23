// 1
const concat = (str1: string, str2: string): string =>{
  return str1 + ' ' + str2
}

concat('Hello', 'World')
console.log(concat('Hello', 'World'))

// 2
interface INya {
  howIDoIt: string,
  simeArray: (string | number)[],
  withData: { howIDoIt: string, simeArray: (string | number)[] }[],
}

const MyHometask: INya = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

// 3
interface MyArray<T> {
  [key: number]: T;
  reduce<T>(fn: (acc: T, el: T) => T, initial? : T): T;
}

const myArray: MyArray<number> = [1,2,3]
console.log(myArray.reduce((accumulator, value) => accumulator + value, 0))

// 4
interface IHomeTask {
  data: string
  numbericData: number
  date: Date
  externalData: {
      basis: number
      value: string
  }
}

type MyPartial<T> = {
  [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}

const homeTask: MyPartial<IHomeTask> = {
  externalData: {
    value: 'win'
  }
}
