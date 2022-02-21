const Database = require("jsondatabase");
const Base64 = require('js-base64');
const shell = require('shelljs');
var child_process = require('child_process');
const inquirer = require('inquirer');
const dashboard = require('./dashboardCode')
const index = require('./index.js')
// ^ ^ IMPORTS ^ ^


function BACKUP() {
    console.clear()




    inquirer
    .prompt([
        {
        type: 'list',
        name: 'dashboard',
        message: 'Are you sure you want to backup?',
        choices: ['Yes', 'Cancel'],
        },
    ])
    
    .then(answers => {
        // console.info('Answer:', answers.dashboard);
        if (answers.dashboard === 'Yes') {
            
            index.backup()
            return;
        } else {
            console.clear();
            DASHBOARD()
        }
    });
}

function RESTOREBACKUP() {
    console.clear()

    console.clear()


    inquirer
    .prompt([
        {
        type: 'list',
        name: 'dashboard',
        message: 'Are you sure you want to delete all users?',
        choices: ['Yes', 'Cancel'],
        },
    ])
    
    .then(answers => {
        // console.info('Answer:', answers.dashboard);
        if (answers.dashboard === 'Yes') {
            let keys = db.keys('')
            console.log('Starting...')
            for (let i = 0; i < keys.length; i++) {
                console.log('Deleting: ' + keys[i])
                db.kdel(keys[i])
            }
            console.log('Done!')
            return;
        } else {
            console.clear();
            DASHBOARD()
        }
    });
}

function PURGEUSERS() {
    console.clear()


    inquirer
    .prompt([
        {
        type: 'list',
        name: 'dashboard',
        message: 'Are you sure you want to delete all users?',
        choices: ['Yes', 'Cancel'],
        },
    ])
    
    .then(answers => {
        // console.info('Answer:', answers.dashboard);
        if (answers.dashboard === 'Yes') {
            let keys = db.keys('')
            console.log('Starting...')
            for (let i = 0; i < keys.length; i++) {
                console.log('Deleting: ' + keys[i])
                db.kdel(keys[i])
            }
            console.log('Done!')
            return;
        } else {
            console.clear();
            DASHBOARD()
        }
    });

}

function DASHBOARD() {

    inquirer
    .prompt([
        {
        type: 'list',
        name: 'dashboard',
        message: 'Dashboard Open. Choose an option:',
        choices: ['Purge Users', 'Restore Backup', 'Backup', new inquirer.Separator(), 'Close (Restarts API bc im stupid)'],
        },
    ])
    .then(answers => {
        //console.info('Answer:', answers.dashboard);
        if (answers.dashboard === 'Purge Users') {
            console.clear()
            PURGEUSERS()
        } else if (answers.dashboard === 'Backup') {

            BACKUP()
        } else if (answers.dashboard === 'Close (Restarts API bc im stupid)') {
            console.clear()
            process.exit(0)
        }
    });
}

module.exports = {RESTOREBACKUP, PURGEUSERS, DASHBOARD}