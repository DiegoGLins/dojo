import React from "react";

interface SubtitleProps {
  conteudo: string;
  cor?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ conteudo, cor }) => {
  return (
    <>
      <h2 style={{ color: cor || "greenyellow" }}>{conteudo}</h2>
    </>
  );
};

export default Subtitle;
