import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpaces'
})
export class RemoveSpacesPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value; // If value is null or undefined, return it as is
    return value.replace(/-/g, ' '); // Replace dashes with empty spaces globally
  }
}
