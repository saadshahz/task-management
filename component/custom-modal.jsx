import { Modal } from "antd"

export default function CustomModal(props) {

    const { isModalOpen, handleClose, handleSubmit, title, content } = { ...props }
    return (
        <Modal className="" open={isModalOpen} onOk={handleSubmit} onCancel={handleClose} footer={null}>
            <h1 className="pt-2 text-primary text-center text-modalTitle font-bold  " >{title}</h1>
            {content}
        </Modal >
    )
}