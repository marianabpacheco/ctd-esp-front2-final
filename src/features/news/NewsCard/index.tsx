import * as S from '../styled';
import { NewsCardProps } from './types';

export function NewsCard({image,title,date,shortDescription,setModal}: NewsCardProps){
  return(
    <S.CardNoticia>
            <S.ImageCardNoticia src={image} />
            <S.TituloCardNoticia>{title}</S.TituloCardNoticia>
            <S.DateCardNoticia>{date}</S.DateCardNoticia>
            <S.DescriptionCardNoticia>
              {shortDescription}
            </S.DescriptionCardNoticia>
            <S.BotaoLeitura onClick={() => setModal()}>Ver más</S.BotaoLeitura>
    </S.CardNoticia>
  )
}