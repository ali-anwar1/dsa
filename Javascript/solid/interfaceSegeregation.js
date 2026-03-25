// ❌ Violation: One interface with too many methods
class Worker {
    work() { }
    eat() { }
}

// Robot doesn’t need eat()
class Robot extends Worker {
    work() {
        console.log("Robot working");
    }
    eat() {
        throw new Error("Robot doesn't eat");
    }
}

// ✅ Following ISP: Split interfaces
class Workable {
    work() { }
}

class Eatable {
    eat() { }
}

class Human extends Workable {
    work() { console.log("Human working"); }
    eat() { console.log("Human eating"); }
}

class Robot extends Workable {
    work() { console.log("Robot working"); }
}