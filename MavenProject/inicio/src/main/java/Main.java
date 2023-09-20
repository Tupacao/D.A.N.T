import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.util.LinkedList;
import java.io.*;
import java.net.*;

public class Main {


    public static String getHtml(String endereco) {
      URL url;
      InputStream is = null;
      BufferedReader br;
      String resp = "", line;

      try {
         url = new URL(endereco);
         is = url.openStream(); // throws an IOException
         br = new BufferedReader(new InputStreamReader(is));

         while ((line = br.readLine()) != null) {
            resp += line + "\n";
         }
      } catch (MalformedURLException mue) {
         mue.printStackTrace();
      } catch (IOException ioe) {
         ioe.printStackTrace();
      }

      try {
         is.close();
      } catch (IOException ioe) {
         // nothing to see here

      }

      return resp;
   }


    public static void main(String[] args)  throws Exception {


        GameDAO gamedao = new GameDAO();

        // Exemplo de inserção de um jogo
       
    
        //gamedao.removegameByID(2397450);

        // Feche a conexão quando não precisar mais
       

        Game game = gamedao.getGameByID(2397540);

        System.out.println("jogo encontrado pelo id:");
        System.out.println(game.getNome());
        LinkedList<Game> gameList = gamedao.GetAllGames();
        System.out.println("todos os jogos:\n\n");

        gameList.forEach(numero -> {
            String GameUrl ="http://store.steampowered.com/api/appdetails/?appids=";
            GameUrl += numero.getAppid();
            System.out.println("game url = " + GameUrl);
            String html = getHtml(GameUrl);
            System.out.println(html);
        });
     
        String json;

         gamedao.closeConnection();
        
    }

     
}
