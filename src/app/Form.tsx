import { Controller, FieldError, useForm } from 'react-hook-form';
import {
  Button,
  Form,
  Input,
  Preview,
  Section,
  Select,
  TotalWrap,
  errorStyle,
} from './Form.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useEffect, useState } from 'react';

type FormType = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  title: string;
  developer: 'Yes' | 'No';
  file?: ArrayBuffer;
};

const schema: yup.ObjectSchema<Omit<FormType, 'file'>> = yup
  .object({
    firstName: yup.string().required().min(1),
    lastName: yup.string().required().min(1),
    email: yup.string().email().required(),
    mobile: yup.string().min(10).max(11).required(),
    title: yup.string().required(),
    developer: yup.string().oneOf(['Yes', 'No']).required(),
  })
  .required();

export const SubmitForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormType>({
    resolver: yupResolver(schema),
    defaultValues: {
      developer: 'Yes',
    },
  });

  const onSubmitAction = (data: FormType) => {
    console.log(data);
    setData(data);
  };

  const [data, setData] = useState<FormType | null>(null);
  const [textFile, setTextFile] = useState<ArrayBuffer | string | null>(null);

  const initData = useCallback(() => {
    if (Object.keys(errors).length > 0) {
      setData(null);
    }
  }, [errors]);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setTextFile(fileReader.result);
      };
      fileReader.readAsText(file);
    }
  };

  useEffect(() => {
    initData();
  }, [initData]);

  return (
    <TotalWrap>
      <Form onSubmit={handleSubmit(onSubmitAction)}>
        <div>
          {/* FirstName Section */}
          <Section>
            <label htmlFor="firstName">FirstName</label>
            <Input
              {...register('firstName')}
              id="firstName"
              style={errorStyle(errors.firstName as FieldError)}
            />
          </Section>
          {/* LastName Section */}
          <Section>
            <label htmlFor="lastName">LastName</label>
            <Input
              {...register('lastName')}
              id="lastName"
              style={errorStyle(errors.lastName as FieldError)}
            />
          </Section>
          {/* Email Section */}
          <Section>
            <label htmlFor="email">Email</label>
            <Input
              {...register('email')}
              id="email"
              style={errorStyle(errors.email as FieldError)}
            />
          </Section>
          {/* Phone Number Section */}
          <Section>
            <label htmlFor="mobile">PhonNum</label>
            <Input
              {...register('mobile')}
              id="mobile"
              style={errorStyle(errors.mobile as FieldError)}
            />
          </Section>
          {/* Title Section */}
          <Section>
            <label htmlFor="title">Title</label>

            <Controller
              render={({ field }) => (
                <Select
                  {...field}
                  style={errorStyle(errors.title as FieldError)}
                >
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Dr">Dr</option>
                </Select>
              )}
              control={control}
              name="title"
              defaultValue="Mr"
            />
          </Section>
          {/* Title Section */}
          <Section>
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
          {/* File Section */}
          <Section>
            <Controller
              render={({ field }) => (
                <input
                  type="file"
                  accept="txt"
                  onChange={(e) => {
                    onFileChange(e);
                  }}
                />
              )}
              control={control}
              name="file"
            />
          </Section>
        </div>
        <Button onClick={handleSubmit(onSubmitAction)}>Submit</Button>
      </Form>
      <Preview>
        <p>미리보기</p>
        {!data && <p>데이터를 입력해주세요</p>}
        {data && (
          <div>
            <p>firstName: {data.firstName}</p>
            <p>lastName: {data.lastName}</p>
            <p>email: {data.email}</p>
            <p>phoneNum: {data.mobile}</p>
            <p>title: {data.title}</p>
            <p>developer: {data.developer}</p>
            <p>file: {textFile as string}</p>
          </div>
        )}
      </Preview>
    </TotalWrap>
  );
};
