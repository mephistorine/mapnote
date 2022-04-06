import { ClassProvider, forwardRef, Type } from "@angular/core"
import { NG_VALUE_ACCESSOR } from "@angular/forms"

export function createValueAccessor<T>(ctor: () => Type<T>): ClassProvider {
  return {
    provide: NG_VALUE_ACCESSOR,
    useClass: forwardRef(ctor),
    multi: true
  }
}
