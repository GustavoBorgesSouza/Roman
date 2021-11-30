USE ROMAN;
GO

INSERT INTO TipoUsuario(tituloUsuario)
VALUES ('Administrador'),('Professor')
GO

INSERT INTO Usuario(idTipoUsuario,nomeUsuario,emailUsuario,senhaUsuario)
VALUES ('1', 'Administrador', 'administrador@gmail.com', '123456789'),
       ('2' ,'Professor', 'professor@gmail.com','987654321')
GO

INSERT INTO Tema(nomeTema)
VALUES ('Artes'),
       ('Biologia'),
	   ('Matemática')
GO

INSERT INTO Projeto(idTema,nomeProjeto,descricaoProjeto)
VALUES ('1','Arte Contemporânea','A Arte Contemporânea é uma tendência artística que começou a se manifestar no período Pós-Guerra como uma ação de separação com a Arte Moderna.'),
       ('2','Hereditariedade','Em genética, hereditariedade é o conjunto de processos biológicos que asseguram que cada ser vivo receba e transmita informações genéticas através da reprodução.'),
	   ('3','Fórmula de bhaskara','A fórmula de Bhaskara é um método resolutivo para equações do segundo grau utilizado para encontrar raízes a partir dos coeficientes da equação.')
GO

   -- Selects para teste 
      select * from TipoUsuario;
      select * from Usuario;
	  select * from Tema;
	  select * from Projeto;