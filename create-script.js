var fs = require('fs');
var path = require('path');
var inquirer = require('inquirer');
var changeCase = require('change-case')


// fs.writwriteFileSynceFile(filename, data);

var helper = {
    // создание директории
    _mkdirSync: function(dirpath) {
        var parts = dirpath.split(path.sep),
            _path,
            stats;

        for (var i = 1; i <= parts.length; i++) {
            _path = path.join.apply(null, parts.slice(0, i));

            try {
                stats = fs.lstatSync(_path);
            } catch (e) {
                stats = null;
            }

            if (stats && stats.isDirectory()) {
                continue;
            }
            fs.mkdirSync(_path);
        }
    },
    // создание файла
    make: function(path, file, data) {
        file = changeCase.paramCase(file);

        this._mkdirSync(path);
    }
};






// выбор для создания элемента
inquirer.prompt([{
            type: 'list',
            name: 'el_type',
            message: 'Choose type of new element',
            choices: [
                new inquirer.Separator(),
                'component',
                'page',
                'action',
                new inquirer.Separator()
            ],
            filter: function(val) {
                return val.toLowerCase();
            }
        },
        {
            type: 'input',
            name: 'el_name',
            message: 'Name of element'
        }
    ])
    .then(function(answers) {
        var _p = 'src/js/';
        switch (answers['el_type']) {
            case 'component':
                _p += 'components/';
                break;
            case 'page':
                _p += 'pages/';
                break;
            case 'action':
                _p += 'actions/';
                break;
        }

        _p += changeCase.paramCase(answers['el_name']);

        helper.make(_p, answers['el_name'], _src[answers['el_type']]);
    })
    .then(function(data) {

    });




// =====
var _src = {
    component: (name) => {
        name = changeCase.pascalCase(name);

        return `
import React from "react"; 

export default class ${name} extends React.Component {
    render() {
        return (
            <h1>Hello world</h1>
        );
    }
};
        `
    }
};