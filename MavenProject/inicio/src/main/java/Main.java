import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.util.LinkedList;
import java.io.*;
import java.net.*;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public class Main {
   public static void main(String[] args) throws Exception {

      GameDAO gamedao = new GameDAO();
      /*  
      LinkedList<Game> gameList = gamedao.GetAllGames();

      System.out.println("todos os jogos:\n\n");
      // tratar exceção null pointed no for each

      gameList.forEach(gamedata -> {
         gamedata.setJson(GetGameJson.GetGameJsonData(gamedata.getAppid()));
         System.out.println(gamedata.getJson());
         
         gamedao.InsertJson(gamedata.getAppid(), gamedata.getJson());


      });
      */
       // Suponhamos que gamedao.getGameByID(5109).getJson() retorna um JSON válido.
       String jason = gamedao.getGameByID(5109).getJson();

       // Vamos assumir que jason contém um JSON válido.
       JsonObject jsonObject = JsonParser.parseString(jason).getAsJsonObject();

       // Agora, você pode obter o valor da propriedade "data" corretamente.
       

       if (jsonObject.has("data")) {
         String dataValue = jsonObject.get("data").getAsString();
         System.out.println("Valor da propriedade 'data': " + dataValue);
     } else {
         System.out.println("A chave 'data' não existe no objeto JSON.");
     }
     
      
    
   }

}
