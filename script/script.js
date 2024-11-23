class Employee{
    constructor(name, surname, company){
        this.name = name;
        this.surname = surname;
        this.company = company;
    }   

    getFullName(){
        return `${this.name} ${this.surname}`
    }
}

class Developer extends Employee{
    constructor(name, surname, company){
        super(name, surname, company);
    }

    getCompany(){
        return `${this.company}`;
    }
}

let employee = new Employee("Nikita", "Shevchenko", "Apple");
console.log(employee.getFullName());
let developer = new Developer("John", "Done", "Valve");
let developer2 = new Developer("Иван", "Иванов", "TechCorp");
console.log(developer.getCompany());
console.log(developer2.getFullName());
console.log(developer2.getCompany());



class Shape{
    constructor(className){
        this.element = document.createElement("div");
        this.element.classList.add("shape", className);
    }

    render(){
        document.body.append(this.element);
    }
}
class Circle extends Shape{
    constructor(){
        super("circle");
    }


    //ВАЖНО!!!
    ///Поскольку я не знал точно, каким именно способом Вы хотели видеть решение, я решил написать сразу два,
    ///но из-за того, что я не помню, чтобы мы проходили метод Object.entries, я решил использовать for...in

    // setStyle(value){
    //     Object.entries(value).forEach(([el, index]) => {
    //         this.element.style[el] = index;
    //     })     
    // }

    setStyle(value){
        for (const el in value) {
            this.element.style[el] = value[el];
        }
    }
}

class Rectangle extends Shape{
    constructor(){
        super("rectangle");
    }

    setStyle(value){
        for (const el in value) {
            this.element.style[el] = value[el];
        }
    }
}


let circle = new Circle();
circle.render();
circle.setStyle({background: "blue"});

let rectangle = new Rectangle();
rectangle.render();
rectangle.setStyle({width: "300px"});


