USE ROMAN;
GO

INSERT INTO TipoUsuario(idTipoUsuario,tituloUsuario)
VALUES ('1','Administrador'),('2','Professor')

INSERT INTO Usuario(idUsuario,idTipoUsuario,nomeUsuario,emailUsuario,senhaUsuario)
VALUES ('1', '1', 'Administrador', 'administrador@gmail.com', '123456789')
       ('2', '2' 'Professor', 'professor@gmail.com','987654321')

INSERT INTO Tema(idTema,nomeTema)
VALUES ('1','Artes')
       ('2','Biologia')
	   ('3','Matem�tica')

INSERT INTO Projeto(idProjeto,idTema,nomeProjeto,descricaoProjeto)
VALUES ('1','1','Arte Contempor�nea','A Arte Contempor�nea � uma tend�ncia art�stica que come�ou a se manifestar no per�odo P�s-Guerra como uma a��o de separa��o com a Arte Moderna.')
       ('2','2','Hereditariedade','Em gen�tica, hereditariedade � o conjunto de processos biol�gicos que asseguram que cada ser vivo receba e transmita informa��es gen�ticas atrav�s da reprodu��o.')
	   ('3','3','F�rmula de bhaskara','A f�rmula de Bhaskara � um m�todo resolutivo para equa��es do segundo grau utilizado para encontrar ra�zes a partir dos coeficientes da equa��o.')