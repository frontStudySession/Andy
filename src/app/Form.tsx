import { TextInput } from '@app/components/Input/TextInput';
import { useForm } from 'react-hook-form';

type FormType = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNum: number;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();

  const firstName = {
    register: register('firstName', {
      required: '필수 값',
      minLength: {
        value: 1,
        message: '최대 한 글자 이상 입력해야합니다.',
      },
    }),
    errors: errors.firstName,
  };
  const lastName = {
    register: register('lastName', {
      required: '필수 값',
      minLength: {
        value: 1,
        message: '최대 한 글자 이상 입력해야합니다.',
      },
    }),
    errors: errors.lastName,
  };
  const email = {
    register: register('email', {
      pattern: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }),
    errors: errors.email,
  };
  const mobileNum = {
    register: register('mobileNum', {
      required: '필수 값',
      minLength: {
        value: 11,
        message: '최대 11글자 이상 입력해야합니다.',
      },
    }),
    errors: errors.mobileNum,
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <TextInput
        id="firstName"
        register={firstName.register}
        error={firstName.errors}
        placeholder={'First Name'}
      />
      <TextInput
        id="lastName"
        register={lastName.register}
        error={lastName.errors}
        placeholder={'Last Name'}
      />
      <TextInput
        id="email"
        register={email.register}
        error={email.errors}
        placeholder={'Email'}
      />
      <TextInput
        id="mobileNum"
        register={mobileNum.register}
        error={mobileNum.errors}
        placeholder={'Mobile Number'}
      />
    </form>
  );
};
