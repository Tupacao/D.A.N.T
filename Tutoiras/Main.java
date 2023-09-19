public class Main {
    public static void main(String[] args) {
        String username = "gaok1";
        String password = "2004";

        DAO dao = new DAO();

        // Exemplo de inserção de um jogo
        dao.insertGame(851850, "DRAGON BALL Z: KAKAROT");

        // Feche a conexão quando não precisar mais
        dao.closeConnection();
    }
}
