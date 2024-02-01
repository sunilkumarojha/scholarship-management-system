import React from 'react';
import { useForm } from 'react-hook-form';
import './DynamicForm.css';

const DynamicForm = ({ studentData, onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmitHandler = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      {/* Render form fields dynamically based on studentData */}
      {Object.keys(studentData).map((fieldName) => (
        <div key={fieldName}>
          <label>{fieldName}</label>
          <input {...register(fieldName, { required: true })} />
          {errors[fieldName] && <span>This field is required</span>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
