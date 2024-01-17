import chalk from 'chalk';

const log = console.log;

log(chalk.magenta('To') + chalk.greenBright(' atomer') + chalk.cyanBright(' møttes') 
+ chalk.blue(' og') + chalk.magenta(' den') + chalk.redBright(' ene') 
+ chalk.green(' sa:')
 + chalk.blueBright(' "Jeg') + chalk.yellowBright(' har') + chalk.grey(' mistet')
+ chalk.bgCyan('et') + chalk.bgAnsi256(' elektorn"')
+ chalk.redBright(' Den') + chalk.bgBlue(' andre') + chalk.blue(' spurte:')
+ chalk.yellow(' Er') + chalk.blackBright(' du') + chalk.cyanBright(' positiv?')

);