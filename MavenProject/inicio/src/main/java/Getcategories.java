import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public class Getcategories {
    public static void main(String[] args) {
        String apiKey = "A73799393A495E440D238069A1E7BB81"; // Substitua pela sua chave de API da Steam

        try {
            HttpClient httpClient = HttpClients.createDefault();
            HttpGet httpGet = new HttpGet("http://api.steampowered.com/ISteamApps/GetAppCategories/v0002/?key=" + apiKey);

            HttpResponse response = httpClient.execute(httpGet);
            System.out.println("Código de status: " + response);
            String jsonResponse = EntityUtils.toString(response.getEntity());

            // Analisa a resposta JSON
            JsonObject jsonObject = JsonParser.parseString(jsonResponse).getAsJsonObject();
            JsonArray categoriesArray = jsonObject.getAsJsonArray("categories");

            // Imprime as categorias
            for (int i = 0; i < categoriesArray.size(); i++) {
                JsonObject categoryObject = categoriesArray.get(i).getAsJsonObject();
                String categoryId = categoryObject.get("id").getAsString();
                String categoryName = categoryObject.get("description").getAsString();

                System.out.println("ID da Categoria: " + categoryId);
                System.out.println("Nome da Categoria: " + categoryName);
                System.out.println("-----------------------");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
