import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, message } from 'antd';
import { useAuth } from '../auth/useAuth';

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

  const { signin } = useAuth();

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
