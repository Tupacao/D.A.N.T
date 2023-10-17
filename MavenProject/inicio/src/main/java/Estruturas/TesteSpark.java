package Estruturas;

import static spark.Spark.*;

public class TesteSpark {
    public static void main(String[] args) {
        path("/teste", () ->{
            get("/hello", (req, res) -> "Sexo infinito");
            
        });
    }
}