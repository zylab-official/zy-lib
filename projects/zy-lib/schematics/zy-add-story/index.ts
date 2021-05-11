import {
    Rule, Tree
} from '@angular-devkit/schematics';
import { Schema as MyServiceSchema } from './schema';



export function myService(options: MyServiceSchema): Rule {
    return (tree: Tree) => {
        // @TODO: Extend with https://angular.io/guide/schematics-for-libraries#define-a-generation-rule
        return tree;
    };
}