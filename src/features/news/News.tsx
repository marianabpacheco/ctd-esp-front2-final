import { useEffect, useState } from "react";
import { AssinarImage, CloseButton as Close } from "../../assets";
import { obterNoticias } from "./fakeRest";
import { INews } from "./types";
import {NewsCard} from './NewsCard/index'
import { PremiumModal } from "./PremiumModal/index";
import { NormalModal } from "./NormalModal/index";
import * as S from "./styled";
import  {formatText} from "../../utils/formatText";
import  {formatTime} from "../../utils/formatTime";


const Noticias = () => {
  const [noticias, setNoticias] = useState<INews[]>([]);
  const [modal, setModal] = useState<INews | null>(null);


    const obterInformacoes = async () => {
      const resposta = await obterNoticias();

      const data = resposta.map((noticia) => {
        return {
          id: noticia.id,
          titulo: formatText(noticia.titulo),
          description:  noticia.description,
          date: `Faz ${formatTime(noticia.date)} minutos`,
          premium: noticia.premium,
          image: noticia.image,
          descriptionCurto: noticia.description.substring(0, 100),
        };
      });

      setNoticias(data);
    };

    useEffect(() => {
      obterInformacoes();         
    })

  return (
    <S.ContainerNoticias>
      <S.TituloNoticias>Noticias dos Simpsons</S.TituloNoticias>
      <S.ListaNoticias>
        {noticias.map((noticia) => (
          <NewsCard
            key={noticia.id}
            image={noticia.image}
            title={noticia.titulo}
            date={noticia.date}
            shortDescription={noticia.descriptionCurto}
            setModal={()=>setModal(noticia)}
          />
        
        ))}
        {modal ? (
          modal.premium ? (
            <S.ContainerModal>
              <PremiumModal
              setModal={() => setModal(null)}
              close={Close}
              imageSubscription={AssinarImage}
              />
            </S.ContainerModal>
          ) : (
            <S.ContainerModal>
              <NormalModal
              setModal={() => setModal(null)}
              image={modal.image}
              title={modal.titulo}
              description={modal.description}
              close={Close}
              />
            </S.ContainerModal>
          )
        ) : null}
      </S.ListaNoticias>
    </S.ContainerNoticias>
  );
};

export default Noticias;
