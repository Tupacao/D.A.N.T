package Estruturas;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.ResultSet;
import Estruturas.Objetos.Forum;
import java.util.LinkedList;

public class ForumDAO extends DAO {

    ForumDAO() {
        super();
    }

    public boolean insertForum(int gameid, String nome ){
  
        String sql = "INSET INTO forum (appid,nome) VALUES (?,?)";
        try{PreparedStatement  preparedStatement = conexao.prepareStatement(sql);
        preparedStatement.setInt(1, gameid);
        preparedStatement.setString(2, nome);
        preparedStatement.executeUpdate();
        return true;}
        catch(SQLException e){
            e.printStackTrace();
            return false;
        }
    }

    public boolean removeForumByID(int gameid){
        String sql = "DELETE FROM forum WHERE appid = ?";
        try{
            PreparedStatement preparedStatement = conexao.prepareStatement(sql);
            preparedStatement.setInt(1, gameid);
            preparedStatement.executeUpdate();
            return true;
        }catch(SQLException e){
            e.printStackTrace();
            return false;
        }
    }

    public Forum getForumByGameID(int gameid){
        Forum forum = null;
        String sql = "SELECT * FROM forum WHERE appid = ?";
        try{
            PreparedStatement preparedStatement = conexao.prepareStatement(sql);
            preparedStatement.setInt(1, gameid);
            ResultSet resultSet = preparedStatement.executeQuery();
            if(resultSet.next()){
                int idForum = resultSet.getInt("appid");
                String nome = resultSet.getString("nome");
                forum = new Forum(idForum,nome);
                return forum;
            }else{
                return null;
            }
        }catch(SQLException e){
            e.printStackTrace();
            return null;
        }
    }

    public LinkedList<Forum> getAllForums() throws Exception{ //não to afim de tratar exceção aqui
        LinkedList<Forum> forums = new LinkedList<Forum>();
        String sql = "SELECT * FROM forum ORDER BY appid";
        PreparedStatement preparedStatement = conexao.prepareStatement(sql);
        ResultSet resultSet = preparedStatement.executeQuery();
        while(resultSet.next()){
            int idForum = resultSet.getInt("appid");
            String nome = resultSet.getString("nome");
            Forum forum = new Forum(idForum,nome);
            forums.add(forum);
        }
        return forums;
    }

    
}
