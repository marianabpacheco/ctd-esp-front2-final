import * as S from '../styled';
import {NormalModalProps} from './types'

export function NormalModal({setModal,close,image,title,description}:NormalModalProps){
    return(
        <S.CardModal>
                <S.CloseButton onClick={() => setModal()}>
                  <img src={close} alt="close-button" />
                </S.CloseButton>
                <S.ImageModal src={image} alt="news-image" />
                <S.ContainerTexto>
                  <S.TituloModal>{title}</S.TituloModal>
                  <S.DescriptionModal>{description}</S.DescriptionModal>
                </S.ContainerTexto>
        </S.CardModal>
    )
}