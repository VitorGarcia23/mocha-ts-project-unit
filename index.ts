import { spawn } from 'child_process';

let file = '*';
let folder = 'suite';
let testName;

process.argv.forEach(arg => {
    if (arg.includes('--file=')) {
        file = arg.replace('--file=', '');
    }
    if (arg.includes('--folder=')) {
        folder = arg.replace('--folder=', '');
    }
    if (arg.includes('--test=')) {
        testName = arg.replace('--test=', '');
    }
});

const args = ['--opts', 'test/config/mocha.opts', `test/${folder}/${file}.test.ts`];

if (testName) {
    args.push('-g');
    args.push(testName);
}

spawn('mocha', args, { stdio: 'inherit', shell: true });
