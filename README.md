# TechBricks-Backend Task
NestJs and PostegreSQL to create a monolithic back-end application to serve books data to front end.    
using Repository pattern
* Task:   
Deploy backend on Heroku free tier (use the database as an addon)

## Hosting

Hosted on Heroku platform    
using heroku postgres database    
https://teckbricks-books.herokuapp.com/



## Endpoints

* retrieve all books  
  https://teckbricks-books.herokuapp.com/books
  
  
*  retrieve an author and his books   
  https://teckbricks-books.herokuapp.com/author/2/books   
    Note: "the number found in the endpoint is the id of the auther"  
  
  
*  retrieve a publisher and the books published   
  https://teckbricks-books.herokuapp.com/books/publisher
  
  
  ## Attachment
  
  attached postman collection for endpoints
  
  ## Database design
  ### Relational Model
  ![Relational Model](https://github.com/magdamagdy/TechBricks-Task/blob/main/Relational%20Model.png)
