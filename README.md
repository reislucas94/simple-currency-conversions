# simple-currency-conversions, by Lucas Reis

In order to run the backend of my application:

	Download the .NET Core 3.1 SDK to your machine, from https://dotnet.microsoft.com/download/dotnet-core/3.1

	With powershell/cmd pointing to folder "SimpleCurrencyConversions-backend", run the code inside the quotation marks.
	
	Execute: "dotnet build SimpleCurrencyConversions.sln" to build the project, using .NET Core 3.1 you have installed previously
	Execute: "cd SimpleCurrencyConversions.API" to enter the root project
	Execute: "dotnet run" to run the application.

	After that, open the browser and access "localhost:5000/swagger/index.html". 
	If everything is working properly, it is going to show the two routes the API has (you can test the APIs there).

In order to run the frontend of my application:

	Machine must have Node installed. Download at "https://nodejs.org/pt-br/download/"

	With powershell/cmd pointing to folder "SimpleCurrencyConversions-ui", run the code inside the quotation marks.

	Execute "npm install -g @angular/cli" to install angular on your machine (if you don't have it yet)
	Execute "npm install" to install" the project dependencies
	Execute "ng serve" to run the application.

	After all the steps, you should be able to interact with the application under "localhost:4200", on your browser.

