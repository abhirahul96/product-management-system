import Joi, { ValidationResult } from 'joi';
import { AddProductDto } from '../dto/add-product.dto';

const schema = Joi.object({
  productName: Joi.string().required(),
  productDescription: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
  stockQuantity: Joi.number().required(),
});

async function productValidation(products: AddProductDto[]) {
  const errors: { index: number; fields: Record<string, string> }[] = [];

  products.forEach((obj, index) => {
    const { error }: ValidationResult<AddProductDto> = schema.validate(obj, {
      abortEarly: false,
    });

    const errorObj: { index: number; fields: any } = {
      index: index,
      fields: {},
    };
    if (error) {
      error.details.forEach(detail => {
        errorObj.fields[detail.context?.key || ''] = detail.message;
      });
      errors.push(errorObj);
    }
  });

  return errors;
}
export default productValidation;
