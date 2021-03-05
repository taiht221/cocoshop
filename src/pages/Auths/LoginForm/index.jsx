import React from 'react';
import PropTypes from 'prop-types';
import InputField from 'components/form-controls/InputField/Index';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Button, FormControl, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PasswordField from 'components/form-controls/PasswordField';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
  },
  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    margin: theme.spacing(2, 0, 4, 0),
    textAlign: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  },
}));

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    email: yup.string().required('Nhập email của bạn').email('Hãy nhập đúng định dạng email').trim(),
    // email: yup.string().required('Nhập họ và tên của bạn.'),
    password: yup.string().required('Nhập mật khẩu của bạn.'),
  });
  const form = useForm({
    defaultValues: {
      // có thể sử dụng giá trị "" hoặc null thay thế tùy
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };
  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlined />
      </Avatar>
      <Typography component="h3" variant="h5" className={classes.title}>
        Đăng nhập
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField form={form} name="email" label="Email" />
        <PasswordField form={form} name="password" label="Mật Khẩu" />
        <Button type="submit" variant="contained" color="primary" fullWidth className={classes.submit} size="large">
          Đăng nhập
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
