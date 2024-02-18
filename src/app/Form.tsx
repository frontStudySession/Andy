import { FieldError, useForm } from 'react-hook-form';
import { Button, Form, Input, Section, Select, errorStyle } from './Form.css';

type FormType = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: number;
  title: string;
  developer: 'Yes' | 'No';
};

export const SubmitForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    defaultValues: {
      developer: 'Yes',
    },
  });

  const onSubmitAction = (data: FormType) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmitAction)}>
      <div>
        {/* FirstName Section */}
        <Section>
          <label htmlFor="firstName">FirstName</label>
          <Input
            {...register('firstName', {
              required: true,
              minLength: 1,
            })}
            id="firstName"
            style={errorStyle(errors.firstName as FieldError)}
          />
        </Section>
        {/* LastName Section */}
        <Section>
          <label htmlFor="lastName">LastName</label>
          <Input
            {...register('lastName', {
              required: true,
              minLength: 1,
            })}
            id="lastName"
            style={errorStyle(errors.lastName as FieldError)}
          />
        </Section>
        {/* Email Section */}
        <Section>
          <label htmlFor="email">Email</label>
          <Input
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            })}
            id="email"
            style={errorStyle(errors.email as FieldError)}
          />
        </Section>
        {/* Phone Number Section */}
        <Section>
          <label htmlFor="mobile">PhonNum</label>
          <Input
            {...register('mobile', {
              required: true,
              pattern: /^[0-9]*$/,
              minLength: 10,
              maxLength: 11,
            })}
            id="mobile"
            style={errorStyle(errors.mobile as FieldError)}
          />
        </Section>
        {/* Title Section */}
        <Section>
          <label htmlFor="title">Title</label>
          <Select {...register('title', { required: true })}>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
          </Select>
        </Section>
        {/* Title Section */}
        <Section>
          <label htmlFor="developer">Developer</label>
          <div>
            <input
              {...register('developer', { required: true })}
              type="radio"
              value="Yes"
            />
            <span>Yes</span>
          </div>
          <div>
            <input
              {...register('developer', { required: true })}
              type="radio"
              value="No"
            />
            <span>No</span>
          </div>
        </Section>
      </div>
      <Button onClick={handleSubmit(onSubmitAction)}>Submit</Button>
    </Form>
  );
};
