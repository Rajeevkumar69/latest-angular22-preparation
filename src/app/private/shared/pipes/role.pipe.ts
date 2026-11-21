
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
     name: 'role',
     // pure:true // by-default it's pure if we want to make it impure we can set that value as false
})
export class RolePipe implements PipeTransform {

     transform(data: string): string {
          const roles: Record<string, string> = {
               developer: 'Software Developer',
               manager: 'Project Manager',
               designer: 'UI/UX Designer'
          };

          return roles[data] ?? data;
     }
}