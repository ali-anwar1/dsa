const fs = require('node:fs/promises');
const path = require('node:path');

/**
 * Read the file directory structure and print all files and folders in a tree structure.
 */


/**
 * Recursively reads a directory and prints its structure as a tree.
 * @param {string} dirPath - The starting directory path.
 * @param {string} prefix - The string used for indentation (internal use).
 */
async function printTree(dirPath, prefix = '') {
    try {
        // Read directory contents with metadata to identify files vs folders
        const entries = await fs.readdir(dirPath, { withFileTypes: true });

        for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];
            const isLast = i === entries.length - 1;
            const connector = isLast ? '└── ' : '├── ';

            // Print the current file or folder name
            console.log(`${prefix}${connector}${entry.name}`);

            // If it's a directory, recurse into it
            if (entry.isDirectory()) {
                const newPrefix = prefix + (isLast ? '    ' : '│   ');
                const nextPath = path.join(dirPath, entry.name);
                await printTree(nextPath, newPrefix);
            }
        }
    } catch (err) {
        console.error(`Error reading directory: ${err.message}`);
    }
}

// Start printing from the current working directory
const startDir = process.cwd() + '/../src';
console.log(path.basename(startDir));
printTree(startDir);



/**
 employee table (id, name)
1, john
2, doe
3, alex
4, kim
5, ben

employee_salary table (employee_id, salary, department)
1, 500, IT
3, 600, IT
4, 100, Marketing
2, 200, Marketing	
5, 200, IT

Write a query to return the employee names with highest salary in each department.
 * 
 */

`SELECT e.name, es.salary, es.department
FROM employee e
JOIN employee_salary es ON e.id = es.employee_id
WHERE (es.department, es.salary) IN (
    SELECT department, MAX(salary)
    FROM employee_salary
    GROUP BY department
);`