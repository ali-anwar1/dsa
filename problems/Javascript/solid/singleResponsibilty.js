// ❌ Violation: User class does too much
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    saveToDatabase() {
        // logic to save user
    }

    sendEmail(message) {
        // logic to send email
    }
}

// ✅ Following SRP: separate responsibilities
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class UserRepository {
    save(user) {
        console.log(`Saving ${user.name} to database`);
    }
}

class EmailService {
    sendEmail(user, message) {
        console.log(`Sending email to ${user.email}: ${message}`);
    }
}

// Usage
const user = new User("Ali", "ali@example.com");
const repo = new UserRepository();
const emailService = new EmailService();

repo.save(user);
emailService.sendEmail(user, "Welcome!");