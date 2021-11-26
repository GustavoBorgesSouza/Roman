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
	   ('3','Matemática')

INSERT INTO Projeto(idProjeto,idTema,nomeProjeto,descricaoProjeto)
VALUES ('1','1','Arte Contemporânea','A Arte Contemporânea é uma tendência artística que começou a se manifestar no período Pós-Guerra como uma ação de separação com a Arte Moderna.')
       ('2','2','Hereditariedade','Em genética, hereditariedade é o conjunto de processos biológicos que asseguram que cada ser vivo receba e transmita informações genéticas através da reprodução.')
	   ('3','3','Fórmula de bhaskara','A fórmula de Bhaskara é um método resolutivo para equações do segundo grau utilizado para encontrar raízes a partir dos coeficientes da equação.')