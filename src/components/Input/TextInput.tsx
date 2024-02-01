import { TextInputType } from "../types/Input/input.types";
import { useForm } from 'react-hook-form'

export const TextInput = ({
    id,
    register,
    errors
}: TextInputType) => {

    console.log(errors)

    return (
        <div>
            <label htmlFor={id}></label>
            <input id={id} {...register} />
        </div>
    );
};