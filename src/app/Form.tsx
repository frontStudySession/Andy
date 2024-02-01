import { TextInput } from "@app/components/Input/TextInput";
import { useForm } from "react-hook-form";

type FormType = {
    firstName: string
}

export const Form = () => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<FormType>()

    const firstName = register('firstName', {required: '필수 값', minLength: {
        value: 10,
        message: '최대 한 글자 이상 입력해야합니다.'
    }})

    return (
        <form onSubmit={handleSubmit((data) => {
            console.log(data)
        })}>
            <TextInput id="firstName" register={firstName} errors={errors} />
        </form>
    );
};