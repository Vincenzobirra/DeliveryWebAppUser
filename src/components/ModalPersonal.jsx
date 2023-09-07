import { Modal } from 'antd';
import { Global } from '../Global';

export function ModalPersonal  (props ) {
    return (
        <>
        <Modal title="Termini e Condizioni" open={ props.show } onOk={() => Global.showModalContract(false) } onCancel={ () => Global.showModalContract(false) }>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quod dolorum omnis impedit sunt, quisquam dolores alias fuga dolorem placeat voluptatibus perferendis repudiandae, exercitationem iure hic aliquid consectetur soluta illo..</p>
           
        </Modal>
        </>
    )
}