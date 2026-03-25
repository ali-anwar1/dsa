// Example object
const person = {
    firstName: "Ali",
    lastName: "Anwar",
    fullName: function (city, country) {
        return `${this.firstName} ${this.lastName} from ${city}, ${country}`;
    }
};

// 1️⃣ Using call()
// call() calls the function immediately with a given `this` value and arguments passed individually
const resultCall = person.fullName.call({ firstName: "Sara", lastName: "Khan" }, "Islamabad", "Pakistan");
console.log("Using call():", resultCall);

const resultFn = person.fullName("Islamabad", "Pakistan")
console.log("Using without call():", resultFn);

// Output: Sara Khan from Islamabad, Pakistan

// 2️⃣ Using apply()
// apply() is similar to call(), but arguments are passed as an array
const resultApply = person.fullName.apply({ firstName: "Omar", lastName: "Ali" }, ["Lahore", "Pakistan"]);
console.log("Using apply():", resultApply);
// Output: Omar Ali from Lahore, Pakistan

// 3️⃣ Using bind()
// bind() returns a new function with `this` bound to the given object. Arguments can also be pre-set
const boundFunction = person.fullName.bind({ firstName: "Aisha", lastName: "Raza" }, "Karachi", "Pakistan");
console.log("Using bind():", boundFunction());
console.log("Using bind():", boundFunction("Wazirabad", "Gujranwala"));

// Output: Aisha Raza from Karachi, Pakistan

// ✅ Practice Tip:
// - call(): function is executed immediately
// - apply(): function is executed immediately, arguments in array
// - bind(): function is not executed immediately, returns a new function



// Define a class
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName(city, country) {
        return `${this.firstName} ${this.lastName} from ${city}, ${country}`;
    }
}

// Create an instance
const ali = new Person("Ali", "Anwar");

// 1️⃣ Using call()
// Call the method of ali but with another object as `this`
const resultCallClass = ali.fullName.call({ firstName: "Sara", lastName: "Khan" }, "Islamabad", "Pakistan");
console.log("Using call():", resultCall);
// Output: Sara Khan from Islamabad, Pakistan

// 2️⃣ Using apply()
// Apply is similar, but arguments are passed as an array
const resultApplyClass = ali.fullName.apply({ firstName: "Omar", lastName: "Ali" }, ["Lahore", "Pakistan"]);
console.log("Using apply():", resultApply);
// Output: Omar Ali from Lahore, Pakistan

// 3️⃣ Using bind()
// Bind returns a new function with `this` set to the provided object
const boundFunctionClass = ali.fullName.bind({ firstName: "Aisha", lastName: "Raza" }, "Karachi", "Pakistan");
console.log("Using bind():", boundFunction());
// Output: Aisha Raza from Karachi, Pakistan

// 4️⃣ Optional: dynamic bind
const anotherPerson = new Person("Zoraiz", "Ali");
const dynamicBind = ali.fullName.bind(anotherPerson);
console.log("Dynamic bind:", dynamicBind("Multan", "Pakistan"));
// Output: Faisal Shah from Multan, Pakistan