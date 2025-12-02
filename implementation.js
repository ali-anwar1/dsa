const fs = require("fs");
const path = require("path");

const folderPath = "problems"; // CHANGE THIS

if (!fs.existsSync(folderPath)) {
    console.log("❌ Path does not exist:", folderPath);
} else {
    fs.readdir(folderPath, (err, items) => {
        if (err) throw err;

        items.forEach(item => {
            const fullPath = path.join(folderPath, item);
            const stats = fs.statSync(fullPath);

            if (stats.isDirectory()) {
                console.log("📂 Folder:", fullPath);
            } else if (stats.isFile()) {
                console.log("📄 File:", fullPath);
            }
        });
    });
}


function listRecursive(folderPath) {
    if (!fs.existsSync(folderPath)) {
        console.log("❌ Path does not exist:", folderPath);
        return;
    }

    const items = fs.readdirSync(folderPath);

    items.forEach(item => {
        const fullPath = path.join(folderPath, item);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
            console.log("📂 Folder:", fullPath);
            listRecursive(fullPath);     // <-- recurse
        } else if (stats.isFile()) {
            console.log("📄 File:", fullPath);
        }
    });
}

listRecursive(folderPath)



function readTxtRecursive(folderPath) {
    const items = fs.readdirSync(folderPath);

    items.forEach(item => {
        const fullPath = path.join(folderPath, item);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
            readTxtRecursive(fullPath);
        } else if (stats.isFile() && fullPath.endsWith(".txt")) {
            console.log(`\n📄 Reading: ${fullPath}`);
            try {
                const content = fs.readFileSync(fullPath, "utf8");
                console.log(content);
            } catch (err) {
                console.log("⚠️ Could not read file:", fullPath, err.message);
            }
        }
    });
}

readTxtRecursive(folderPath);