public class Game {
    public int appid;
    public String nome;
    Game(){

    }

    Game(int appid, String Nome){
        this.appid = appid;
        this.nome = Nome;
    }   



    //getter methods
    public int getAppid() {
        return appid;
    }
    public String getNome() {
        return nome;
    }

    //setters
    public void setAppid(int appid) {
        this.appid = appid;
    }
    public void setNome(String Nome) {
        this.nome = Nome;
    }

}
