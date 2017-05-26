* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

  ```
  	- Answer: What is Sequelize?

  	- Answer: What advantages does it offer?

  	- Answer: How do I install it? How do I incorporate it into my app?

  	- Answer: What the heck is a Sequelize model? What role will it play?

  	- Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

  		- How would I model it in Sequelize? 

  		- How would I query for all the records where the Independence Year was less than 50 years ago?

  		- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)

  	- Bonus: How do I use Sequelize to make changes to an existing table with data in it? 
  ```

/==================================================================================================================

What is Sequelize.js ?
Sequelize.js is an ORM (Object/Relational Mapper) which provides easy access to MySQL, MariaDB, SQLite or PostgreSQL databases by mapping database entries to objects and vice versa. It has very powerful migrations mechanism that can transform existing database schema into a new version. It also provides database synchronization mechanisms that can create database structure by specifying the model structure.

Although Sequelize.js is new library, it have been battle tested. Currently web sites like Shutterstock, Clevertech, Metamarkets and Innofluence have announced that they are using Sequelize.js as ORM of their website.

Why do we need learn Sequelize.js ?
Since Node.js is build on the top of JavaScript. It has all the characteristics that JavaScript has. As web developers we are familiar with JavaScript so it is very easy to understand the Node.js and Sequelize.js.

Sequelize.js is an young ORM that has all features that any ORM has and it is being actively contributed by open source developers. Basically Sequelize.js has good support for database synchronization, eager loading, associations, transactions and migrations.

Another main advantage of Sequelize.js is it easy to test. we can use Mocha like frameworks to run tests. We can have two database one for tests and one for develop environments, as we will see in this article.

We can install sequelize.js by running
npm install sequelize --save