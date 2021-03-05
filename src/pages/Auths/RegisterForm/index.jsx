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

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    fullName: yup.string().required('Nhập họ và tên của bạn.').trim(),
    // .test('should has at least two words', 'Hãy nhập đầy đủ họ và tên ít nhất 2 từ', (value) => {
    //   return value.spilt(' ').length >= 2;
    // }),
    email: yup.string().required('Nhập email của bạn').email('Hãy nhập đúng định dạng email').trim(),
    // email: yup.string().required('Nhập họ và tên của bạn.'),
    password: yup
      .string()
      .required('Nhập mật khẩu của bạn.')
      .trim()
      .matches(
        '^(?=.*[0-9])(?=.*[A-Z]).{8,32}$',
        'Xin hãy nhập ít nhất 8 dài nhất 32 kí tự,có một kí tự viết hoa, có một chữ số  '
      ),
    retypePassword: yup
      .string()
      .required('Nhập lại mật khẩu của bạn.')
      .oneOf([yup.ref('password')], 'mật khẩu không trùng khớp'),
  });
  const form = useForm({
    defaultValues: {
      // có thể sử dụng giá trị "" hoặc null thay thế tùy
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
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
        Tạo tài khoản
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField form={form} name="fullName" label="Họ và tên" />
        <InputField form={form} name="email" label="Email" />
        <PasswordField form={form} name="password" label="Mật khẩu" />
        <PasswordField form={form} name="retypePassword" label="Nhập lại mật khẩu" />
        <Button type="submit" variant="contained" color="primary" fullWidth className={classes.submit} size="large">
          Đồng ý
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
