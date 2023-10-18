Create table games(
appid (int) priumary key,
json (text),
categoria (int),
CONSTRAINT fk_games_categoria FOREIGN KEY (categoria) REFERENCES categoria(id)
)


CREATE TABLE usuario (
  ID SERIAL PRIMARY KEY,
  Nome VARCHAR(46) NOT NULL,
  Senha VARCHAR(20) NOT NULL,
  Email VARCHAR(46) NOT NULL,
  Foto BYTEA NOT NULL, -- BYTEA é o tipo adequado para armazenar dados binários, como imagens
  DataNasc DATE NOT NULL,
  DataCadastro DATE NOT NULL
);


CREATE TABLE Forum (
 id  serial ,
	nome varchar(45) not null,
	jogos_appid int not null,
	primary key (id,jogos_appid),
	constraint fk_forum_jogosAppid foreign key (jogos_appid) references games (appid)
	
);


CREATE TABLE Posts (
  id serial,
  Postagem TEXT NOT NULL,
  Forum_ID INT NOT NULL,
  User_ID INT NOT NULL,
  categoria_ID INT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_Post_ForumID FOREIGN KEY (Forum_ID)  REFERENCES forum (id),
  CONSTRAINT fk_Post_UserID FOREIGN KEY (User_ID) REFERENCES usuario (id),
  CONSTRAINT fk_Post_CategoriaID FOREIGN KEY (categoria_ID) REFERENCES categoria (id)

);


CREATE TABLE comentario (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  coment TEXT NOT NULL,
  DataPostagem DATETIME,
  PostID INT NOT NULL,
  UserID INT NOT NULL,
  CONSTRAINT fk_Coment_postId FOREIGN KEY (PostID) REFERENCES Posts(ID),
  CONSTRAINT fk_Coment_userId FOREIGN KEY (UserID) REFERENCES User(ID)
);

CREATE TABLE categoria{
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(45) NOT NULL
}

CREATE TABLE subcoment{
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  conteudo text NOT NULL,
  comentID INT NOT NULL,
  CONSTRAINT fk_subcoment_ComentID FOREIGN KEY(comentID) REFERENCE comentario(ID)
}


