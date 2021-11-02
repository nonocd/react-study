import { message as Message, Modal, ModalFuncProps, notification } from 'antd';

notification.config({
  placement: 'topRight',
  duration: 3,
});

function confirm(options: ModalFuncProps) {
  const opt: ModalFuncProps = { centered: true, ...options };
  return Modal.confirm(opt);
}

export function useMessage() {
  return {
    confirm: confirm,
    message: Message,
    notification: notification,
  };
}
