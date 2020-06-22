import { PipeTransform, ArgumentMetadata, Injectable, BadRequestException } from "@nestjs/common";
import { plainToClass } from 'class-transformer'
import { valid } from "@hapi/joi";
import { validate } from "class-validator";
@Injectable()
export class Validation implements PipeTransform<any> {
    async transform(value: any, metadata: ArgumentMetadata) {
        if(!metadata.metatype || !this.toValidate(metadata.metatype)) {
            return value;
        }
        const object = plainToClass(metadata.metatype,value);
        const errors = await validate(object);
        if(errors.length > 0) {
            throw new BadRequestException('Validation failed');
        }
        return value;        
    }

    private toValidate(metatype: Function): boolean {
        const types: Function[] = [String,Boolean,Number,Array,Object];
        return !types.includes(metatype);
    }

}