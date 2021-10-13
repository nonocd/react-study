import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, message } from 'antd';
import useLoginService from './useLoginService';

export interface LoginParam {
  account: string;
  password: string;
  type: string;
}

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm<LoginParam>();

  const navigate = useNavigate();
  const location = useLocation();
  let state = location.state as { from: Location };
  let from = state ? state.from.pathname : '/';

  const { signin } = useLoginService();

  const handleFinish = (formData: LoginParam): Promise<boolean> => {
    const { account, password } = formData;

    var formdata = new FormData();
    formdata.append('client_id', 'ro.client');
    formdata.append('grant_type', 'password');
    formdata.append('username', account);
    formdata.append('client_secret', 'secret');
    formdata.append('password', password);

    return new Promise<boolean>(() => {});
  };

  form.submit = () => {
    form.validateFields().then(() => {
      const formData = form.getFieldsValue();
      signin(formData, () => {
        message.success('登录成功');
        setLoading(false);
        navigate(from, { replace: true });
      });
    });
  };

  return {
    loading,
    setLoading,
    form,
  };
}
