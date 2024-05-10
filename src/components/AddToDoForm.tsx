"use client";

// React Imports
import React from "react";

// Redux Imports
import { useDispatch } from "react-redux";
import { addTodo } from "@/redux/todoSlice";

// Third part Imports
import * as yup from "yup";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// UI Components Imports
import FormInput from "@/components/FormComponents/Input";
import { Button, Grid } from "@mui/material";

const defaultValues: TodoFormState = {
  title: "",
  description: "",
};

const schema = yup.object().shape({
  title: yup
    .string()
    .min(3, "Todo Title must be of atleast 3 Characters")
    .required("Todo Title is required"),
  description: yup.string().optional(),
});

const AddTodoForm: React.FC = () => {
  const dispatch = useDispatch();

  const {
    control,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<TodoFormState>({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const submitForm: SubmitHandler<TodoFormState> = async (data, e) => {
    e?.preventDefault();
    try {
      dispatch(addTodo(data));
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="space-y-6 p-6 flex flex-col w-full"
      method="POST"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(submitForm)}
    >
      <h1 className="font-semibold text-2xl mt-6 text-center">Todo Form</h1>
      <Grid
        container
        spacing={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} md={6}>
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormInput
                label="Todo Title"
                id="title"
                type="text"
                autoComplete="title"
                {...field}
                error={errors.title?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="description"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormInput
                label="Description"
                id="description"
                type="text"
                autoComplete="description"
                {...field}
                error={errors.description?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Button
            className="px-6 h-full w-full"
            variant="contained"
            type="submit"
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddTodoForm;
