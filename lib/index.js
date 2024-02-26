const fs = require('fs');
const path = require('path');
const library = require('./library');
const Handlebars = require("handlebars");
const prettier = require('prettier');

const filesToIgnore = [
    '.DS_Store',
    'Thumbs.db',
];

const filesAllowed = [
    'jpeg',
    'png',
    'jpg',
    'gif',
    'svg',
]

function isDirectory(filePath) {
    try {
        const stats = fs.statSync(filePath);
        return stats.isDirectory();
    } catch (error) {
        return false;
    }
}

async function generateJsonForFolder(folderPath, rootPath) {
    const folderName = path.basename(folderPath);
    const files = fs.readdirSync(folderPath);
    const fileList = [];
    for (const file of files) {
        const filePath = path.join(folderPath, file); // Concatenate with folderPath instead of rootPath
        if (isDirectory(filePath)) {
            generateJsonForFolder(filePath, rootPath); // Pass rootPath to the recursive call
        } else {
            fileList.push(file);
        }
    }
    const images = fileList.reduce((acc, file) => {
        const fileName = path.basename(file, path.extname(file));
        const extension = path.extname(file);
        if (filesToIgnore.includes(fileName) != true && filesAllowed.filter(item => extension.includes(item)).length > 0) {
            acc.push({ name: library.imageName(fileName), path: "./" + file })
        }
        return acc;
    }, []);

    if (images.length > 0) {
        let template = Handlebars.compile(`const {{name}} = {
    {{#each images}}
    '{{name}}': require('{{path}}'){{#unless @last}},{{/unless}} 
    {{/each}} 
};
export default {{name}}
        `);
        let render = template({ name: `${library.toCapitalLetterCase(folderName)}Assets`, images })
        const formattedCode = await prettier.format(render, {
            semi: true,
            singleQuote: true,
            tabWidth: 2,
            parser: 'babel',
        });
        fs.writeFileSync(`${folderPath}/index.js`, formattedCode);
    }
}


function generateJsonForFolders({
    rootPath,
    assets
}) {
    console.log("Let's generate JSON files => ", assets)
    if (Array.isArray(assets)) {
        try {
            for (const folder of assets) {
                generateJsonForFolder(folder, rootPath);
            }
            console.log('✓ Done');
        } catch (error) {
            console.log('X an error occurred => ', error);
        }
    }
}

module.exports = generateJsonForFolders;
