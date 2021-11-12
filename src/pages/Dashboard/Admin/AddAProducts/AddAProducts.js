import React from 'react';
import { makeStyles } from '@mui/styles';
import { useForm } from "react-hook-form";
import { Box } from '@mui/system';
import { Container, TextField, Typography } from '@mui/material';
import MuiButton from '../../../../StyledComponent/MuiButton';
const AddAProducts = () => {
  const Swal = require('sweetalert2');
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    fetch(`https://bike-buzz.herokuapp.com/addProducts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        if (result.acknowledged) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Products added successfully',
            showConfirmButton: false,
            timer: 1500
          })
        }
      }).finally(() => {
        reset()
      })
  };

  const useStyle = makeStyles({
    textArea: {
      width: '100%',
      margin: '20px 0',
      borderRadius: 3,
      fontFamily: 'inherit',
      padding: 15
    }
  })
  const { textArea } = useStyle()
  return (
    <Container>
      <Box >
        <Typography variant="h5" sx={{ fontWeight: 600, pb: 3 }}>Add a Products</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>

          <TextField style={{ width: '100%' }} label="Products name"  {...register("name")} type="text" variant="outlined" required />
          <br />
          <br />
          <TextField style={{ width: '100%' }} label="Price"  {...register("price")} type="number" variant="outlined" required />
          <br />
          <br />
          <TextField style={{ width: '100%' }} label="Images url"  {...register("img")} type="text" variant="outlined" required />

          <textarea className={textArea} rows={5} placeholder="Description" {...register("description")} /> <br required />

          {errors.exampleRequired && <span>This field is required</span>}
          <MuiButton variant="outlined" type="submit">Submit</MuiButton>
        </form>
      </Box>
    </Container>
  );
};

export default AddAProducts;