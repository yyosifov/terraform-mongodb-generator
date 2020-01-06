import * as fs from 'fs';
import * as Handlebars from 'handlebars';

// TODO: load and cache all templates recursively.
const vpcTemplate = fs.readFileSync('templates/vpc/vpc.tf.mustache', 'utf8');

const vpcTemplateCompiled = Handlebars.compile(vpcTemplate);
// TODO: These should not be replaced, but used as variables
// at least variables.tf + main.tf should be generated, too
const result = vpcTemplateCompiled({
    vpc_cidr_block: '10.10.1.0/24'
});

console.log(result);

/*
TODO:

1. Values should not be replaced, but used as variables at least variables.tf + main.tf
 should be generated, too

2. The code should be outputted as different modules
*/
