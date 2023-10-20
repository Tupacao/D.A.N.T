package Estruturas;

import static spark.Spark.*;

public class Aplicacao {
    public static void main(String[] args) {
        UserDAO userDAO = new UserDAO();
        ForumDAO  forumDAO = new ForumDAO();
        GameDAO gameDAO = new GameDAO();
        PostDAO postDAO = new PostDAO();
        ComentarioDAO comentarioDAO = new ComentarioDAO();

        path("/home" , () ->{
            post("/cadastro" , (req, res) ->{
                String user = req.queryParams("user");
                System.out.println(user); //TESTE
                String senha = req.queryParams("senha");
                System.out.println(senha); //TESTE
                if(userDAO.authentication(user,senha)){
                    res.status(0);
                };
                return 0;  
            });
        });

    }
}
