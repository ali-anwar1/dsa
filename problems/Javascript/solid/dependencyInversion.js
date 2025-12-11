// ❌ Violation: High-level module depends on low-level module
class MySQLDatabase {
    save(data) {
        console.log("Saving data in MySQL");
    }
}

class UserService {
    constructor() {
        this.database = new MySQLDatabase();
    }

    saveUser(user) {
        this.database.save(user);
    }
}

// ✅ Following DIP: Depend on abstraction
class Database {
    save(data) { }
}

class MySQLDatabase extends Database {
    save(data) {
        console.log("Saving data in MySQL");
    }
}

class UserService {
    constructor(database) {
        this.database = database; // Inject dependency
    }

    saveUser(user) {
        this.database.save(user);
    }
}

const db = new MySQLDatabase();
const userService = new UserService(db);
userService.saveUser({ name: "Ali" });