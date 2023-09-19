import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class DAO { 
    


    private Connection conexao;

    public DAO() {
        conectar();
    }

    public boolean conectar() {
            String driverName = "org.postgresql.Driver";                    
            String serverName = "localhost";
            String mydatabase = "DANT";
            int porta = 5432;
            String url = "jdbc:postgresql://" + serverName + ":" + porta +"/" + mydatabase;
            String username = "gaok1";
            String password = "2004";
            boolean status = false;
    
            try {
                Class.forName(driverName);
                conexao = DriverManager.getConnection(url, username, password);
                status = (conexao == null);
                System.out.println("Conexão efetuada com o postgres!\n\n");
            } catch (ClassNotFoundException e) { 
                System.err.println("Conexão NÃO efetuada com o postgres -- Driver não encontrado -- " + e.getMessage());
            } catch (SQLException e) {
                System.err.println("Conexão NÃO efetuada com o postgres -- " + e.getMessage());
            }
    
            return status;
        }

    public void insertGame(int appid, String name) {
        String sql = "INSERT INTO games (appid, nome) VALUES (?, ?)";
        try (PreparedStatement preparedStatement = conexao.prepareStatement(sql)) {
            preparedStatement.setInt(1, appid);
            preparedStatement.setString(2, name);
            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
            throw new RuntimeException("Erro ao inserir jogo", e);
        }
    }

    public void closeConnection() {
        if (conexao != null) {
            try {
                conexao.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}

    

