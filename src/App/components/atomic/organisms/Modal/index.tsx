import React from 'react';
import Button from '@Atoms/Buttom';
import ReactPortal from '@Components/ReactPortal';
import Subtitle from '@Components/atomic/atoms/Subtitle';
import { Overlay, Container, Footer } from './styles';

type ButtonProps = {
  label?: string;
  onClick: () => void;
  variation?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'smallPrimary'
    | 'smallSecondary';
  danger?: boolean;
};

type Props = {
  title: string;
  visible: boolean;
  danger?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  cancelButtonProps?: ButtonProps;
  confirmButtonProps?: ButtonProps;
};

function Modal({
  title,
  children,
  visible,
  cancelButtonProps,
  confirmButtonProps,
  isLoading = false,
}: Props) {
  if (!visible) {
    return null;
  }

  return (
    <ReactPortal containerId="modal-root">
      <Overlay>
        <Container>
          <Subtitle>{title}</Subtitle>

          <div className="modal-body">{children}</div>

          <Footer>
            <div>
              {cancelButtonProps && (
                <Button
                  variation="tertiary"
                  disabled={isLoading}
                  danger
                  {...cancelButtonProps}
                >
                  {cancelButtonProps?.label ?? 'Cancelar'}
                </Button>
              )}
            </div>

            <div>
              {confirmButtonProps && (
                <Button disabled={isLoading} {...confirmButtonProps}>
                  {confirmButtonProps?.label ?? 'Confirmar'}
                </Button>
              )}
            </div>
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}

export default Modal;
