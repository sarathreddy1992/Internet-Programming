import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.io.*;


public class JHTTPclient {


	//-----------<Function to implement the "GET" request from the server>------------------
	private void GetMethod() throws Exception 
	{
		URL myUrl;
		HttpURLConnection http;
		String inputLine;
		StringBuffer sb;
		try 
		{
		String url="http://localhost:80/";
		myUrl = new URL(url);
		URLConnection connect = myUrl.openConnection();
		http = (HttpURLConnection)connect;
        System.out.println("Http connection establilshed Succesfully");
        http.setRequestMethod("GET");
		System.out.println("\n Sending GET request");
		System.out.println("Response Code : " + http.getResponseCode());  
		
		
		//---------------Receive data from the html for the get command------------------------------
        if(http.getResponseCode()==200)
        {
		InputStream i = http.getInputStream();
        InputStreamReader is = new InputStreamReader(i);
		BufferedReader br = new BufferedReader(is);
		sb = new StringBuffer();
        while ((inputLine = br.readLine()) != null) 
        {
			sb.append(inputLine);
		}
		br.close();
		System.out.println(sb.toString());
        }
		}
		catch (MalformedURLException m)
		{
			System.out.println("URL doesnt specify to any location");
		}
	}
	//-------------------------<Function to implement the HEAD request from the server>-----------------------------------------------------
	private void HeadMethod() throws Exception
	{
		URL myUrl;
	HttpURLConnection http;
	String inputLine;
	StringBuffer sb;
		try 
		{

		String url = "http://localhost:80/";

		myUrl = new URL(url);
		URLConnection connect = myUrl.openConnection();
		http = (HttpURLConnection)connect;
		System.out.println("Http connection establilshed Succesfully");
		http.setRequestMethod("HEAD");
		System.out.println("Sending HEAD Request");
		System.out.println("Response Code : " + http.getResponseCode());
		
		//---------------------<Receive the Data from HTML for the head command>----------------------
        if(http.getResponseCode()==200)
        {
		InputStream i = http.getInputStream();
        InputStreamReader is = new InputStreamReader(i);
        BufferedReader br = new BufferedReader(is);
		sb = new StringBuffer();
       while ((inputLine=br.readLine()) != null) 
       {
			sb.append(inputLine);
		}
		br.close();
		System.out.println(sb.toString());
        }
		}
		catch(MalformedURLException e)
		{
			System.out.println("URL doesnt specify to any location");
		}
	}

	//-----------------------------<Function to implement the POST request from the Server>----------------------------

	private void PostMethod() throws Exception
	{
		URL myUrl;
		HttpURLConnection http;
		String inputLine;
		StringBuffer sb;
try {
		String url = "http://localhost:80/";
		myUrl = new URL(url);
		URLConnection connect = myUrl.openConnection();
		http = (HttpURLConnection)connect;
		System.out.println("Http connection establilshed Succesfully");
		http.setRequestMethod("POST");
		System.out.println(" Sending POST request");
		String urlParameters = "FirstName=Sarath&LastName=Patlolla&password=123456\n\r";
		http.setDoOutput(true);
		DataOutputStream wr = new DataOutputStream(http.getOutputStream());
		wr.writeBytes(urlParameters);
		wr.flush();
		wr.close();

		int responseCode = http.getResponseCode();
		System.out.println("Response Code : " + responseCode);

		if(http.getResponseCode()==200)
		{
		InputStream i = http.getInputStream();
        InputStreamReader is = new InputStreamReader(i);
        BufferedReader br = new BufferedReader(is);
		sb = new StringBuffer();

		while ((inputLine = br.readLine()) != null) {
			sb.append(inputLine);
		}
		br.close();

		//print result
		System.out.println(sb.toString());
		}
	}
catch(MalformedURLException m)
{
	System.out.println("Entered URL is wrong");
}
	}
	
public static void main(String[] args) throws Exception 

{
	     System.out.println("*************CSE 686 InterNet Programming****************");
	     System.out.println("*************ASSIGNMENT #2************************");
	     System.out.println("\n\n");
        JHTTPclient client = new JHTTPclient();
        System.out.println("Http GET request");
        System.out.println("---------------------------------------------------");
		client.GetMethod();
		
		System.out.println("\n Http HEAD request");
		 System.out.println("---------------------------------------------------");
		client.HeadMethod();
		
		System.out.println("\nHttp POST request");
		 System.out.println("---------------------------------------------------");
		client.PostMethod();

	}
	

}