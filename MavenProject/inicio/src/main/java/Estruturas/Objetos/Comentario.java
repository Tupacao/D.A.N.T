package Estruturas.Objetos;

public class Comentario {
    int id;
    String comentario;
    int postID;
    int userID;
    java.sql.Date data;

    //construtor para pegar do banco
    public Comentario(int id, String comentario, int postID, int userID, java.sql.Date data) {
        this.id = id;
        this.comentario = comentario;
        this.postID = postID;
        this.userID = userID;
        this.data = data;
    }

    //construtor para inserir no banco
    public Comentario(String comentario, int postID, int userID, java.sql.Date data) {
        this.comentario = comentario;
        this.postID = postID;
        this.userID = userID;
        this.data = data;
    }


    //setters
    public void setId(int id) {
        this.id = id;
    }
    public void setComentario(String comentario) {
        this.comentario = comentario;
    }
    public void setPostID(int postID) {
        this.postID = postID;
    }
    public void setUserID(int userID) {
        this.userID = userID;
    }
    public void setData(java.sql.Date data) {
        this.data = data;
    }

    //getters
    public int getId() {
        return id;
    }
    public String getComentario() {
        return comentario;
    }
    public int getPostID() {
        return postID;
    }
    public int getUserID() {
        return userID;
    }
    public java.sql.Date getData() {
        return data;
    }


}
