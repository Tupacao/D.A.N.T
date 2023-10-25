package Estruturas;

import spark.Spark.*;

import Service.UserService;

public class Aplicacao {
    public static void main(String[] args) {
        UserService user = new UserService();
        path("/HomePage", () ->{
            post("/Login", (req,res) -> {
                user.auth(Request, Response);
                return 0;
            });
        });
    }

}
